# tanmay.dev — Personal Portfolio

A high-fidelity **Dark Terminal Editorial** portfolio website built in vanilla HTML, CSS, and JavaScript. No frameworks. No build tools. Just two files.

---

## Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styling | Vanilla CSS (embedded) |
| Logic | Vanilla JS (embedded) |
| Icons | [Lucide](https://lucide.dev/) via CDN |
| Fonts | DM Serif Display · JetBrains Mono · Outfit |
| Rendering | HTML5 Canvas (skills graph) |

---

## File Structure

```
portfolio/
├── index.html        # All markup, styles, and scripts
├── data.js           # Portfolio content (single source of truth)
└── assets/
    ├── photo.jpg     # Profile photo
    └── resume.pdf    # Downloadable resume
```

All content — experience, projects, skills, education, certifications — lives in `data.js`. Edit that file to update the site. No touching HTML required.

---

## Features

### UI & Interactions
- **Custom dual-element cursor** — 6px white dot (instant) + 28px blue ring (lerp-lagged). Disabled automatically on touch devices.
- **Parallax hero** — Profile photo and dot-grid background shift opposite to cursor movement at different rates, creating depth.
- **Staggered load animations** — Text, CTAs, and visuals enter with cascading CSS delays on page load.
- **Active nav detection** — IntersectionObserver highlights the correct nav link as sections scroll into view.
- **Sticky header** — Gains blur + shadow after 50px scroll.

### Sections
- **Hero** — Name, role, pitch, CTA buttons (View Work / Download Resume), social links, status badge.
- **About** — Summary paragraph + 3-column stats (experience, systems, tools) with count-up animation.
- **Skills** — Force-directed constellation graph on HTML5 Canvas. Nodes repel, drift, and bounce. Same-category nodes connect with colored edges. Hover reveals tooltip with category label.
- **Experience** — Vertical timeline with scroll-triggered slide-in cards. Active role has a glowing pulse node and blue left-border accent.
- **Projects** — 2-column grid. Clicking any card opens a macOS-styled terminal modal with a typewriter engine that prints project details character-by-character.
- **Education & Certifications** — Academic cards + certifications with 3D Y-axis flip reveal on scroll.
- **Contact / Footer** — Clickable contact cards (phone, GitHub, LinkedIn) + mailto link with animated underline.

### Skills Constellation (Canvas Physics)
- 60fps physics loop via `requestAnimationFrame`
- Inter-node repulsion force prevents overlap
- Boundary bounce on all four edges
- Friction dampening + random micro-drift to prevent full stop
- Speed capped at `1.0 px/frame`
- Category edges rendered at `α 0.45` base, `α 0.95` on hover
- Resize handler recalculates bounds and reinitializes nodes

---

## Getting Started

No install. No build step.

```bash
git clone https://github.com/TanmayBhuran02/portfolio
cd portfolio

# Open in browser — any local server works
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

---

## Customization

Open `data.js` and edit the `portfolioData` object:

```js
const portfolioData = {
  personal: {
    name: "Your Name",
    role: "Your Role",
    summary: "Your summary...",
    email: "you@email.com",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourprofile",
    phone: "+91XXXXXXXXXX"
  },
  skills: { ... },
  experience: [ ... ],
  projects: [ ... ],
  education: [ ... ],
  certifications: [ ... ]
}
```

Replace `assets/photo.jpg` with your photo and `assets/resume.pdf` with your resume. Done.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `> 1024px` | Full desktop layout, parallax active, custom cursor active |
| `768px – 1024px` | Single-column hero, photo moves above text |
| `< 768px` | Slide-out hamburger nav, timeline adjusts padding, projects stack |
| `375px` | Fully tested minimum width |

Touch/coarse pointer devices: custom cursor hidden, parallax disabled.

---

## Performance Notes

- Zero npm dependencies
- All animations use `transform` and `opacity` (GPU-composited, no layout thrash)
- Canvas physics capped at 25 nodes max for consistent 60fps
- IntersectionObserver used for all scroll reveals (no scroll event listeners)
- Passive scroll listener on header detection

---

## License

MIT — free to fork and adapt. Attribution appreciated but not required.

---

<div align="center">
  Built with vanilla JS · No frameworks harmed
</div>
