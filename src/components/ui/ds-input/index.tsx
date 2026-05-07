import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

import {
  INPUT_RADII,
  INPUT_SIZES,
  type InputRadius,
  type InputSize,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  radius?: InputRadius;
  inputSize?: InputSize;
}

export const DsInput = forwardRef<HTMLInputElement, DsInputProps>(
  (
    {
      error = false,
      radius = "md",
      inputSize = "md",
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref,
  ) => {
    const sizeClass = styles[INPUT_SIZES[inputSize]];
    const radiusClass = styles[INPUT_RADII[radius]];

    return (
      <input
        ref={ref}
        data-slot="input"
        data-error={error}
        aria-invalid={ariaInvalid ?? (error ? "true" : undefined)}
        className={clsx(
          styles["base"],
          sizeClass,
          radiusClass,
          error && styles["error"],
        )}
        {...props}
      />
    );
  },
);

DsInput.displayName = "DsInput";
