# TRACEOIL — Oil Spill Detection and Vessel Attribution
### Smart India Hackathon 2026 Research & Development Portal

Welcome to the official public research website and technical documentation portal for **TRACEOIL**.

This repository contains an open scientific research publication and engineering documentation website built entirely with **semantic HTML5, modern CSS3, and vanilla JavaScript**. It requires **zero frameworks, zero build tools, zero external dependencies, and no backend or database**.

---

## 🌊 Project Overview

- **Project Name:** TRACEOIL
- **Subtitle:** Oil Spill Detection and Vessel Attribution
- **Event:** Smart India Hackathon 2026
- **Domain:** Space Technology / Maritime Defense / Environmental Intelligence
- **Core Technology:** Copernicus Sentinel-1 C-band SAR, Sentinel-2 Optical MSI, Automatic Identification System (AIS) transponder tracking, and reverse Lagrangian hydrodynamic drift simulation.

---

## 🚀 Quick Start — Opening the Website

### Option 1: Open Directly in Any Web Browser (No Server Required)
Because all stylesheets, scripts, and media use **strictly relative paths**, you can open the website immediately:
1. Navigate into the folder `traceoil-research/`.
2. Double-click on `index.html` (or right-click &rarr; *Open with Google Chrome / Microsoft Edge / Firefox / Safari*).
3. The complete website will render instantly with full styling, working navigation, interactive SVG diagrams, and lightbox modals.

### Option 2: Run with a Local Static Server (Optional)
If you prefer running via HTTP:
```bash
# Using Python 3:
cd traceoil-research
python -m http.server 8000

# Open in your browser:
# http://localhost:8000
```
Or using Node.js:
```bash
npx serve .
```

---

## 🌐 Hosting on GitHub Pages

The website is engineered from scratch to be **100% compatible with GitHub Pages**, whether hosted at the root domain (`https://username.github.io`) or inside a repository subpath (`https://username.github.io/traceoil/`).

