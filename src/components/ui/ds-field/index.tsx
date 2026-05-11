import { clsx } from "clsx";
import { type ReactNode, useId } from "react";

import { DsFieldContext, type DsFieldContextValue } from "./context";
import styles from "./styles.module.css";

/**
 * Props do composite `DsField`.
 *
 * Encapsula label, hint, mensagem de erro e binding de IDs/atributos ARIA
 * para um controle de formulário (DsInput, DsTextarea, DsSelect, etc.).
 */
export interface DsFieldProps {
  /** Texto do rótulo. Quando ausente, nenhum `<label>` é renderizado. */
  label?: ReactNode;
  /** Texto auxiliar exibido abaixo do controle (entra em `aria-describedby`). */
  hint?: ReactNode;
  /** Mensagem de erro. Quando definida, ativa `validationState="invalid"` no controle. */
  error?: ReactNode;
  /** Marca o campo como obrigatório (propaga `required` e adiciona indicador visual). */
  required?: boolean;
  /** Marca o campo como desabilitado (propaga `disabled`). */
  disabled?: boolean;
  /** Indicador visual quando o campo é opcional. */
  showOptionalMark?: boolean;
  /** ID base — se não informado, é gerado via `useId`. */
  id?: string;
  /** Conteúdo do campo (espera-se um controle compatível, ex.: `DsInput`). */
  children: ReactNode;
  /** Classes adicionais no wrapper. */
  className?: string;
}

interface FieldLabelProps {
  htmlFor: string;
  label: ReactNode;
  required: boolean | undefined;
  showOptionalMark: boolean | undefined;
}

function FieldLabel({
  htmlFor,
  label,
  required,
  showOptionalMark,
}: Readonly<FieldLabelProps>) {
  return (
    <label htmlFor={htmlFor} className={styles["label"]}>
      <span>{label}</span>
      {required ? (
        <span aria-hidden className={styles["required-mark"]}>
          *
        </span>
      ) : null}
      {!required && showOptionalMark ? (
        <span aria-hidden className={styles["optional-mark"]}>
          (opcional)
        </span>
      ) : null}
    </label>
  );
}

interface FieldMessageProps {
  error: ReactNode | undefined;
  hint: ReactNode | undefined;
  errorId: string | undefined;
  descriptionId: string | undefined;
}

function FieldMessage({
  error,
  hint,
  errorId,
  descriptionId,
}: Readonly<FieldMessageProps>) {
  if (error) {
    return (
      <p
        id={errorId}
        className={clsx(styles["message"], styles["message-error"])}
        role="alert"
      >
        {error}
      </p>
    );
  }
  if (hint) {
    return (
      <p
        id={descriptionId}
        className={clsx(styles["message"], styles["message-hint"])}
      >
        {hint}
      </p>
    );
  }
  return null;
}

function buildFieldContext(
  controlId: string,
  options: {
    descriptionId: string | undefined;
    errorId: string | undefined;
    hasError: boolean;
    required: boolean | undefined;
    disabled: boolean | undefined;
  },
): DsFieldContextValue {
  const value: DsFieldContextValue = { controlId };
  if (options.descriptionId) value.descriptionId = options.descriptionId;
  if (options.errorId) value.errorId = options.errorId;
  if (options.hasError) value.validationState = "invalid";
  if (options.required !== undefined) value.required = options.required;
  if (options.disabled !== undefined) value.disabled = options.disabled;
  return value;
}

/**
 * Composite que monta um campo de formulário acessível: rótulo + controle + hint/erro.
 *
 * Provê um Context que controles compatíveis (como `DsInput`) consomem para
 * receber automaticamente `id`, `aria-describedby`, `aria-invalid`, `required`
 * e `disabled` — sem necessidade de o consumidor amarrar manualmente.
 *
 * @example
 * <DsField label="Email" hint="Use seu email institucional">
 *   <DsInput type="email" />
 * </DsField>
 *
 * @example
 * <DsField label="Senha" error="Mínimo de 8 caracteres" required>
 *   <DsInput type="password" />
 * </DsField>
 */
export function DsField({
  label,
  hint,
  error,
  required,
  disabled,
  showOptionalMark,
  id,
  children,
  className,
}: Readonly<DsFieldProps>) {
  const generatedId = useId();
  const baseId = id ?? generatedId;
  const controlId = `${baseId}-control`;
  const descriptionId = hint ? `${baseId}-hint` : undefined;
  const errorId = error ? `${baseId}-error` : undefined;

  const contextValue = buildFieldContext(controlId, {
    descriptionId,
    errorId,
    hasError: Boolean(error),
    required,
    disabled,
  });

  return (
    <DsFieldContext value={contextValue}>
      <div
        className={clsx(
          styles["root"],
          disabled && styles["is-disabled"],
          className,
        )}
      >
        {label ? (
          <FieldLabel
            htmlFor={controlId}
            label={label}
            required={required}
            showOptionalMark={showOptionalMark}
          />
        ) : null}

        {children}

        <FieldMessage
          error={error}
          hint={hint}
          errorId={errorId}
          descriptionId={descriptionId}
        />
      </div>
    </DsFieldContext>
  );
}

export type { DsFieldContextValue } from "./context";
export { DsFieldContext, useDsFieldContext } from "./context";
