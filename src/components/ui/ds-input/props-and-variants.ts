export const INPUT_SIZES = {
  sm: "sizeSm",
  md: "sizeMd",
  lg: "sizeLg",
} as const;

export const INPUT_RADII = {
  sm: "radiusSm",
  md: "radiusMd",
  lg: "radiusLg",
} as const;

export type InputSize = keyof typeof INPUT_SIZES;
export type InputRadius = keyof typeof INPUT_RADII;
