# Browser contrast audit

Tested on 25 October 2026 using Firefox 155.0.1 and axe-core 4.10.3 against an isolated production build served over local HTTP.

## Results

All six content pages passed axe's `color-contrast` rule in light and dark modes at actual viewport widths of **1280px** and **500px**: **24 page/theme/viewport combinations, zero violations after fixes**.

The narrow-window request was 390px, but this Firefox installation enforces a 500px minimum. These results do not claim testing at 390px.

Pages checked: Home, About, All writing, and all three example posts. Arborium finished highlighting Rust, shell, and Markdown before each code-page audit, and the Google fonts finished loading.

## Confirmed failures and fixes

| Content | Before | After |
| --- | --- | --- |
| Ayu Light function names | 1.74:1 | 5.07:1 |
| Ayu Light keywords | 2.13:1 | 5.07:1 |
| Ayu Light strings | 2.25:1 | 5.08:1 |
| Ayu Light types | 2.64:1 | 5.07:1 |
| Dark-mode muted text | 4.42:1 | 6.08:1 |
| Ayu Dark comments, tested in the token fixture | 3.44:1 | 5.10:1 |

Ayu adjustments live in `static/code-contrast.css`, loaded only on code pages after the unmodified upstream theme files. They preserve each original hue and saturation while adjusting lightness. The code backgrounds remain `#f2f4f7` in light mode and `#111111` in dark mode. Dark-mode muted text now uses `#8a8a8a`.

## Additional browser checks

A temporary code fixture exercised **all 69 Arborium token styles** using the site's actual CSS. Both computed-color checks and axe passed. Minimum measured token contrast was **5.0501:1 in light mode** and **5.0982:1 in dark mode**, including token styles absent from the example posts.

Axe marked the homepage's decorative dot and arrow for manual review because they contain symbols rather than words. Their computed contrast was checked separately: 5.90:1 and 7.09:1 in light mode; 11.30:1 and 9.80:1 in dark mode. Footer social icons also passed: 4.74:1 in light mode and 6.08:1 in dark mode.

Screenshots of the highlighted Rust example were inspected in both themes.

## Scope

This is a contrast audit, not a complete accessibility certification. It uses the WCAG AA minimum of 4.5:1 for normal text and 3:1 for large text. The code styles target at least 5:1 for additional headroom. Displayed ratios are rounded; pass/fail comparisons use unrounded values.

A subtle background for a static code region does not itself need a 3:1 difference from the page. The text must have adequate contrast against its actual background; required controls and meaningful graphics have separate non-text contrast requirements.

References: [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
