import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

import { DsTypography } from "../ds-typography";
import {
  LOADING_SIZES,
  LOADING_VARIANTS,
  type LoadingSize,
  type LoadingVariant,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsLoadingProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: LoadingVariant;
  size?: LoadingSize;
}

export function DsLoading({
  variant = "spinner",
  size = "md",
  className,
  ...props
}: Readonly<DsLoadingProps>) {
  const variantClass = styles[LOADING_VARIANTS[variant]];
  const sizeClass = styles[LOADING_SIZES[size]];

  if (variant === "dots") {
    return (
      <span
        role="status"
        aria-live="polite"
        className={clsx(styles["base"], variantClass, className)}
        {...props}
      >
        <span className={styles["dot"]} />
        <span className={styles["dot"]} />
        <span className={styles["dot"]} />
        <DsTypography
          as="span"
          variant="micro"
          tone="muted"
          className={styles["srOnly"]}
        >
          Carregando...
        </DsTypography>
      </span>
    );
  }

  return (
    <span
      role="status"
      aria-live="polite"
      className={clsx(styles["base"], variantClass, sizeClass, className)}
      {...props}
    >
      <span className={styles["spinnerTrack"]} />
      <span className={styles["spinnerOrbit"]} />
      <DsTypography
        as="span"
        variant="micro"
        tone="muted"
        className={styles["srOnly"]}
      >
        Carregando...
      </DsTypography>
    </span>
  );
}

