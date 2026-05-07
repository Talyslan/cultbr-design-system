import { clsx } from "clsx";
import type { ButtonHTMLAttributes, Ref } from "react";
import { forwardRef } from "react";

import { DsLoading } from "../ds-loading";
import {
  BUTTON_COLORS,
  BUTTON_ROUNDS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  type ButtonColor,
  type ButtonRound,
  type ButtonSize,
  type ButtonVariant,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  round?: ButtonRound;
  loading?: boolean;
  loadingVariant?: "spinner" | "dots";
  width?: "full" | "auto";
}

export const DsButton = forwardRef<HTMLButtonElement, DsButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      color,
      round = "lg",
      loading = false,
      loadingVariant = "spinner",
      disabled,
      children,
      width,
      className,
      ...props
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const variantClass = styles[BUTTON_VARIANTS[variant]];
    const sizeClass = styles[BUTTON_SIZES[size]];
    const colorClass = color ? styles[BUTTON_COLORS[color]] : undefined;
    const roundClass = styles[BUTTON_ROUNDS[round]];

    const isDisabled = disabled ?? loading;

    const content = loading ? (
      <>
        <span className={styles["loadingContent"]}>{children}</span>
        <span className={styles["spinner"]}>
          <DsLoading variant={loadingVariant} size="sm" />
        </span>
      </>
    ) : (
      children
    );

    return (
      <button
        className={clsx(
          styles["base"],
          variantClass,
          sizeClass,
          colorClass,
          roundClass,
          loading && styles["loading"],
          isDisabled && styles["disabled"],
          width === "full" && styles["fullWidth"],
          className,
        )}
        type="button"
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading ? "true" : undefined}
        {...props}
      >
        {content}
      </button>
    );
  },
);

DsButton.displayName = "DsButton";
