# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page portfolio website for Shubham Gothale (AI/ML Engineer). Pure vanilla HTML5 + CSS3 + JavaScript with zero dependencies — no build tools, no package manager, no frameworks. The site can be served by any static file server or opened directly in a browser.

## Running the Site

There are no build or dev-server commands. Serve with any static server:

```bash
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## File Structure

```
index.html           # Single-page layout, ~785 lines, all sections inline
css/style.css        # All styles, animations, responsive breakpoints (~1818 lines)
js/main.js           # All interactivity in a single IIFE (~466 lines)
assets/profile.png   # Profile photo
Shubham_Gothale_Resume.pdf
```

## Architecture

### Sections (scroll order)

Navbar → Hero (Canvas 2D particle network background) → About (bio + animated stat counters) → Skills (drag-reorderable category cards) → Projects (3D tilt-on-hover cards) → Experience (vertical timeline) → Certifications → AI Collaboration CTA → Contact → Footer.

### Key JavaScript Features (js/main.js, wrapped in IIFE)

- **Canvas 2D particle network** — mouse-repulsion physics, connection lines, pauses when scrolled out of view
- **Typing effect** — cycles through role titles with type/delete animation
- **Scroll reveal** — IntersectionObserver-based fade-in/slide-up with staggered delays
- **Counter animation** — stats count up with cubic ease-out
- **Cursor glow** — radial gradient follows mouse
- **3D tilt cards** — perspective rotation on project cards via `data-tilt` attribute
- **Drag-and-drop** — skill category cards reorderable via native drag events
- **Smooth scroll** — custom anchor handler with navbar offset

### CSS Architecture (css/style.css)

- CSS custom properties in `:root` for theming (dark `#0a0a0f` bg, cyan `#00d4ff` primary, purple `#7b2ff7` secondary)
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small phone)
- Custom keyframes: profile glow pulse, ring rotation, floating elements, scroll reveals
- CSS Grid for section layouts, Flexbox for component-level layouts

### External Dependencies

- Google Fonts (Inter + JetBrains Mono) via CDN — no local assets or fallbacks configured beyond the font load itself

## Notes

- The original plan (`.claude/plans/portfolio-plan.md`) mentioned Three.js, but the actual implementation uses a custom Canvas 2D particle system — no Three.js dependency exists.
- Content changes (name, roles, projects, skills, experience) should be made directly in `index.html` for structure and `js/main.js` for dynamic data (typing titles, counters, drag-and-drop skill cards).
