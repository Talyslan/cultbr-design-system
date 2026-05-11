export const INPUT_SIZES = {
  sm: "size-sm",
  md: "size-md",
  lg: "size-lg",
} as const;

export const VALIDATION_STATES = {
  valid: "validation-valid",
  invalid: "validation-invalid",
} as const;

export type InputSize = keyof typeof INPUT_SIZES;
export type ValidationState = keyof typeof VALIDATION_STATES;
