import { clsx } from "clsx";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import {
  BADGE_APPEARANCES,
  BADGE_SIZES,
  BADGE_TONES,
  type BadgeAppearance,
  type BadgeSize,
  type BadgeTone,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsBadgeProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> {
  /** Tom semântico do badge. */
  tone?: BadgeTone;
  /** Aparência visual aplicada sobre o tom. */
  appearance?: BadgeAppearance;
  /** Tamanho do badge. */
  size?: BadgeSize;
  /** Estado desabilitado. Sobrescreve a aparência atual. */
  disabled?: boolean;
  /**
   * Aplica uma animação suave de "pulse" para indicadores ao vivo.
   * Respeita `prefers-reduced-motion: reduce`, desativando a animação.
   */
  pulse?: boolean;
  /** Conteúdo do badge. Obrigatório. */
  children: ReactNode;
}

export const DsBadge = forwardRef<HTMLSpanElement, DsBadgeProps>(
  function DsBadge(
    {
      tone = "neutral",
      appearance = "subtle",
      size = "default",
      disabled = false,
      pulse = false,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={clsx(
          styles["base"],
          styles[BADGE_TONES[tone]],
          styles[BADGE_APPEARANCES[appearance]],
          styles[BADGE_SIZES[size]],
          disabled && styles["disabled"],
          pulse && styles["pulse"],
          className,
        )}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {children}
      </span>
    );
  },
);
