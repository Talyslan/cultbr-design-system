import { createContext, useContext } from "react";

import type { ValidationState } from "../ds-input/props-and-variants";

export interface DsFieldContextValue {
  /** ID do controle (input/select/textarea) gerado pelo DsField. */
  controlId: string;
  /** ID do hint (se existir). Vai entrar no aria-describedby. */
  descriptionId?: string;
  /** ID da mensagem de erro (se existir). Vai entrar no aria-describedby. */
  errorId?: string;
  /** Estado de validação derivado de `error`. */
  validationState?: ValidationState;
  /** Campo obrigatório (propaga para o controle). */
  required?: boolean;
  /** Campo desabilitado (propaga para o controle). */
  disabled?: boolean;
}

export const DsFieldContext = createContext<DsFieldContextValue | null>(null);

export function useDsFieldContext(): DsFieldContextValue | null {
  return useContext(DsFieldContext);
}