### Step-by-Step GitHub Pages Deployment:
1. Initialize a Git repository in this folder (or push this folder to your GitHub repo):
   ```bash
   cd traceoil-research
   git init
   git add .
   git commit -m "Initial commit: TRACEOIL research portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to your repository **Settings** &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `root` (or `/docs` if you place files in a docs folder)
4. Click **Save**.
5. Within 1–2 minutes, your website will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

## 📁 Repository Structure

```
traceoil-research/
│
├── index.html                  # Main homepage (Research overview, hero, pipeline preview, video demo)
├── research.html               # Full academic research article (Physics, challenges, formulation)
├── methodology.html            # In-depth technical methodology & 8-step pipeline
├── dataset.html                # Dataset documentation & multi-sensor comparison matrix
├── visualizations.html         # Research figures, CFAR detections, vector fields, video demo
├── references.html             # Numbered academic citations and legal framework references
├── about.html                  # Team roster, mentorship, institution details, contact info
│
├── documentation/
│   └── index.html              # Documentation Hub with search & categorization
│
├── content/
│   ├── project/                # 15 Detailed Research Documentation Articles
│   │   ├── overview.html       # 01. Executive Overview & Scope
│   │   ├── problem.html        # 02. Problem Statement & MARPOL Violations
│   │   ├── architecture.html   # 03. System Architecture & Topology
│   │   ├── methodology.html    # 04. Technical Methodology
│   │   ├── datasets.html       # 05. Dataset Documentation
│   │   ├── oil-spill-detection.html  # 06. SAR Capillary Damping Detection
│   │   ├── vessel-detection.html     # 07. CFAR Ship Target Extraction
│   │   ├── vessel-attribution.html   # 08. Reverse Lagrangian Drift & Attribution
│   │   ├── geospatial-analysis.html  # 09. MetOcean Currents & Wind Fields
│   │   ├── experiments.html    # 10. Experimental Design & Scenarios
│   │   ├── evaluation.html     # 11. Evaluation Metrics & Benchmark Scores
│   │   ├── limitations.html    # 12. Physical & Operational Limitations
│   │   ├── future-work.html    # 13. Hyperspectral & PINN Roadmap
│   │   ├── references.html     # 14. Bibliography & Literature
│   │   └── team.html           # 15. Team & Institutional Credits
│   │
│   ├── datasets/               # Place CSVs, metadata, or sample GeoJSON boundaries here
│   ├── experiments/            # Place benchmark logs and metric runs here
│   └── references/             # Place downloaded reference papers/PDFs here
│
├── assets/
│   ├── diagrams/
│   │   └── pipeline-architecture.svg  # Crisp vector system architecture diagram
│   ├── figures/
│   │   ├── fig-01-sar-spill.svg       # Figure 1: SAR Oil Spill Damping
│   │   ├── fig-02-segmentation.svg    # Figure 2: Dark Formation Mask
│   │   ├── fig-03-vessel-cfar.svg     # Figure 3: CFAR Ship Target Extraction
│   │   ├── fig-04-attribution.svg     # Figure 4: Reverse Drift & AIS Intercept
│   │   └── fig-05-drift-vectors.svg   # Figure 5: MetOcean Current & Wind Vectors
│   ├── images/                        # Place satellite crops and UI screenshots here
│   └── videos/
│       ├── poster-demo.svg            # Demonstration video poster
│       └── demo-pipeline.mp4          # Place your demonstration MP4 video here
│
├── css/
│   └── style.css               # Unified research portal stylesheet (variables, responsive grid, dark theme)
│
├── js/
│   ├── project-data.js         # Centralized project configuration, metadata, datasets, and team details
│   ├── navigation.js           # Responsive mobile drawer, active page highlighting, scroll elevation
│   ├── gallery.js              # Fullscreen image lightbox modal & video player controller
│   └── main.js                 # Auto table of contents, copy-anchor links, reading progress bar, back-to-top
│
└── README.md                   # This instruction guide
```

---

## ✏️ How to Customize & Replace Content

### 1. Central Project Data & Team Details
Open [`js/project-data.js`](js/project-data.js). Here you can edit:
- Project title, subtitle, tagline, and SIH problem ID.
- Abstract and research questions.
- Team member names, roles, bios, and institution details.
- Repository link and contact email.
- YouTube video URL (if using external YouTube embedding instead of local MP4).

### 2. Replacing Demonstration Video
- **Local MP4 Video:** Place your video file inside `assets/videos/demo-pipeline.mp4`. The video modal on `index.html` and `visualizations.html` is pre-wired to play this file automatically.
- **YouTube Video:** Open `js/project-data.js`, find `videos[0].youtubeUrl`, and set your link (e.g., `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`).

### 3. Replacing Satellite Crops & Figures
- All figures in `assets/figures/` and `assets/diagrams/` are currently vector SVGs that render crisply at any screen size.
- To use your own real satellite crops or PNG/JPG figures:
  1. Save your image into `assets/figures/` (e.g. `assets/figures/my-slick.png`).
  2. In `visualizations.html` (or `research.html`), update the `img src` and `data-src` attributes:
     ```html
     <div class="figure-media" data-lightbox data-src="./assets/figures/my-slick.png" data-caption="Figure 1: Custom SAR Analysis">
       <img src="./assets/figures/my-slick.png" alt="My SAR Analysis">
     </div>
     ```

### 4. Updating Placeholders
Look for marked placeholders formatted like:
- `[Add model name here]`
- `[Add final methodology details here]`
- `[Add benchmark results and metric scores here]`
- `[Team Member Name]`

Search across the workspace for `[` to locate and update any remaining placeholder labels with your verified results as your SIH 2026 research reaches completion.

---

## 🎨 Visual Design System

- **Background Palette:** Deep slate / midnight navy (`#060913`, `#0b1120`, `#0f172a`).
- **Accents:** Electric Cyan (`#00f0ff`), Oceanic Sky Blue (`#38bdf8`), Saffron/Amber (`#f59e0b`), Emerald (`#10b981`).
- **Typography:** System UI sans-serif stack with high-contrast text (`#f8fafc` primary, `#94a3b8` muted). Monospace font stack (`JetBrains Mono`, `Consolas`) for telemetry and code coordinates.
- **Interactivity:**
  - Fullscreen lightbox modal with keyboard navigation (Esc to close).
  - Video modal player with fallback screen.
  - Automatic sticky Table of Contents on long documentation articles.
  - Copy-to-clipboard anchor link buttons on section headings (`🔗`).
  - Scroll-triggered reading progress bar and back-to-top floating button.

---

## 📜 License & Open Science
Developed for the **Smart India Hackathon 2026**. Openly published for research, educational, and environmental compliance advancement.
