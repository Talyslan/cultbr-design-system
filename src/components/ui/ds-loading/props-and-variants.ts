export const LOADING_VARIANTS = {
  spinner: "variant-spinner",
  dots: "variant-dots",
} as const;

export const LOADING_SIZES = {
  sm: "size-sm",
  md: "size-md",
  lg: "size-lg",
} as const;

export const LOADING_TONES = {
  brand: "tone-brand",
  neutral: "tone-neutral",
  inverse: "tone-inverse",
} as const;

export type LoadingVariant = keyof typeof LOADING_VARIANTS;
export type LoadingSize = keyof typeof LOADING_SIZES;
export type LoadingTone = keyof typeof LOADING_TONES;
