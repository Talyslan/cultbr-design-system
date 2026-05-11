import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

import {
  LOADING_SIZES,
  LOADING_TONES,
  LOADING_VARIANTS,
  type LoadingSize,
  type LoadingTone,
  type LoadingVariant,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsLoadingProps extends HTMLAttributes<HTMLOutputElement> {
  /** Estilo visual do indicador de carregamento. */
  variant?: LoadingVariant;
  /** Tamanho do indicador (afeta spinner e dots). */
  size?: LoadingSize;
  /** Tom de cor aplicado via `currentColor` ao spinner e aos dots. */
  tone?: LoadingTone;
  /**
   * Texto anunciado por leitores de tela através de `aria-label`.
   * É sobrescrito quando `aria-label` é passado explicitamente.
   * @default "Carregando"
   */
  label?: string;
}

export function DsLoading({
  variant = "spinner",
  size = "md",
  tone = "brand",
  label = "Carregando",
  className,
  "aria-label": ariaLabelProp,
  ...props
}: Readonly<DsLoadingProps>) {
  const variantClass = styles[LOADING_VARIANTS[variant]];
  const sizeClass = styles[LOADING_SIZES[size]];
  const toneClass = styles[LOADING_TONES[tone]];
  const ariaLabel = ariaLabelProp ?? label;

  if (variant === "dots") {
    return (
      <output
        aria-live="polite"
        aria-atomic
        aria-label={ariaLabel}
        className={clsx(
          styles["base"],
          variantClass,
          sizeClass,
          toneClass,
          className,
        )}
        {...props}
      >
        <span className={styles["dot"]} />
        <span className={styles["dot"]} />
        <span className={styles["dot"]} />
      </output>
    );
  }

  return (
    <output
      aria-live="polite"
      aria-atomic
      aria-label={ariaLabel}
      className={clsx(
        styles["base"],
        variantClass,
        sizeClass,
        toneClass,
        className,
      )}
      {...props}
    >
      <span className={styles["spinner-track"]} />
      <span className={styles["spinner-orbit"]} />
    </output>
  );
}

export type {
  LoadingSize,
  LoadingTone,
  LoadingVariant,
} from "./props-and-variants";
