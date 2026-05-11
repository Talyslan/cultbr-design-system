import { clsx } from "clsx";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

import {
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_WEIGHTS,
  type TypographyTone,
  type TypographyVariant,
  type TypographyWeight,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsTypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  tone?: TypographyTone;
  weight?: TypographyWeight;
  as?: ElementType;
  children: ReactNode;
}

export function DsTypography({
  variant = "body-md",
  tone = "primary",
  weight,
  as,
  children,
  className,
  ...props
}: Readonly<DsTypographyProps>) {
  const variantConfig = TYPOGRAPHY_VARIANTS[variant];

  const Tag = as ?? variantConfig.tag;

  return (
    <Tag
      className={clsx(
        styles["base"],
        styles[variantConfig.className],
        styles[TYPOGRAPHY_TONES[tone]],
        weight && styles[TYPOGRAPHY_WEIGHTS[weight]],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
