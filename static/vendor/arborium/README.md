# Arborium theme styles

Unmodified CSS from `@arborium/arborium` version 2.18.2:
https://github.com/bearcove/arborium

Arborium is dual licensed MIT OR Apache-2.0. Ayu palettes are adapted from
https://github.com/ayu-theme/ayu-colors (MIT).

`base.css` selects light/dark syntax colors with prefers-color-scheme.
Both Ayu palettes must be loaded before it. Page backgrounds remain pure white/black; code blocks use a subtle neutral
background for separation. The separately maintained `static/code-contrast.css` adjusts token lightness
where the upstream Ayu colors fail text contrast on these backgrounds.
