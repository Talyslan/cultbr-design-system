export const TYPOGRAPHY_VARIANTS = {
  h1: { 
    tag: "h1", 
    className: "h1" 
  },
  h2: { 
    tag: "h2", 
    className: "h2" 
  },
  h3: { 
    tag: "h3", 
    className: "h3" 
  },
  h4: { 
    tag: "h4", 
    className: "h4" 
  },
  h5: { 
    tag: "h5", 
    className: "h5" 
  },
  h6: { 
    tag: "h6", 
    className: "h6" 
  },
  "body-lg": { 
    tag: "p", 
    className: "bodyLg" 
  },
  "body-md": { 
    tag: "p", 
    className: "bodyMd" 
  },
  "body-sm": { 
    tag: "p", 
    className: "bodySm" 
  },
  caption: { 
    tag: "span", 
    className: "caption" 
  },
  overline: { 
    tag: "span", 
    className: "overline" 
  },
  micro: { 
    tag: "span", 
    className: "micro" 
  },
  "display-d1": { 
    tag: "h1", 
    className: "displayD1" 
  },
  "display-d2": { 
    tag: "h1", 
    className: "displayD2" 
  },
  "display-d3": { 
    tag: "h1", 
    className: "displayD3" 
  },
} as const;

export const TYPOGRAPHY_COLORS = {
  primary: "colorPrimary",
  secondary: "colorSecondary",
  muted: "colorMuted",
  brand: "colorBrand",
  danger: "colorDanger",
  success: "colorSuccess",
  warning: "colorWarning",
  inverse: "colorInverse",
} as const;

export const TYPOGRAPHY_WEIGHTS = {
  regular: "weightRegular",
  medium: "weightMedium",
  semibold: "weightSemibold",
  bold: "weightBold",
} as const;

export type TypographyVariant = keyof typeof TYPOGRAPHY_VARIANTS;
export type TypographyColor = keyof typeof TYPOGRAPHY_COLORS;
export type TypographyWeight = keyof typeof TYPOGRAPHY_WEIGHTS;