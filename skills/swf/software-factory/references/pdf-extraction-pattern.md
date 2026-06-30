# PDF Content Extraction Pattern

## Problem
Browser-based PDF viewers render pages as images/canvas, making text extraction impossible via browser snapshots. The content appears as empty pages or unreadable canvas elements.

## Solution
Download the PDF directly and extract text using `pdftotext` (from poppler-utils).

## Pattern
```python
from hermes_tools import terminal

# Step 1: Download the PDF
terminal("curl -sL -o /tmp/document.pdf 'https://example.com/doc.pdf'")

# Step 2: Extract text
terminal("pdftotext /tmp/document.pdf /tmp/document.txt")

# Step 3: Read the extracted text
# Use read_file() on /tmp/document.txt
```

## Fallback for HTML Pages
When browser navigation produces 404s or empty pages:
```python
# Download HTML directly
terminal("curl -sL 'https://example.com/page/' -o /tmp/page.html")

# Extract text (basic)
import re
# Read file, strip script/style tags, remove HTML tags, clean whitespace
```

## When to Use
- PDF links that render as images in browser
- Pages that 404 in browser but exist as static files
- Content behind JavaScript-rendered walls
- Bulk content extraction from documentation sites

## Note
Always check for prohibited terms after extraction. Strip org names, author names, and product identifiers before writing skill content.