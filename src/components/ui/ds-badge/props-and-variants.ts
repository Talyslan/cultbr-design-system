export const BADGE_TONES = {
  neutral: "tone-neutral",
  brand: "tone-brand",
  success: "tone-success",
  danger: "tone-danger",
  warning: "tone-warning",
} as const;

export const BADGE_APPEARANCES = {
  solid: "appearance-solid",
  subtle: "appearance-subtle",
  outline: "appearance-outline",
} as const;

export const BADGE_SIZES = {
  default: "size-default",
  sm: "size-sm",
} as const;

export type BadgeTone = keyof typeof BADGE_TONES;
export type BadgeAppearance = keyof typeof BADGE_APPEARANCES;
export type BadgeSize = keyof typeof BADGE_SIZES;
