/**
 * TRACEOIL — Centralized Project Research Data
 * 
 * Edit this file to update project metadata, research objectives,
 * methodology pipeline details, datasets, team members, and references.
 * All pages can import or reference this data directly.
 */

window.TRACEOIL_DATA = {
  meta: {
    projectTitle: "TRACEOIL",
    subtitle: "Oil Spill Detection and Vessel Attribution",
    tagline: "Satellite Remote Sensing & AIS-Driven Maritime Forensics",
    eventBadge: "Smart India Hackathon 2026",
    edition: "SIH 2026 Research & Development",
    problemStatementId: "SIH-2026-TRACEOIL",
    status: "Active Research Prototype",
    repositoryUrl: "https://github.com/your-org/traceoil-research",
    contactEmail: "research@traceoil-project.org",
    lastUpdated: "September 2026"
  },

  abstract: `TRACEOIL is an automated research framework for detecting marine oil spill discharges and attributing them to responsible maritime vessels using multi-modal satellite remote sensing (Synthetic Aperture Radar / Optical) correlated with Automatic Identification System (AIS) vessel kinematic trajectories and geospatial drift modeling. Designed for marine environmental compliance, oceanic ecosystem protection, and maritime surveillance.`,

  keyQuestions: [
    {
      id: "q1",
      question: "How can marine oil slicks be reliably discriminated from natural lookalikes?",
      answer: "By analyzing multi-frequency radar backscatter, dual-polarization ratios (VV/VH), wind field gradients, and morphological texture features in Synthetic Aperture Radar (SAR) imagery."
    },
    {
      id: "q2",
      question: "How are vessels identified and tracked in open waters?",
      answer: "Through high-resolution SAR constant false alarm rate (CFAR) target extraction combined with global historical and real-time AIS vessel telemetry broadcast decoding."
    },
    {
      id: "q3",
      question: "How does the system attribute a spill to a specific ship?",
      answer: "By applying reverse Lagrangian hydrodynamic drift modeling with ocean current and wind vectors, temporally correlating vessel spatiotemporal corridors with the slick's origin point."
    }
  ],

  pipelineStages: [
    {
      step: "01",
      name: "Data Acquisition",
      desc: "Ingestion of multi-spectral optical and Synthetic Aperture Radar (Sentinel-1 SAR C-band) imagery alongside historical and real-time AIS vessel telemetry streams.",
      status: "Implemented",
      placeholder: "[Add data acquisition API specifications here]"
    },
    {
      step: "02",
      name: "Preprocessing",
      desc: "Radiometric calibration, thermal noise correction, Lee/Refined-Lee speckle filtering, precise orbit file application, and high-resolution GSHHG coastline land masking.",
      status: "Implemented",
      placeholder: "[Add preprocessing calibration parameters here]"
    },
    {
      step: "03",
      name: "Oil-Spill Detection",
      desc: "Identification of dark formation areas via adaptive thresholding, multi-scale morphological filtering, and deep semantic segmentation.",
      status: "In Progress",
      placeholder: "[Add model name and segmentation architecture here]"
    },
    {
      step: "04",
      name: "Feature Extraction",
      desc: "Extraction of geometric shape descriptors, slick elongation, area, perimeter, edge gradients, radar backscatter damping ratio, and local ECMWF wind speed estimation.",
      status: "In Progress",
      placeholder: "[Add mathematical feature extraction details here]"
    },
    {
      step: "05",
      name: "Vessel Detection",
      desc: "Detection of bright point targets in SAR backscatter using adaptive CFAR (Constant False Alarm Rate) algorithms and optical bounding box detectors.",
      status: "Implemented",
      placeholder: "[Add vessel detection model specifications here]"
    },
    {
      step: "06",
      name: "Vessel Identification",
      desc: "Matching detected maritime targets to decoded AIS records (MMSI, IMO, vessel dimensions, navigational status, course over ground, speed over ground).",
      status: "In Progress",
      placeholder: "[Add AIS interpolation algorithm details here]"
    },
    {
      step: "07",
      name: "Geospatial Analysis",
      desc: "Hydrodynamic backward-in-time drift modeling incorporating Copernicus Marine ocean current vectors and wind drift factors to reconstruct slick trajectory.",
      status: "In Progress",
      placeholder: "[Add hydrodynamic drift equations and parameters here]"
    },
    {
      step: "08",
      name: "Attribution & Report",
      desc: "Computation of probabilistic attribution confidence score matrix for proximate vessels, generating cryptographically verifiable maritime forensic dossiers.",
      status: "Upcoming",
      placeholder: "[Add attribution scoring formula and reporting format here]"
    }
  ],

  datasets: [
    {
      name: "Sentinel-1 SAR (C-Band)",
      purpose: "Primary Slick & Vessel Detection",
      dataType: "Level-1 GRD (Ground Range Detected)",
      resolution: "10m spatial resolution",
      labels: "SAR backscatter (VV + VH)",
      source: "European Space Agency (ESA) Copernicus",
      usage: "All-weather day/night surface roughness and slick damping detection"
    },
    {
      name: "Sentinel-2 MSI (Optical)",
      purpose: "Multi-Spectral Verification",
      dataType: "Level-2A Bottom of Atmosphere (BOA)",
      resolution: "10m – 20m spatial resolution",
      labels: "Multi-spectral reflectances (B2, B3, B4, B8)",
      source: "ESA Copernicus Open Access Hub",
      usage: "Daytime clear-sky spectral reflectance confirmation & optical validation"
    },
    {
      name: "Terrestrial & Satellite AIS",
      purpose: "Vessel Kinematic Attribution",
      dataType: "ITU-R M.1371 NMEA 0183 Messages",
      resolution: "Sub-minute / interval updates",
      labels: "MMSI, Lat, Lon, SOG, COG, Heading, Timestamp",
      source: "MarineCadastre / Spire / Global AIS Providers",
      usage: "Spatiotemporal ship tracking, track interpolation, and correlation"
    },
    {
      name: "M4D ITI Oil Spill Benchmark",
      purpose: "Semantic Segmentation Benchmark",
      dataType: "Satellite SAR image patches",
      resolution: "Variable / 10m resampled",
      labels: "Pixel-level masks (Oil Spill, Lookalike, Land, Sea, Ship)",
      source: "Information Technologies Institute (ITI-CERTH)",
      usage: "Comparative benchmark control and baseline evaluation"
    }
  ],

  figures: [
    {
      id: "fig-01",
      category: "sar",
      number: "Figure 1",
      title: "Sentinel-1 SAR Oil Spill Damping Signature",
      desc: "Synthetic Aperture Radar backscatter visualization illustrating capillary wave damping by surface hydrocarbon film versus surrounding rough sea surface.",
      src: "assets/figures/fig-01-sar-spill.svg"
    },
    {
      id: "fig-02",
      category: "segmentation",
      number: "Figure 2",
      title: "Dark Formation Segmentation & Masking",
      desc: "Multi-scale adaptive thresholding separating marine oil discharges from natural biogenic lookalikes and low-wind areas.",
      src: "assets/figures/fig-02-segmentation.svg"
    },
    {
      id: "fig-03",
      category: "vessel",
      number: "Figure 3",
      title: "SAR Vessel Detection & Bright Target Extraction",
      desc: "CFAR target detection locating maritime ships with associated corner reflector backscatter peaks in coastal traffic lanes.",
      src: "assets/figures/fig-03-vessel-cfar.svg"
    },
    {
      id: "fig-04",
      category: "attribution",
      number: "Figure 4",
      title: "Lagrangian Reverse Drift & Vessel Corridor Attribution",
      desc: "Spatiotemporal track corridor matching AIS vessel positions against hydrodynamic backward trajectory vectors.",
      src: "assets/figures/fig-04-attribution.svg"
    },
    {
      id: "fig-05",
      category: "geospatial",
      number: "Figure 5",
      title: "Copernicus Ocean Current & Wind Vector Field",
      desc: "Geospatial vector overlay detailing sea surface velocity components (u, v) and 10m wind speed influencing slick displacement.",
      src: "assets/figures/fig-05-drift-vectors.svg"
    },
    {
      id: "fig-06",
      category: "architecture",
      number: "Figure 6",
      title: "TRACEOIL System Architecture Pipeline",
      desc: "Complete end-to-end multi-modal data processing pipeline from satellite downlinks to evidentiary report generation.",
      src: "assets/diagrams/pipeline-architecture.svg"
    }
  ],

  videos: [
    {
      id: "vid-01",
      title: "TRACEOIL Automated Detection Pipeline Demonstration",
      subtitle: "End-to-End Walkthrough of Satellite Ingestion, Detection & AIS Matching",
      poster: "assets/videos/poster-demo.svg",
      localVideoSrc: "assets/videos/demo-pipeline.mp4",
      youtubeUrl: "", // [Add YouTube video URL here when available]
      caption: "Research demonstration showcasing automated satellite SAR ingestion, oil spill polygon extraction, and real-time AIS vessel trajectory correlation."
    }
  ],

  team: {
    name: "TRACEOIL Research Team",
    institution: "Smart India Hackathon 2026 Initiative",
    department: "Department of Computer Science & Geospatial Intelligence",
    lead: "[Add Team Leader Name]",
    members: [
      {
        name: "[Team Member 1]",
        role: "Remote Sensing & SAR Preprocessing",
        institution: "[College / Institute Name]",
        bio: "Specializing in satellite SAR radiometric calibration, speckle filtering, and SNAP pipeline integration."
      },
      {
        name: "[Team Member 2]",
        role: "Computer Vision & Deep Learning",
        institution: "[College / Institute Name]",
        bio: "Focusing on semantic segmentation architectures and dark formation lookalike discrimination."
      },
      {
        name: "[Team Member 3]",
        role: "AIS Telemetry & Kinematics",
        institution: "[College / Institute Name]",
        bio: "Handling AIS NMEA decoding, spatiotemporal trajectory interpolation, and geospatial databases."
      },
      {
        name: "[Team Member 4]",
        role: "Hydrodynamic Modeling & Attribution",
        institution: "[College / Institute Name]",
        bio: "Developing Lagrangian drift simulations, ocean surface current vector integration, and confidence scoring."
      },
      {
        name: "[Team Member 5]",
        role: "Full-Stack Geospatial Systems",
        institution: "[College / Institute Name]",
        bio: "Architecting responsive web interfaces, GIS mapping components, and automated report rendering."
      },
      {
        name: "[Team Member 6]",
        role: "Research Documentation & Validation",
        institution: "[College / Institute Name]",
        bio: "Conducting benchmark validations, regulatory compliance checks, and scientific literature documentation."
      }
    ]
  },

  references: [
    {
      id: 1,
      category: "Remote Sensing & SAR",
      title: "Synthetic Aperture Radar (SAR) Detection of Oil Spills at Sea: Review and Benchmark",
      authors: "Brekke, C. and Solberg, A. H. S.",
      journal: "Remote Sensing of Environment",
      year: "2005",
      doi: "10.1016/j.rse.2005.01.008",
      url: "https://doi.org/10.1016/j.rse.2005.01.008"
    },
    {
      id: 2,
      category: "Dataset & Benchmark",
      title: "Oil Spill Detection Dataset based on Sentinel-1 SAR Images",
      authors: "Krestenitis, M., Orfanidis, G., Ioannidis, K., et al.",
      journal: "M4D / Information Technologies Institute (ITI)",
      year: "2019",
      doi: "10.1016/j.isprsjprs.2019.06.009",
      url: "https://m4d.iti.gr/oil-spill-detection-dataset/"
    },
    {
      id: 3,
      category: "AIS & Vessel Attribution",
      title: "AIS-based Maritime Anomaly Detection and Spatiotemporal Vessel Trajectory Analysis",
      authors: "Tu, E., Zhang, G., Mao, L., et al.",
      journal: "IEEE Transactions on Intelligent Transportation Systems",
      year: "2018",
      doi: "10.1109/TITS.2017.2764952",
      url: "https://ieeexplore.ieee.org/document/8118182"
    },
    {
      id: 4,
      category: "Hydrodynamics & Drift Modeling",
      title: "Lagrangian Ocean Analysis: Fundamentals and Practices",
      authors: "van Sebille, E., Griffies, S. M., Abernathey, R., et al.",
      journal: "Ocean Modelling",
      year: "2018",
      doi: "10.1016/j.ocemod.2017.11.008",
      url: "https://doi.org/10.1016/j.ocemod.2017.11.008"
    },
    {
      id: 5,
      category: "Official Satellite Programs",
      title: "Copernicus Sentinel-1 SAR User Guide & Technical Specifications",
      authors: "European Space Agency (ESA)",
      journal: "ESA Earth Online Documentation",
      year: "2024",
      doi: "",
      url: "https://sentinels.copernicus.eu/web/sentinel/user-guides/sentinel-1-sar"
    }
  ]
};
