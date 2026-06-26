#!/usr/bin/env bun
/**
 * kanban-board-svg.ts — Generate a compact workitems board SVG from workspace tickets.
 *
 * Reads tickets from the canonical workitems directory (with a fallback to the
 * legacy kanban path) and produces a themed SVG with colored priority dots,
 * lane accent bars, and a capped Done column.
 *
 * Usage:
 *   bun run kanban-board-svg.ts [--out path.svg] [--theme dark|light|auto] [--post]
 *
 * Options:
 *   --out <path>      Output file (default: /workspace/tmp/kanban-board.svg)
 *   --theme <name>    dark | light | auto (auto selects by time-of-day)
 *   --post            Write an IPC message with inline SVG media attachment
 *   --chat <jid>      Override chat JID (default: web:default)
 *   --message <txt>   Custom message text (default includes timestamp)
 *   --done-max <n>    Max Done cards to show (default: 5)
 *   --workitems <dir> Override canonical workitems directory
 *   --kanban <dir>    Legacy alias for the old kanban directory path
 */

import { readdirSync, readFileSync, existsSync, writeFileSync, mkdirSync, statSync } from "fs";
import { join, basename } from "path";

// ── CLI parsing ─────────────────────────────────────────────────

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("Usage: bun kanban-board-svg.ts [options]");
  console.log("");
  console.log("  --out <path>      Output SVG path");
  console.log("  --theme <name>    dark | light | auto");
  console.log("  --post            Post to chat via IPC");
  console.log("  --chat <jid>      Target chat JID");
  console.log("  --message <txt>   Message text");
  console.log("  --done-max <n>    Max done cards shown (default 5)");
  console.log("  --workitems <dir> Workitems directory path");
  console.log("  --kanban <dir>    Legacy alias for the old kanban directory path");
  console.log("  Defaults to /workspace/workitems and falls back to /workspace/kanban if needed.");
  process.exit(0);
}

const args = process.argv.slice(2);
const getArg = (flag: string): string | undefined => {
  const idx = args.indexOf(flag);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : undefined;
};

function resolveBoardDir(): string {
  const explicit = getArg("--workitems") || process.env.WORKITEMS_DIR || getArg("--kanban") || process.env.KANBAN_DIR;
  if (explicit) return explicit;
  return existsSync("/workspace/workitems") ? "/workspace/workitems" : "/workspace/kanban";
}

const BOARD_DIR = resolveBoardDir();
const OUTPUT = getArg("--out") || "/workspace/tmp/kanban-board.svg";
const THEME_RAW = (getArg("--theme") || "auto").trim().toLowerCase();
const POST_TO_IPC = args.includes("--post");
const CHAT_JID = getArg("--chat") || process.env.PICLAW_CHAT_JID || "web:default";
const MESSAGE_TEXT = getArg("--message") || `Workitems board as of ${new Date().toISOString().slice(0, 10)}`;
const DONE_MAX = Math.max(1, parseInt(getArg("--done-max") || "5", 10) || 5);

// ── Themes ──────────────────────────────────────────────────────

interface Palette {
  bgBoard: string;
  bgLane: string;
  bgCard: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  moreText: string;
  boardTitle: string;
  cardStroke: string;
}

const PALETTES: Record<string, Palette> = {
  dark: {
    bgBoard: "#1a1a2e",
    bgLane: "#16213e",
    bgCard: "#0f3460",
    textPrimary: "#e2e8f0",
    textSecondary: "rgba(255,255,255,0.5)",
    textMuted: "#4b5563",
    moreText: "rgba(255,255,255,0.4)",
    boardTitle: "rgba(255,255,255,0.35)",
    cardStroke: "rgba(255,255,255,0.08)",
  },
  light: {
    bgBoard: "#f1f5f9",
    bgLane: "#e2e8f0",
    bgCard: "#ffffff",
    textPrimary: "#1e293b",
    textSecondary: "#64748b",
    textMuted: "#94a3b8",
    moreText: "#94a3b8",
    boardTitle: "#94a3b8",
    cardStroke: "#cbd5e1",
  },
};

function getAutoTheme(): "dark" | "light" {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 8 ? "dark" : "light";
}

const THEME = THEME_RAW === "auto" ? getAutoTheme() : (PALETTES[THEME_RAW] ? THEME_RAW : getAutoTheme());
const P = PALETTES[THEME] || PALETTES.dark;

