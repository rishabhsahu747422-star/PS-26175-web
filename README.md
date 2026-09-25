# DepthWizard — Single-View Height Estimation & 3D Terrain Reconstruction
### Independent Scientific Research & Technical Documentation Portal

Welcome to the official public research website and technical documentation portal for **DepthWizard**.

This repository contains an open scientific research publication and engineering documentation platform built entirely with **semantic HTML5, modern CSS3, and vanilla JavaScript**. It requires **zero frameworks, zero build tools, zero external dependencies, and no backend or database**. It is 100% compatible with static deployment on **GitHub Pages** or direct local inspection via `file:///`.

---

## 🏔️ Project Overview

- **Project Name:** DepthWizard
- **Sub-Title:** Single-View Height Estimation & 3D Terrain Reconstruction
- **Domain:** Geospatial Remote Sensing / Computer Vision / 3D Topographical Modeling
- **Core Technology:** Depth Anything V2 (Vision Transformer backbone), GAMUS Dataset, SRTM 30m Global DEM, Monte Carlo Dropout Uncertainty Quantification, and Three.js 3D Flythrough.

---

## 🚀 Quick Start — Opening the Website

### Option 1: Open Directly in Any Web Browser (No Server Required)
Because all stylesheets, scripts, and media use **strictly relative paths**, you can open the website immediately:
1. Open the project root folder.
2. Double-click on `index.html` (or right-click &rarr; *Open with Google Chrome / Microsoft Edge / Firefox / Safari*).
3. The complete website will render instantly with full styling, working navigation, interactive SVG diagrams, elevation cross-section tools, and lightbox modals.

### Option 2: Run with a Local Static Server (Optional)
If you prefer running via HTTP:
```bash
# Using Python 3:
python -m http.server 8000

# Open in your browser:
# http://localhost:8000
```

---

## 🌐 Hosting on GitHub Pages

The website is engineered from scratch to be **100% compatible with GitHub Pages**, whether hosted at the root domain (`https://username.github.io`) or inside a repository subpath (`https://username.github.io/depthwizard/`).

### Step-by-Step GitHub Pages Deployment:
1. Initialize a Git repository in this folder (or push to your GitHub repo):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DepthWizard research portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to your repository **Settings** &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment** &rarr; **Branch**, select `main` and root folder `/`, then click **Save**.
4. GitHub Pages will deploy the static site in under a minute with zero build configuration needed.

---

## 📁 Repository Structure

```
/
├── index.html                      # Flagship Home & Interactive Profile Explorer
├── pages/                          # Top-level site pages
│   ├── methodology.html            # 3-Stage Engineering Pipeline & Formulations
│   ├── visualizations.html         # 3D Flythrough Viewport & Technical Figures
│   ├── dataset.html                # Datasets (GAMUS, SRTM 30m, Sentinel-2)
│   ├── research.html               # Scientific Research Paper & Literature
│   ├── references.html             # Peer-Reviewed Citations & Bibliography
│   └── about.html                  # Project Scope, Architecture & Deliverables
├── documentation/
│   └── index.html                  # Documentation Portal (15-Article Hub)
├── content/
│   └── project/                    # 15 Detailed Technical Documentation Articles
│       ├── overview.html           # 01. Project Overview & Objectives
│       ├── problem.html            # 02. Problem Understanding & Nadir Gap
│       ├── architecture.html       # 03. System Architecture & API Contract
│       ├── methodology.html        # 04. Depth Backbone & GAMUS Training
│       ├── geospatial-analysis.html# 05. SRTM 30m Reference Anchoring
│       ├── land-cover-calibration.html # 06. Innovation 1: Per-Class Calibration
│       ├── uncertainty-estimation.html # 07. Innovation 2: Uncertainty Mapping
│       ├── terrain-reconstruction.html # 08. 3D Mesh Generation & Three.js
│       ├── datasets.html           # 09. Dataset Documentation
│       ├── experiments.html        # 10. Experimental Setup & Ablations
│       ├── evaluation.html         # 11. Quantitative Benchmark Results
│       ├── limitations.html        # 12. Known Limitations & Mitigations
│       ├── future-work.html        # 13. Future Roadmap & Multi-Sensor Fusion
│       ├── team.html               # 14. Project Deliverables & Scope
│       └── references.html         # 15. Complete Bibliography
├── css/
│   └── style.css                   # Custom Light Theme CSS3 System
├── js/
│   ├── main.js                     # Site Utilities & Reading Progress
│   ├── navigation.js               # Responsive Navbar & Active State
│   ├── gallery.js                  # Accessible Lightbox & Video Player Modal
│   └── project-data.js             # Centralized DepthWizard Research Data
└── assets/
    ├── diagrams/                   # System Architecture SVG Blueprint
    ├── figures/                    # High-Resolution Vector Figures (01 - 05)
    ├── images/                     # Sample Satellite & Reconstructed Renders
    └── videos/                     # Demo Viewport Posters & Video Containers
```

---

## ⚙️ Technical Highlights

- **Backbone:** Depth Anything V2 (ViT architecture adapted for nadir remote-sensing geometry).
- **Scale Calibration (Innovation #1):** Semantic land-cover masking reducing building height error by ~44% and tree canopy error by ~35% over global affine fits.
- **Uncertainty Mapping (Innovation #2):** Monte Carlo Dropout test-time sampling yielding actionable per-pixel confidence heatmaps.
- **3D Flythrough:** 16-bit grayscale heightmap decoding driving GPU vertex displacement with first-person flight controls.

---

## 📜 Academic Attribution

Distributed under standard open scientific research documentation principles.
&copy; 2026 DepthWizard Research Initiative.
