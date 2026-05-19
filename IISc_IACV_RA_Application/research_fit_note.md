# Research Fit Note - IACV Lab, IISc

This note is for interview preparation and personalization. Do not attach it unless asked.

## My View Of The Reviews

The 8.1 review is directionally right: the CV became much more relevant than the older analytics version. The 7.4 review is more useful strategically because it identifies the real risk: the application must not look like keyword matching without evidence.

The correction is:

- Remove IRMDS from the main CV because it reads too much like systems/MLOps.
- Elevate Hinglish because it is your strongest verified research artifact.
- Add Uncertainty Study because it gives a real robustness/distribution-shift story.
- Keep Edge-VCA because it is your strongest computer vision signal.
- Keep NCA as paper-reimplementation evidence, but do not overclaim it.

## Core Positioning

Best honest positioning:

> I am a mathematically strong, published ML researcher with hands-on evidence in low-resource learning, edge computer vision, uncertainty under distribution shift, and paper reimplementation. I want to contribute to IACV's data-efficient and robust vision work.

## Evidence Stack

### Hinglish research

- 6,800+ instance low-resource code-mixed dataset.
- Target-level/token-level annotation framework.
- Evaluated mBERT, XLM-R, MuRIL.
- Strongest proof of research maturity.

### Edge-VCA

- YOLOv8-Nano + OpenCV CPU video analytics.
- 3 detector benchmark at 640x480.
- Reported YOLOv8-Nano benchmark: 24.5 FPS, 40.8 ms/frame, 185 MB peak RAM.
- Documents failure modes: occlusion, partial occlusion, perspective, low light.

### Uncertainty Study

- Controlled ECG reconstruction benchmark.
- 256-step windows; approximately 64k train / 21k validation / 21k test samples.
- Standard corruption: sigma 0.1, 10% masking.
- Extreme shift: sigma 0.5, 30% masking.
- Baseline MSE: 0.0012 to 0.0469 under shift.
- MC Dropout: approximately 4x higher uncertainty; Spearman error-uncertainty correlation 0.30.

### NCA-Language-Models

- 2,100+ line interactive paper reimplementation.
- Shows ability to read current work and build experiments.
- Frame as synthetic-data/data-efficiency analysis, not as full LLM training.

## What To Avoid

- Do not talk about IRMDS unless asked about broader software engineering.
- Do not lead with finance, dashboards, stock forecasting, or pharma.
- Do not claim direct experience with diffusion models, remote sensing, or medical imaging beyond uncertainty/ECG signal work.
- Do not present NCA paper results as your own.

## Best Interview Answer For The Relevance Gap

My strongest direct research artifact is currently in low-resource NLP, but the underlying research skills transfer: dataset construction, annotation design, pretrained model evaluation, and error analysis under noisy data. To move toward vision, I built Edge-VCA for constrained video analytics and Uncertainty Study for robustness under distribution shift. I see the RA role as the right place to deepen those skills in data-efficient computer vision, VLM adaptation, and test-time/continual learning.

