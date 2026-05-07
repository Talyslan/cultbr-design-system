import type { ReactNode } from "react";

import styles from "./styles.module.css";

export type DsTypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "caption"
  | "overline"
  | "micro"
  | "display-d1"
  | "display-d2"
  | "display-d3";

export type DsTypographyColor =
  | "primary"
  | "secondary"
  | "muted"
  | "brand"
  | "danger"
  | "success"
  | "warning"
  | "inverse";

export type DsTypographyWeight = "regular" | "medium" | "semibold" | "bold";

export interface DsTypographyProps {
  variant?: DsTypographyVariant;
  color?: DsTypographyColor;
  weight?: DsTypographyWeight;
  children?: ReactNode;
  className?: string;
}

function DsTypography({
  variant = "body-md",
  color = "primary",
  weight,
  children,
  className,
}: Readonly<DsTypographyProps>) {
  const variantClass = ((): string | undefined => {
    switch (variant) {
      case "h1":
        return styles["h1"];
      case "h2":
        return styles["h2"];
      case "h3":
        return styles["h3"];
      case "h4":
        return styles["h4"];
      case "h5":
        return styles["h5"];
      case "h6":
        return styles["h6"];
      case "body-lg":
        return styles["bodyLg"];
      case "body-md":
        return styles["bodyMd"];
      case "body-sm":
        return styles["bodySm"];
      case "caption":
        return styles["caption"];
      case "overline":
        return styles["overline"];
      case "micro":
        return styles["micro"];
      case "display-d1":
        return styles["displayD1"];
      case "display-d2":
        return styles["displayD2"];
      case "display-d3":
        return styles["displayD3"];
      default:
        return styles["bodyMd"];
    }
  })();

  const weightClass = ((): string | undefined => {
    if (!weight) return "";
    switch (weight) {
      case "regular":
        return styles["weightRegular"];
      case "medium":
        return styles["weightMedium"];
      case "semibold":
        return styles["weightSemibold"];
      case "bold":
        return styles["weightBold"];
      default:
        return "";
    }
  })();

  const colorClass = ((): string | undefined => {
    switch (color) {
      case "primary":
        return styles["colorPrimary"];
      case "secondary":
        return styles["colorSecondary"];
      case "muted":
        return styles["colorMuted"];
      case "brand":
        return styles["colorBrand"];
      case "danger":
        return styles["colorDanger"];
      case "success":
        return styles["colorSuccess"];
      case "warning":
        return styles["colorWarning"];
      case "inverse":
        return styles["colorInverse"];
      default:
        return "";
    }
  })();

  const combinedClass = `${styles["base"]} ${variantClass} ${weightClass} ${colorClass} ${className ?? ""}`;

  switch (variant) {
    case "h1":
    case "display-d1":
    case "display-d2":
    case "display-d3":
      return (
        <h1
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </h6>
      );
    default:
      return (
        <p
          className={combinedClass}
          data-variant={variant}
          data-color={color}
          data-weight={weight}
        >
          {children}
        </p>
      );
  }
}

export { DsTypography };
