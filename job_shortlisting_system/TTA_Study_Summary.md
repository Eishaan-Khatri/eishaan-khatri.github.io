# Source-Preserved Test-Time Adaptation Study

This is the public proof summary for the portfolio. The full local study folder is kept in the workspace, but this summary is the lightweight version that can be safely linked from the portfolio site.

## Research Question

When test-time adaptation improves severe corruption performance but damages mild-shift performance, can source-model behavior be partially preserved without losing the gains from adaptation?

## Setup

- **Source dataset:** CIFAR-10 train split
- **Target benchmark:** CIFAR-10-C
- **Model:** CIFAR-adapted ResNet-18
- **Adaptation:** unlabeled test-time adaptation on corrupted target batches
- **Corruptions tested:** gaussian noise, shot noise, motion blur, brightness, fog
- **Severities:** 1 to 5
- **Total settings:** 25 corruption/severity pairs
- **Clean CIFAR-10 source accuracy:** 91.01%

## Methods Compared

- Source-only
- BN Adapt
- Tent
- UG-Tent
- Margin Tent
- Anchor Tent
- Source Mix Tent
- Entropy-Gap Mix
- Disagreement-Aware Mix
- Probe-Commit Tent

## Main Result

| Method | Mean Accuracy | Delta vs Source | Delta vs Tent | Negative-Transfer Cases |
|---|---:|---:|---:|---:|
| Source-only | 69.16% | 0.00 pp | -13.02 pp | 0 |
| BN Adapt | 81.95% | +12.79 pp | -0.23 pp | 5 |
| Tent | 82.18% | +13.02 pp | 0.00 pp | 5 |
| UG-Tent | 82.19% | +13.02 pp | +0.00 pp | 5 |
| Source Mix Tent 0.75 | 82.64% | +13.48 pp | +0.46 pp | 3 |

The useful result is narrow and defensible: `source_mix_tent_075`, a 75% adapted-logit and 25% source-logit mixture, slightly improved mean accuracy over Tent and reduced negative-transfer cases from 5 to 3 on this first-pass benchmark.

## Interview-Safe Claim

> I built a small reproducible study around test-time adaptation under corruption shift. The strongest result was that a simple source-preserved prediction rule improved mean CIFAR-10-C accuracy from 82.18% with Tent to 82.64%, while reducing negative-transfer cases from 5 to 3. I do not claim SOTA; I use this as evidence of robustness evaluation, baseline implementation, ablation, and failure-case analysis.

## Claim Boundary

This is not a state-of-the-art method claim. It is a reproducible learning and research-engineering artifact showing baseline implementation, ablation reasoning, negative-transfer analysis, and careful result framing.

