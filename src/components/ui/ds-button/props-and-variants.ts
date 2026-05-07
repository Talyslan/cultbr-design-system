export const BUTTON_VARIANTS = {
  primary: "variantPrimary",
  secondary: "variantSecondary",
  danger: "variantDanger",
  ghost: "variantGhost",
  outline: "variantOutline",
  success: "variantSuccess",
  link: "variantLink",
  "brand-outline": "variantBrandOutline",
} as const;

export const BUTTON_SIZES = {
  lg: "sizeLg",
  default: "sizeDefault",
  sm: "sizeSm",
  xs: "sizeXs",
  icon: "sizeIcon",
} as const;

export const BUTTON_COLORS = {
  default: "colorDefault",
  brand: "colorBrand",
  neutral: "colorNeutral",
  danger: "colorDanger",
  success: "colorSuccess",
} as const;

export const BUTTON_ROUNDS = {
  none: "roundNone",
  sm: "roundSm",
  md: "roundMd",
  lg: "roundLg",
  full: "roundFull",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
export type ButtonSize = keyof typeof BUTTON_SIZES;
export type ButtonColor = keyof typeof BUTTON_COLORS;
export type ButtonRound = keyof typeof BUTTON_ROUNDS;
