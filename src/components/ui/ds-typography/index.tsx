import { clsx } from "clsx";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

import {
  TYPOGRAPHY_COLORS,
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_WEIGHTS,
  type TypographyColor,
  type TypographyVariant,
  type TypographyWeight,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsTypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  as?: ElementType;
  children?: ReactNode;
}

export function DsTypography({
  variant = "body-md",
  color = "primary",
  weight,
  as,
  children,
  ...props
}: Readonly<DsTypographyProps>) {
  const variantConfig = TYPOGRAPHY_VARIANTS[variant];

  const Tag = as ?? variantConfig.tag;

  return (
    <Tag
      className={clsx(
        styles["base"],
        styles[variantConfig.className],
        styles[TYPOGRAPHY_COLORS[color]],
        weight && styles[TYPOGRAPHY_WEIGHTS[weight]],
      )}
      data-variant={variant}
      data-color={color}
      data-weight={weight}
      {...props}
    >
      {children}
    </Tag>
  );
}
