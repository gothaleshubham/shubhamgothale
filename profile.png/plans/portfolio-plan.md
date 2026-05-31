## Portfolio Website Plan for Shubham Gothale — AI/ML Engineer

### Tech Stack
- **Vanilla HTML5 + CSS3 + JavaScript** — no build tools, no dependencies, deploys anywhere
- **Three.js** (CDN) for 3D particle hero background
- **Intersection Observer API** for scroll-triggered animations
- CSS custom properties for theming

### File Structure
```
website/
├── index.html          # Single-page portfolio
├── css/
│   └── style.css       # All styles + animations + responsive design
├── js/
│   └── main.js         # Interactivity, particles, scroll animations
└── assets/
    └── (none needed — pure CSS/SVG icons)
```

### Sections (in scroll order)

1. **Navbar** — Fixed top, glassmorphism blur, smooth scroll links, mobile hamburger
2. **Hero** — Full-viewport, Three.js particle network background, typing animation cycling through titles ("AI/ML Engineer", "AI Agent Developer", "Deep Learning Practitioner"), CTA buttons (View Projects, Contact Me), scroll indicator
3. **About** — Animated entrance, bio paragraph pulled from resume, quick-stats row (years exp, projects, etc.), download resume button
4. **Skills** — Animated skill bars + icon grid organized by category:
   - Languages: Python, JavaScript, TypeScript, HTML/CSS
   - AI/ML: TensorFlow, PyTorch, scikit-learn, LangChain, LangGraph, CrewAI, RAG
   - Frameworks: Flask, FastAPI, React, Node.js
   - Cloud/DevOps: AWS, Docker, CI/CD
   - Tools: Git, Linux, REST APIs, Database
5. **Projects** — Card grid with hover effects, tech stack tags:
   - Plant Disease Detection System (TensorFlow, Flask — 98% accuracy)
   - AI Resume Analyzer (Python, NLP)
   - Telegram Crypto Trading Bot (Python, ccxt)
6. **Experience Timeline** — Vertical timeline with animated nodes
7. **AI Project Collaboration CTA** — Full-width section inviting AI project inquiries with neon glow effect
8. **Contact** — Contact info cards (phone, email, location, LinkedIn), social links, "Let's Collaborate" message
9. **Footer** — Simple, minimal

### Animations & Effects
- Three.js particle network in hero (connected nodes = AI/neural network theme)
- Typing + deleting text effect for hero titles
- Scroll-triggered fade-in/slide-in (IntersectionObserver)
- Skill bars animate on scroll into view
- Cards: 3D tilt on hover, glow border effect
- Smooth scroll with offset for fixed navbar
- Navbar background transition on scroll
- Cursor glow trail effect
- Counter animation for stats
- Responsive: mobile-first breakpoints at 768px and 1024px

### Color Scheme
- Dark theme: #0a0a0f (bg), #1a1a2e (cards)
- Primary accent: #00d4ff (cyan)
- Secondary accent: #7b2ff7 (purple)
- Text: #e0e0e0 (body), #ffffff (headings)
- Gradient: cyan → purple for hero text and CTAs

### Content (from resume)
- Name: Shubham Ramesh Gothale
- Role: AI/ML Engineer & AI Agent Developer
- Email: shubham.r.gothale@gmail.com
- Phone: +91-9833263371
- Location: Pune, Maharashtra, India
- LinkedIn: linkedin.com/in/shubham-gothale-672484133/
- Education: B.Sc. Computer Science, Shri Guru Gobind Singhji College (2022-2025)
- Key strength: "AI/ML Engineer skilled in Python and deep learning with strong expertise in NLP, deep learning, and AI agents."
