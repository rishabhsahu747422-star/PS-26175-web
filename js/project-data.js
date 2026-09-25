/**
 * DEPTHWIZARD — Centralized Project Research Data
 * 
 * Single-View Height Estimation & 3D Terrain Reconstruction
 * Technical facts derived directly from official project documentation.
 */

window.DEPTHWIZARD_DATA = {
  meta: {
    projectTitle: "DepthWizard",
    subtitle: "Single-View Height Estimation & 3D Terrain Reconstruction",
    tagline: "AI-Powered Optical Monocular Elevation Extraction & Interactive Flythrough",
    category: "Geospatial Remote Sensing & 3D Computer Vision",
    status: "Active Research Platform",
    repositoryUrl: "https://github.com/YOUR-TEAM/depthwizard",
    contactEmail: "team-email@example.edu",
    lastUpdated: "2026",
    license: "Open Academic Research"
  },

  abstract: `DepthWizard is an end-to-end scientific research system that transforms single-view optical RGB satellite and aerial imagery into accurate Digital Surface Models (DSMs) and interactive 3D terrain flythroughs. By adapting foundation monocular depth models (Depth Anything V2) to nadir remote-sensing physics and introducing per-land-cover scale calibration anchored to SRTM 30m DEMs alongside test-time uncertainty quantification, DepthWizard eliminates the need for cost-prohibitive LiDAR or stereo-pair acquisition while enabling intuitive browser-based terrain exploration.`,

  keyQuestions: [
    {
      id: "q1",
      question: "Why is single-view height estimation fundamentally challenging in remote sensing?",
      answer: "Single 2D optical images lack direct geometric depth cues present in stereo pairs or LiDAR. Pretrained foundational depth models are trained on natural perspective photos and suffer a severe domain gap when applied to top-down (nadir) satellite imagery where shadows and textural cues are the primary elevation indicators."
    },
    {
      id: "q2",
      question: "How does relative depth map to absolute metric elevation?",
      answer: "Through DepthWizard's Stage 2 scale calibration. For georeferenced GeoTIFF inputs, relative depth features are anchored against a 30m coarse reference DEM (SRTM 30m). Crucially, calibration is computed per-land-cover class rather than as a uniform scene constant."
    },
    {
      id: "q3",
      question: "What makes per-land-cover-class calibration innovative?",
      answer: "Standard monocular calibration fits a single global affine transform (H = a·h + b). However, buildings, tree canopies, and bare ground exhibit systematic differences in relative depth scale. By fitting class-specific affine parameters using semantic masks, DepthWizard reduces building height error by ~44% and tree canopy error by ~35%."
    },
    {
      id: "q4",
      question: "How is estimation uncertainty surfaced to operational users?",
      answer: "Using Monte Carlo Dropout and test-time perturbation ensembles at inference time to generate a pixel-level variance map. This is rendered as an interactive, toggleable confidence heatmap in the 3D viewer, alerting users to areas where height predictions are less certain."
    }
  ],

  pipelineStages: [
    {
      step: "01",
      name: "Input Ingestion & GSD Normalization",
      desc: "Ingestion of single-view optical imagery in GeoTIFF (georeferenced with CRS, bounds, and resolution) or standard PNG/JPG formats. An explicit Ground Sample Distance (GSD) normalization step standardizes pixel scale across disparate satellite sensors.",
      status: "Implemented",
      badge: "Stage 01"
    },
    {
      step: "02",
      name: "Elevation Extraction (Depth Backbone)",
      desc: "Depth Anything V2 (ViT backbone) adapted through fine-tuning on the GAMUS dataset (11,507 paired RGB/nDSM tiles across 5 cities). Uses scale-invariant and multi-scale gradient loss with class-weighted penalties on complex structural classes.",
      status: "Implemented",
      badge: "Stage 02"
    },
    {
      step: "03",
      name: "Scale Calibration & Metric Mapping",
      desc: "Innovation #1: Semantic-aware calibration fits independent scale and offset factors (a_k, b_k) for each land-cover class (building, tree, ground, road, water, vegetation) against SRTM 30m DEM. Generates 16-bit metric Digital Surface Model (DSM).",
      status: "Implemented",
      badge: "Innovation 1"
    },
    {
      step: "04",
      name: "Uncertainty & Confidence Estimation",
      desc: "Innovation #2: Test-time Monte Carlo Dropout produces per-pixel variance/confidence maps (8-bit grayscale), highlighting structural ambiguities, occluded building shadows, and vegetation canopy variance.",
      status: "Implemented",
      badge: "Innovation 2"
    },
    {
      step: "05",
      name: "3D Terrain Mesh & Flythrough Rendering",
      desc: "Heightmap decoded into Float32 elevation grid and triangulated into GPU PlaneGeometry mesh with vertex displacement. UV-mapped with RGB texture. Navigable via first-person PointerLockControls and top-down orbit views in Three.js.",
      status: "Implemented",
      badge: "Stage 03"
    }
  ],

  datasets: [
    {
      name: "GAMUS Dataset",
      provider: "Earthflow / Hugging Face",
      role: "Backbone Fine-Tuning Foundation",
      samples: "11,507 Paired Tiles",
      description: "Paired high-resolution optical imagery, normalized Digital Surface Models (nDSM), and 6-class land-cover ground truth across 5 diverse urban regions. Solves the remote sensing nadir domain gap.",
      url: "https://huggingface.co/datasets/earthflow/GAMUS"
    },
    {
      name: "SRTM 30m DEM",
      provider: "NASA / USGS / OpenTopography",
      role: "Scale Calibration Reference",
      samples: "1 Arc-Second Global Elevation",
      description: "Shuttle Radar Topography Mission 30-meter elevation model. Anchors scale-agnostic relative depth features to absolute real-world metric elevation without requiring expensive in-situ survey control.",
      url: "https://portal.opentopography.org/"
    },
    {
      name: "Copernicus Sentinel-2",
      provider: "European Space Agency (ESA)",
      role: "Real-World Generalization Validation",
      samples: "10m Multispectral Optical",
      description: "Used to qualitatively validate generalization over diverse international geographies, including dense Indian metropolitan cities and rugged Himalayan mountain terrain.",
      url: "https://dataspace.copernicus.eu/"
    }
  ],

  validationMetrics: {
    buildingErrorReduction: "44%",
    treeErrorReduction: "35%",
    heightPrecisionBits: "16-bit Grayscale PNG",
    supportedInputs: "PNG, JPG, GeoTIFF (WGS84 / UTM)",
    renderingEngine: "Three.js GPU Vertex Displacement",
    offlineCapability: "100% Standalone & Local Execution"
  },

  sampleProfile: {
    distance_m: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300],
    elevation_m: [2.1, 2.3, 2.2, 14.8, 15.2, 14.9, 3.4, 8.2, 9.1, 8.5, 4.0, 24.1, 2.8],
    classes: ["ground", "road", "ground", "building", "building", "building", "ground", "tree", "tree", "tree", "road", "building", "ground"]
  }
};

// Backward-compatibility alias during component transition
window.TRACEOIL_DATA = window.DEPTHWIZARD_DATA;
