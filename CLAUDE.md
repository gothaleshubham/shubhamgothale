# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page portfolio website for Shubham Gothale (AI/ML Engineer). Pure vanilla HTML5 + CSS3 + JavaScript with zero dependencies — no build tools, no package manager, no frameworks. The site can be served by any static file server or opened directly in a browser.

## Running the Site

No build step. Serve with any static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushes to `main` auto-deploy to **GitHub Pages** via `.github/workflows/static.yml`. The workflow uploads the entire repository root as a static artifact. Manual deployments are also available via `workflow_dispatch` in the GitHub Actions tab.

## File Structure

```
index.html                 # Single-page layout, ~1017 lines, all sections inline
css/style.css              # All styles, animations, responsive breakpoints (~1990 lines)
js/main.js                 # All interactivity in a single IIFE (~492 lines)
assets/profile.png         # Profile photo (referenced in index.html)
Shubham_Gothale_Resume.pdf # Downloadable resume
```

## Architecture

### Sections (scroll order)

Navbar → Hero (Canvas 2D particle network background) → About (bio + animated stat counters) → Skills (drag-reorderable category cards) → Projects (3D tilt-on-hover cards in a horizontal carousel) → Experience (vertical timeline) → Certifications (horizontal carousel) → AI Collaboration CTA → Pricing Promise (dark banner with 3 cards) → Contact → Footer.

### Key JavaScript Features (js/main.js, wrapped in IIFE)

- **Canvas 2D particle network** — mouse-repulsion physics, connection lines, pauses when scrolled out of view
- **Typing effect** — cycles through role titles (defined in `titles[]` array) with type/delete animation
- **Scroll reveal** — IntersectionObserver-based fade-in/slide-up with staggered delays
- **Counter animation** — stats count up with cubic ease-out
- **Cursor glow** — radial gradient follows mouse
- **3D tilt cards** — perspective rotation on project cards via `data-tilt` attribute
- **Drag-and-drop** — skill category cards reorderable via native drag events
- **Smooth scroll** — custom anchor handler with navbar offset
- **Active nav highlight** — IntersectionObserver colors the nav link for the visible section
- **Contact form** — posts JSON to Google Apps Script webhook via `fetch` (no-cors), which appends rows directly to a Google Sheet; falls back to `mailto:` only on network error
- **Console easter egg** — styled log message

### CSS Architecture (css/style.css)

- CSS custom properties in `:root` for theming (dark `#0a0a0f` bg, cyan `#00d4ff` primary, purple `#7b2ff7` secondary)
- Responsive breakpoints: 1200px, 1024px, 768px (tablet/mobile), 480px (small phone)
- Custom keyframes: profile glow pulse, ring rotation, floating elements, scroll reveals
- CSS Grid for section layouts, Flexbox for component-level layouts

### External Dependencies

- Google Fonts (Inter + JetBrains Mono) via CDN — no local assets or fallbacks configured beyond the font load itself
- Contact form posts JSON to a **Google Apps Script webhook** (URL in `js/main.js`) which appends rows directly to a Google Sheet

## Editing Content

- **Static content** (name, bio, projects, experience, certifications, contact info) → edit directly in `index.html`
- **Dynamic data** (typing titles in `titles[]`, stat counters via `data-target`/`data-suffix` attributes) → edit in `js/main.js`
- **Contact form webhook URL** → edit `sheetUrl` in `js/main.js`
- **Google Apps Script** → edit the `doPost()` function in the Apps Script editor (Extensions → Apps Script in the spreadsheet)
- **Styling and theme** → edit CSS custom properties in `:root` at the top of `css/style.css`

