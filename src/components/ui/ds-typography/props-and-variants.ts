export const TYPOGRAPHY_VARIANTS = {
  h1: {
    tag: "h1",
    className: "h1",
  },
  h2: {
    tag: "h2",
    className: "h2",
  },
  h3: {
    tag: "h3",
    className: "h3",
  },
  h4: {
    tag: "h4",
    className: "h4",
  },
  h5: {
    tag: "h5",
    className: "h5",
  },
  h6: {
    tag: "h6",
    className: "h6",
  },
  "body-lg": {
    tag: "p",
    className: "body-lg",
  },
  "body-md": {
    tag: "p",
    className: "body-md",
  },
  "body-sm": {
    tag: "p",
    className: "body-sm",
  },
  caption: {
    tag: "span",
    className: "caption",
  },
  overline: {
    tag: "span",
    className: "overline",
  },
  micro: {
    tag: "small",
    className: "micro",
  },
  "display-d1": {
    tag: "h1",
    className: "display-d1",
  },
  "display-d2": {
    tag: "h1",
    className: "display-d2",
  },
  "display-d3": {
    tag: "h1",
    className: "display-d3",
  },
} as const;

export const TYPOGRAPHY_TONES = {
  primary: "tone-primary",
  secondary: "tone-secondary",
  muted: "tone-muted",
  brand: "tone-brand",
  danger: "tone-danger",
  success: "tone-success",
  warning: "tone-warning",
  inverse: "tone-inverse",
} as const;

export const TYPOGRAPHY_WEIGHTS = {
  regular: "weight-regular",
  medium: "weight-medium",
  semibold: "weight-semibold",
  bold: "weight-bold",
} as const;

export type TypographyVariant = keyof typeof TYPOGRAPHY_VARIANTS;
export type TypographyTone = keyof typeof TYPOGRAPHY_TONES;
export type TypographyWeight = keyof typeof TYPOGRAPHY_WEIGHTS;
