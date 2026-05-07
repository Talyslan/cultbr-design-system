import { clsx } from "clsx";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import {
  BADGE_SIZES,
  BADGE_VARIANTS,
  type BadgeSize,
  type BadgeVariant,
} from "./props-and-variants";
import styles from "./styles.module.css";

export interface DsBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: ReactNode;
}

export const DsBadge = forwardRef<HTMLSpanElement, DsBadgeProps>(
  ({ variant = "default", size = "default", children, ...props }, ref) => {
    const variantClass = styles[BADGE_VARIANTS[variant]];
    const sizeClass = styles[BADGE_SIZES[size]];

    return (
      <span
        ref={ref}
        className={clsx(styles["base"], variantClass, sizeClass)}
        {...props}
      >
        {size === "dot" && !children && (
          <span className={styles["srOnly"]}>{variant}</span>
        )}
        {children}
      </span>
    );
  },
);

DsBadge.displayName = "DsBadge";