// ── Lane & priority colors ──────────────────────────────────────

const LANES = [
  { dir: "00-inbox", label: "Inbox", color: "#6b7280" },
  { dir: "10-next", label: "Next", color: "#3b82f6" },
  { dir: "20-doing", label: "Doing", color: "#f59e0b" },
  { dir: "30-blocked", label: "Blocked", color: "#ef4444" },
  { dir: "40-review", label: "Review", color: "#8b5cf6" },
  { dir: "50-done", label: "Done", color: "#22c55e" },
];

const PRIORITY_COLORS: Record<string, string> = {
  critical: "#dc2626",
  high: "#f59e0b",
  medium: "#3b82f6",
  low: "#6b7280",
};

// ── Ticket parsing ──────────────────────────────────────────────

interface Ticket {
  title: string;
  priority: string;
  completed: string;
}

function readTickets(laneDir: string): Ticket[] {
  const fullPath = join(BOARD_DIR, laneDir);
  if (!existsSync(fullPath)) return [];
  const tickets: Ticket[] = [];
  for (const fn of readdirSync(fullPath).sort()) {
    if (!fn.endsWith(".md")) continue;
    const text = readFileSync(join(fullPath, fn), "utf-8").slice(0, 2000);
    const titleM = text.match(/^title:\s*(.+)/m);
    const prioM = text.match(/^priority:\s*(.+)/m);
    const compM = text.match(/^completed:\s*(.+)/m);
    const title = titleM ? titleM[1].trim() : fn.replace(".md", "").replace(/-/g, " ");
    const priority = prioM ? prioM[1].trim().toLowerCase() : "";
    const completed = compM ? compM[1].trim() : "0000";
    tickets.push({ title, priority, completed });
  }
  return tickets;
}

// ── SVG generation ──────────────────────────────────────────────

const COL_W = 230;
const COL_GAP = 16;
const PAD = 20;
const HEADER_H = 36;
const CARD_H = 32;
const CARD_GAP = 6;
const CORNER = 8;
const FONT = "system-ui, -apple-system, 'Segoe UI', sans-serif";
const MAX_TITLE = 38;

function escXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function truncTitle(s: string): string {
  return s.length > MAX_TITLE ? s.slice(0, MAX_TITLE - 3) + "…" : s;
}

