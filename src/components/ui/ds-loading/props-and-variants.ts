export const LOADING_VARIANTS = {
  spinner: "variantSpinner",
  dots: "variantDots",
} as const;

export const LOADING_SIZES = {
  sm: "sizeSm",
  md: "sizeMd",
  lg: "sizeLg",
} as const;

export type LoadingVariant = keyof typeof LOADING_VARIANTS;
export type LoadingSize = keyof typeof LOADING_SIZES;
