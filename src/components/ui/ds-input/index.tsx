import { clsx } from "clsx";
import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";

import { useDsFieldContext } from "../ds-field/context";
import {
  INPUT_SIZES,
  type InputSize,
  VALIDATION_STATES,
  type ValidationState,
} from "./props-and-variants";
import styles from "./styles.module.css";

/**
 * Props do primitive `DsInput`.
 *
 * O componente é um *primitive* de baixo nível: não renderiza label/hint/erro.
 * Para isso, envolva-o em `DsField`, que cuida do binding ARIA automaticamente.
 */
export interface DsInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Tamanho visual do campo. */
  inputSize?: InputSize;
  /** Estado de validação semântico. Reflete em `aria-invalid` e na borda. */
  validationState?: ValidationState;
  /**
   * Conteúdo no início do campo (ícone, prefixo, ação).
   *
   * **A11y:** o wrapper NÃO aplica `aria-hidden` automaticamente.
   * - Ícones decorativos: passe `aria-hidden` no próprio ícone.
   * - Ações interativas (botões): garanta `aria-label` no controle.
   */
  startSlot?: ReactNode;
  /**
   * Conteúdo no fim do campo (ícone, ação, password toggle, clear button).
   *
   * **A11y:** mesmas regras de `startSlot` — o consumidor decide se o conteúdo
   * é decorativo ou interativo.
   */
  endSlot?: ReactNode;
  /** Classe extra aplicada no wrapper externo. */
  wrapperClassName?: string;
}

/**
 * Campo de texto baixo nível. Usa `DsField` para rótulo, descrição e erro.
 *
 * @example
 * <DsInput placeholder="Buscar" />
 *
 * @example
 * <DsField label="Email" hint="Use seu email institucional">
 *   <DsInput type="email" />
 * </DsField>
 */
export const DsInput = forwardRef<HTMLInputElement, DsInputProps>(
  function DsInput(
    {
      inputSize = "md",
      validationState,
      startSlot,
      endSlot,
      wrapperClassName,
      className,
      id,
      disabled,
      readOnly,
      required,
      "aria-invalid": ariaInvalid,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref: Ref<HTMLInputElement>,
  ) {
    const fieldCtx = useDsFieldContext();

    const finalId = id ?? fieldCtx?.controlId;
    const finalRequired = required ?? fieldCtx?.required;
    const finalDisabled = disabled ?? fieldCtx?.disabled;
    const finalValidationState = validationState ?? fieldCtx?.validationState;

    const describedByIds = [
      ariaDescribedBy,
      fieldCtx?.descriptionId,
      fieldCtx?.errorId,
    ]
      .filter(Boolean)
      .join(" ");
    const finalDescribedBy = describedByIds.length > 0 ? describedByIds : undefined;

    const isInvalid = finalValidationState === "invalid";
    const finalAriaInvalid = ariaInvalid ?? (isInvalid ? true : undefined);

    const sizeClass = styles[INPUT_SIZES[inputSize]];
    const validationClass = finalValidationState
      ? styles[VALIDATION_STATES[finalValidationState]]
      : undefined;

    return (
      <div
        className={clsx(
          styles["root"],
          sizeClass,
          validationClass,
          finalDisabled && styles["is-disabled"],
          readOnly && styles["is-readonly"],
          wrapperClassName,
        )}
        data-validation-state={finalValidationState}
      >
        {startSlot ? (
          <span className={styles["slot"]} data-position="start">
            {startSlot}
          </span>
        ) : null}

        <input
          ref={ref}
          id={finalId}
          data-slot="input"
          className={clsx(styles["input"], className)}
          disabled={finalDisabled}
          readOnly={readOnly}
          required={finalRequired}
          aria-invalid={finalAriaInvalid}
          aria-describedby={finalDescribedBy}
          {...props}
        />

        {endSlot ? (
          <span className={styles["slot"]} data-position="end">
            {endSlot}
          </span>
        ) : null}
      </div>
    );
  },
);

export type { InputSize, ValidationState } from "./props-and-variants";
