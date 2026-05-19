# Master Evidence Bank

This is the source-of-truth file for resume, portfolio, LinkedIn, GitHub, and interview claims. Use only claims that can be traced to a paper, PDF, README, CSV, code file, or application artifact.

## Evidence Status Key

- **Verified:** safe to use directly.
- **Use with caution:** usable, but wording must be conservative.
- **Do not use:** too risky, unsupported, or likely to create interview trouble.

## Core Evidence

| Evidence | Role Signal | Safe Claim | Source | Status |
|---|---|---|---|---|
| Hinglish ESWA paper | NLP, low-resource NLP, responsible AI, research | Published/accepted work in Expert Systems with Applications on Hinglish offensive language detection with span/target-level modeling. | `IISc_IACV_RA_Application/project_audit_for_iacv.md`, portfolio publications section, ESWA manuscript material | Verified |
| Hinglish dataset | NLP, dataset creation, annotation | Built/expanded a Hinglish dataset of 6,800+ posts for harmful/offensive language analysis. | `IISc_IACV_RA_Application/project_audit_for_iacv.md` | Verified |
| Hinglish transformer evaluation | NLP modeling | Evaluated multilingual transformer models such as mBERT, XLM-R, and MuRIL. | `IISc_IACV_RA_Application/project_audit_for_iacv.md` | Verified |
| BiAffine target-argument pairing | NLP structured prediction | Replaced heuristic target-argument pairing with a BiAffine relation scorer in the revised methodology. | ESWA reviewer response material shared by user | Verified from user-provided material |
| CASML scientific QA work | LLMs, RAG, knowledge graphs, scientific ML | Worked on a zero-cost LLM scientific QA pipeline using dense retrieval and knowledge graph grounding; reported 68% hallucination reduction if backed by paper/poster. | Portfolio publications section | Use with caution |
| IACV TTA study | CV robustness, research engineering | Built a reproducible CIFAR-10-C test-time adaptation study comparing source-only, BN Adapt, Tent, UG-Tent, and source-mix variants. | `job_shortlisting_system/TTA_Study_Summary.md`; full local folder `IACV_TTA_Study/` | Verified |
| Source Mix Tent result | CV robustness, model adaptation | Source Mix Tent 0.75 achieved 82.64% mean accuracy and reduced negative-transfer cases from 5 to 3 in the first-pass CIFAR-10-C benchmark. | `job_shortlisting_system/TTA_Study_Summary.md`; full local folder `IACV_TTA_Study/` | Verified |
| CLIP robustness study | VLMs, robustness evaluation, OOD | Evaluated CLIP ViT-B/32 zero-shot robustness on CIFAR-10-C, CIFAR-100-C, and EuroSAT using accuracy, ECE, confidence gap, entropy, and feature drift. | `job_shortlisting_system/CLIP_Robustness_Summary.md`; full local folder `IACV_CLIP_Robustness_Study/` | Verified |
| CLIP clean vs corrupted result | VLM robustness | CLIP reached 86.30% on clean CIFAR-10 but dropped to 34.30% on gaussian noise severity 5. | `job_shortlisting_system/CLIP_Robustness_Summary.md`; full local folder `IACV_CLIP_Robustness_Study/` | Verified |
| CLIP feature drift correlation | VLM diagnostics | Feature drift correlated with accuracy drop: Spearman 0.613 on CIFAR-10-C and 0.720 on CIFAR-100-C. | `job_shortlisting_system/CLIP_Robustness_Summary.md`; full local folder `IACV_CLIP_Robustness_Study/` | Verified |
| Edge-VCA | Computer vision engineering, edge AI | Built YOLOv8-Nano + OpenCV CPU video analytics with tracking, polygon zones, dwell/loitering, speed estimation, and heatmaps. | `IISc_IACV_RA_Application/project_audit_for_iacv.md` | Verified if repo remains available |
| Edge-VCA benchmark | Computer vision engineering | Reported 24.5 FPS, 40.8 ms/frame, and 185 MB peak RAM in the project benchmark. | `IISc_IACV_RA_Application/project_audit_for_iacv.md` | Use with caution |
| Uncertainty study | Robustness, uncertainty, signal reconstruction | Built a controlled ECG reconstruction benchmark with corruption shift and MC Dropout uncertainty analysis. | `IISc_IACV_RA_Application/project_audit_for_iacv.md`, `research_fit_note.md` | Verified from local audit |
| Polka Labs AI systems | AI systems, agents, applied engineering | Built or contributed to AI agents, persona systems, and multi-platform bot architectures. | Existing resume/portfolio content | Use with caution until project-specific proof is linked |
| XAI finance / IIM Shillong | Data science, explainability | Studied explainable AI methods for finance and trust calibration. | Existing CV variants | Use with caution |
| Industrial anomaly detection | Data science, industrial ML | Built physics-informed anomaly detection over dirty industrial sensor data using unsupervised ML and temporal/physics features. | User-provided project summary | Use with caution until local source/repo is linked |
| Forecasting / analytics work | Data science | Built time-series forecasting and analytics pipelines. | Existing resume variants | Use with caution |
| LinkedIn profile | Public identity | LinkedIn exists and should be updated to match the stronger research/application story. | `linkedin/Profile.pdf` | Verified but currently weaker than portfolio |

## Current Resume/PDF Inventory

| File | Best Use | Notes |
|---|---|---|
| `CV_Eishaan_Khatri_Research.pdf` | NLP/research applications | Good for NLP, low-resource, responsible AI, research internships. Duplicate exists as `(1)`. |
| `Eishaan_Khatri_IACV_RA_CV.pdf` | CV robustness / RA applications | Strong for IACV-style research associate roles. |
| `IISc_IACV_RA_Application/Eishaan_Khatri_IACV_RA_CV_STANDARD_FULLPAGE.pdf` | Academic CV robustness version | Cleaner application package artifact; good for lab applications. |
| `Eishaan_Khatri_Resume.pdf` | Data science / analytics roles | More analytics/business oriented. Same hash as `Resume_Eishaan_Khatri_ZS_DAA.pdf`. |
| `Eishaan_Khatri_IrrationalLabs.pdf` | Behavioral AI, UX research, product research | Strong for behavioral/product-oriented AI roles. |
| `CV_Eishaan_Khatri (1).pdf`, `(2)`, `(3)` | General fallback only | Do not send unless no stronger role-specific fit exists. |
| `CV_Eishaan_Khatri.pdf`, `CV_Eishaan_Khatri(May 2025).pdf` | Archive | Older general variants. Avoid for current applications. |

## Best Shortlisting Anchors

Use these when you need a strong first-half-page proof stack:

1. **NLP / LLM roles:** Hinglish ESWA + CASML + transformers/RAG.
2. **CV / robust ML roles:** TTA study + CLIP robustness + Edge-VCA.
3. **AI systems roles:** Polka agents + RAG/KG + multi-platform bots.
4. **Data science roles:** anomaly detection + forecasting + XAI finance.
5. **Research assistant roles:** ESWA + TTA/CLIP + reproducible READMEs + ablations/error analysis.
