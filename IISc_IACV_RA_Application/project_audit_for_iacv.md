# Project Audit For IACV Application

Prepared: 5 May 2026

This is the critical claim ledger. It keeps the CV sharp without drifting into fragile claims.

## Main Projects To Use

### 1. Target-Based Offensive Language Detection In Hinglish

Use prominently.

Safe claims:

- Published in Expert Systems with Applications, Volume 308, May 2026.
- Paper link from existing resume: https://authors.elsevier.com/c/1mQDW3PiGTXOl6
- 6,800+ instance Hinglish dataset.
- Token-level target annotation framework.
- Evaluated mBERT, XLM-R, MuRIL.

Why it helps:

- Strongest verified research artifact.
- Shows low-resource learning, annotation design, pretrained model evaluation, error analysis.
- Not CV, but the research process transfers.

Avoid:

- Pretending this is vision research.
- Claiming SOTA unless the paper explicitly supports it.

### 2. Edge-VCA

Use prominently.

Safe claims:

- YOLOv8-Nano + OpenCV CPU video analytics.
- Custom IoU tracking, polygon zones, dwell/loitering, speed estimation, heatmaps.
- 3 detector comparison at 640x480.
- 24.5 FPS, 40.8 ms/frame, 185 MB peak RAM in project benchmark.
- 3 robustness conditions and documented failure modes.

Avoid:

- "0 false positives" as a headline claim.
- "0% ID switches" as a headline claim.
- Production deployment language.
- Hardware-specific claims unless you know the CPU model.

### 3. Uncertainty Study

Use prominently as replacement for IRMDS.

Safe claims:

- Controlled ECG reconstruction benchmark from SciPy ECG waveform.
- 256-step windows.
- Approximately 64k train / 21k validation / 21k test samples.
- Standard corruption: sigma 0.1, 10% masking.
- Extreme corruption: sigma 0.5, 30% masking.
- Baseline MSE 0.0012 to 0.0469 under shift.
- MC Dropout approximately 4x higher mean uncertainty; Spearman 0.30 in project evaluation.

Why it helps:

- Directly supports robustness/distribution-shift story.
- More research-flavored than IRMDS.
- Connects loosely to medical data without overclaiming medical imaging expertise.

Avoid:

- Claiming clinical relevance beyond "controlled ECG reconstruction benchmark."
- Claiming full MIT-BIH benchmark use; README says SciPy ECG waveform derived from MIT-BIH.
- Claiming ensemble/aleatoric/conformal experiments in the CV unless those notebooks/results are committed and easy to verify.

### 4. NCA-Language-Models

Use, but secondary.

Safe claims:

- 2,100+ line interactive reimplementation.
- NCA simulations, tokenization, gzip complexity, Zipf, entropy, spectral analysis, 2x2 patch tokenization, baseline comparison, corpus export.

Avoid:

- Claiming you trained full language models.
- Claiming paper benchmark results as your own.

## Projects To Exclude From Main CV

- IRMDS: good engineering, but too systems/MLOps for this application.
- Stock forecasting: dangerous R2 claim.
- Pharma analytics: business analytics flavor.
- Algolia MCP financial analyst: finance/agent demo, not IACV.
- cortex: broad research monitor, too noisy.

## Current Taste Check

The revised CV should now read as:

- published ML researcher
- low-resource model adaptation and annotation experience
- practical computer vision through Edge-VCA
- robustness/distribution-shift evidence through Uncertainty Study
- paper-reading/reimplementation through NCA
- not a generic analytics or dashboard candidate

