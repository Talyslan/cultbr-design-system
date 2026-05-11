import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import { forwardRef } from "react";

import { DsLoading } from "../ds-loading";
import {
  BUTTON_APPEARANCES,
  BUTTON_ROUNDS,
  BUTTON_SIZES,
  BUTTON_TONES,
  type ButtonAppearance,
  type ButtonRound,
  type ButtonSize,
  type ButtonTone,
} from "./props-and-variants";
import styles from "./styles.module.css";

type CommonButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  /** Estilo visual do botão (preenchido, contorno, ghost ou link). */
  appearance?: ButtonAppearance;
  /** Cor semântica / tom da ação. */
  tone?: ButtonTone;
  /** Raio das bordas. */
  round?: ButtonRound;
  /** Estado de carregamento (desabilita o botão). */
  loading?: boolean;
  /** Variante visual do indicador de loading. */
  loadingVariant?: "spinner" | "dots";
  /** Ocupa 100% da largura do container. */
  fullWidth?: boolean;
  /** Ícone ou elemento antes do texto (decorativo: `aria-hidden`). */
  leftIcon?: ReactNode;
  /** Ícone ou elemento depois do texto (decorativo: `aria-hidden`). */
  rightIcon?: ReactNode;
};

export type DefaultSizeButtonProps = CommonButtonProps & {
  size?: Exclude<ButtonSize, "icon">;
  children: ReactNode;
};

export type IconOnlyButtonProps = CommonButtonProps & {
  size: "icon";
  "aria-label": string;
  children?: ReactNode;
};

export type DsButtonProps = DefaultSizeButtonProps | IconOnlyButtonProps;

export const DsButton = forwardRef<HTMLButtonElement, DsButtonProps>(
  (
    {
      appearance = "solid",
      tone = "brand",
      size = "default",
      round = "lg",
      loading = false,
      loadingVariant = "spinner",
      disabled,
      children,
      fullWidth,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const appearanceClass = styles[BUTTON_APPEARANCES[appearance]];
    const toneClass = styles[BUTTON_TONES[tone]];
    const sizeClass = styles[BUTTON_SIZES[size]];
    const roundClass = styles[BUTTON_ROUNDS[round]];

    const isDisabled = disabled ?? loading;

    const body = (
      <>
        {leftIcon ? (
          <span className={styles["icon-slot"]} aria-hidden>
            {leftIcon}
          </span>
        ) : null}
        {children}
        {rightIcon ? (
          <span className={styles["icon-slot"]} aria-hidden>
            {rightIcon}
          </span>
        ) : null}
      </>
    );

    const content = loading ? (
      <>
        <span className={styles["loading-content"]} aria-hidden={loading}>
          {body}
        </span>
        <span className={styles["spinner"]}>
          <DsLoading variant={loadingVariant} size="sm" />
        </span>
      </>
    ) : (
      body
    );

    return (
      <button
        className={clsx(
          styles["base"],
          appearanceClass,
          toneClass,
          sizeClass,
          roundClass,
          loading && styles["loading"],
          fullWidth && styles["full-width"],
          className,
        )}
        type="button"
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading ? "true" : undefined}
        {...props}
      >
        {content}
      </button>
    );
  },
);

DsButton.displayName = "DsButton";

export type {
  ButtonAppearance,
  ButtonRound,
  ButtonSize,
  ButtonTone,
} from "./props-and-variants";