function generate(): string {
  // Build columns: visible tickets + total + extra count
  const columns: Array<{
    label: string;
    color: string;
    tickets: Ticket[];
    total: number;
    extra: number;
  }> = [];
  let maxVisible = 0;
  let grandTotal = 0;

  for (const lane of LANES) {
    const all = readTickets(lane.dir);
    grandTotal += all.length;
    let visible: Ticket[];
    let extra: number;
    if (lane.dir === "50-done" && all.length > DONE_MAX) {
      // Sort by completed desc, show most recent
      all.sort((a, b) => (b.completed > a.completed ? 1 : b.completed < a.completed ? -1 : 0));
      visible = all.slice(0, DONE_MAX);
      extra = all.length - DONE_MAX;
    } else {
      visible = all;
      extra = 0;
    }
    columns.push({ label: lane.label, color: lane.color, tickets: visible, total: all.length, extra });
    maxVisible = Math.max(maxVisible, visible.length + (extra > 0 ? 1 : 0));
  }

  const totalW = PAD * 2 + columns.length * COL_W + (columns.length - 1) * COL_GAP;
  const totalH = PAD * 2 + HEADER_H + 12 + maxVisible * (CARD_H + CARD_GAP) + 16;

  const lines: string[] = [];
  lines.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${totalH}" width="${totalW}" height="${totalH}">`);
  lines.push(`<defs><style>`);
  lines.push(`.board-bg { fill: ${P.bgBoard}; }`);
  lines.push(`.col-bg { fill: ${P.bgLane}; rx: ${CORNER}; ry: ${CORNER}; }`);
  lines.push(`.col-header { font-family: ${FONT}; font-size: 13px; font-weight: 700; fill: white; }`);
  lines.push(`.col-count { font-family: ${FONT}; font-size: 11px; fill: ${P.textSecondary}; }`);
  lines.push(`.card { rx: 6; ry: 6; fill: ${P.bgCard}; stroke: ${P.cardStroke}; stroke-width: 1; }`);
  lines.push(`.card-text { font-family: ${FONT}; font-size: 10.5px; fill: ${P.textPrimary}; }`);
  lines.push(`.more-text { font-family: ${FONT}; font-size: 10px; fill: ${P.moreText}; font-style: italic; }`);
  lines.push(`</style></defs>`);
  lines.push(`<rect class="board-bg" width="${totalW}" height="${totalH}" rx="12" ry="12"/>`);
  lines.push(`<text x="${totalW / 2}" y="18" text-anchor="middle" font-family="${FONT}" font-size="11" fill="${P.boardTitle}" font-weight="600">PICLAW WORKITEMS — ${grandTotal} tickets</text>`);

  let x = PAD;
  const topY = PAD + 6;

  for (const col of columns) {
    const nRows = col.tickets.length + (col.extra > 0 ? 1 : 0);
    const colH = HEADER_H + 12 + nRows * (CARD_H + CARD_GAP) + 10;

    // Column background + accent bar
    lines.push(`<rect class="col-bg" x="${x}" y="${topY}" width="${COL_W}" height="${colH}"/>`);
    lines.push(`<rect x="${x}" y="${topY}" width="${COL_W}" height="4" rx="${CORNER}" ry="${CORNER}" fill="${col.color}"/>`);
    // Header
    lines.push(`<text class="col-header" x="${x + 12}" y="${topY + 24}">${escXml(col.label)}</text>`);
    lines.push(`<text class="col-count" x="${x + COL_W - 12}" y="${topY + 24}" text-anchor="end">${col.total}</text>`);

    // Cards
    let cy = topY + HEADER_H + 8;
    for (const ticket of col.tickets) {
      lines.push(`<rect class="card" x="${x + 6}" y="${cy}" width="${COL_W - 12}" height="${CARD_H}"/>`);
      const dotColor = PRIORITY_COLORS[ticket.priority] || "#4b5563";
      lines.push(`<circle cx="${x + 16}" cy="${cy + CARD_H / 2}" r="3.5" fill="${dotColor}"/>`);
      lines.push(`<text class="card-text" x="${x + 26}" y="${cy + CARD_H / 2 + 3.5}">${escXml(truncTitle(ticket.title))}</text>`);
      cy += CARD_H + CARD_GAP;
    }

    // "N more" summary for capped columns
    if (col.extra > 0) {
      lines.push(`<text class="more-text" x="${x + COL_W / 2}" y="${cy + CARD_H / 2}" text-anchor="middle">+ ${col.extra} more completed</text>`);
    }

    x += COL_W + COL_GAP;
  }

  lines.push("</svg>");
  return lines.join("\n");
}

// ── IPC posting ─────────────────────────────────────────────────

function postBoardSvg(svgPath: string): void {
  const piclawData = process.env.PICLAW_DATA || "/workspace/.piclaw/data";
  const messagesDir = join(piclawData, "ipc", "messages");
  mkdirSync(messagesDir, { recursive: true });

  const msgPath = join(messagesDir, `kanban-board-${Date.now()}.json`);
  const payload = {
    type: "message",
    chatJid: CHAT_JID,
    text: MESSAGE_TEXT,
    media: [
      {
        path: svgPath,
        content_type: "image/svg+xml",
        filename: basename(svgPath),
        inline: true,
      },
    ],
  };
  writeFileSync(msgPath, `${JSON.stringify(payload, null, 2)}\n`, "utf-8");
}

// ── Main ────────────────────────────────────────────────────────

mkdirSync(join(OUTPUT, ".."), { recursive: true });
const svg = generate();
writeFileSync(OUTPUT, svg, "utf-8");
console.log(`✅ Workitems board SVG written to ${OUTPUT} (${(svg.length / 1024).toFixed(1)} KB)`);
console.log(`🎨 Theme: ${THEME}${THEME_RAW === "auto" ? " (auto)" : ""}`);

const summary = LANES.map((l) => {
  const count = readTickets(l.dir).length;
  return `${l.label.toLowerCase()}: ${count}`;
}).join(", ");
console.log(`   ${summary}`);

if (POST_TO_IPC) {
  try {
    postBoardSvg(OUTPUT);
    console.log(`✅ IPC message queued: ${basename(OUTPUT)} attached as inline media`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[kanban-board-svg] Failed to queue IPC post: ${msg}`);
    process.exitCode = 1;
  }
}
