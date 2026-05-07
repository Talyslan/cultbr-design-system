export const BADGE_VARIANTS = {
  default: "variantDefault",
  secondary: "variantSecondary",
  destructive: "variantDestructive",
  outline: "variantOutline",
  success: "variantSuccess",
  danger: "variantDanger",
  warning: "variantWarning",
  brand: "variantBrand",
  disabled: "variantDisabled",
} as const;

export const BADGE_SIZES = {
  default: "sizeDefault",
  sm: "sizeSm",
  dot: "sizeDot",
} as const;

export type BadgeVariant = keyof typeof BADGE_VARIANTS;
export type BadgeSize = keyof typeof BADGE_SIZES;
