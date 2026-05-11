export const BUTTON_APPEARANCES = {
  solid: "appearance-solid",
  outline: "appearance-outline",
  ghost: "appearance-ghost",
  link: "appearance-link",
} as const;

export const BUTTON_TONES = {
  brand: "tone-brand",
  neutral: "tone-neutral",
  danger: "tone-danger",
  success: "tone-success",
} as const;

export const BUTTON_SIZES = {
  lg: "size-lg",
  default: "size-default",
  sm: "size-sm",
  xs: "size-xs",
  icon: "size-icon",
} as const;

export const BUTTON_ROUNDS = {
  none: "round-none",
  sm: "round-sm",
  md: "round-md",
  lg: "round-lg",
  full: "round-full",
} as const;

export type ButtonAppearance = keyof typeof BUTTON_APPEARANCES;
export type ButtonTone = keyof typeof BUTTON_TONES;
export type ButtonSize = keyof typeof BUTTON_SIZES;
export type ButtonRound = keyof typeof BUTTON_ROUNDS;
