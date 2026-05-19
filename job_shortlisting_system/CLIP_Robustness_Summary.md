# CLIP Zero-Shot Robustness Study

This is the public proof summary for the portfolio. The full local study folder is kept in the workspace, but this summary is the lightweight version that can be safely linked from the portfolio site.

## Research Question

CLIP can classify images zero-shot using text prompts, but how reliable is that ability when images are corrupted or come from a different visual domain?

## Setup

- **Model:** CLIP ViT-B/32 through `open_clip`
- **Mode:** zero-shot only, no fine-tuning, no adaptation
- **Prompting:** 8-template prompt ensemble per class
- **Datasets:** CIFAR-10-C, CIFAR-100-C, EuroSAT
- **Corruption benchmark:** 15 corruption types x 5 severity levels
- **Metrics:** accuracy, confidence, confidence gap, ECE, entropy, feature drift

## Main Results

| Dataset / Setting | Accuracy | Avg Confidence | ECE | Confidence Gap |
|---|---:|---:|---:|---:|
| CIFAR-10 clean | 86.30% | 82.95% | 0.0410 | -3.35 pp |
| CIFAR-100 clean | 62.92% | 50.50% | 0.1242 | -12.42 pp |
| EuroSAT zero-shot | 33.50% | 41.65% | 0.1165 | +8.15 pp |

Worst observed single settings:

- CIFAR-10-C gaussian noise severity 5: 34.30% accuracy
- CIFAR-100-C pixelate severity 5: 14.55% accuracy

Feature drift was meaningfully related to accuracy drop:

- Spearman 0.613 on CIFAR-10-C
- Spearman 0.720 on CIFAR-100-C

## Interpretation

The result is not that CLIP is weak overall. The result is that zero-shot CLIP remains vulnerable under corruption and domain shift, and feature-space diagnostics can help expose where the representation starts failing.

## Interview-Safe Claim

> I evaluated zero-shot CLIP ViT-B/32 under corruption and domain shift using CIFAR-10-C, CIFAR-100-C, and EuroSAT. The main finding was that CLIP is strong on clean natural images but not automatically robust: CIFAR-10 clean accuracy was 86.30%, while gaussian noise severity 5 dropped to 34.30%. I also measured calibration and feature drift, where drift correlated with accuracy drop.

## Claim Boundary

This is not a new CLIP method, not a new adaptation algorithm, and not a deployment claim. It is evidence of VLM evaluation, robustness diagnostics, calibration analysis, and careful failure-mode reporting.

