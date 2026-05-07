# Contribuindo para o CultBR Design System

![Banner do Projeto](/public/docs/banner.png)

🎉 Obrigado por dedicar seu tempo para contribuir! Toda contribuição é bem-vinda.
Este repositório é o Design System institucional do ecossistema CultBR, focado em reutilização de componentes entre projetos frontend, com arquitetura simples, escalável e profissional.

## 📑 Sumário

- [Encontrou um bug?](#-encontrou-um-bug)
- [Corrigiu um bug?](#-corrigiu-um-bug)
- [Alterações cosméticas (formatação, espaços, redação)](#-alterações-cosméticas-formatação-espaços-redação)
- [Quer adicionar uma funcionalidade ou melhoria?](#-quer-adicionar-uma-funcionalidade-ou-melhoria)
- [Diretrizes de títulos e nomenclatura](#-diretrizes-de-títulos-e-nomenclatura)
- [Notas finais](#-notas-finais)

## 🐞 Encontrou um bug?

Antes de abrir uma nova issue, por favor:

- Verifique se o bug já foi reportado na  
  [Issues](https://github.com/cultbr/cultbr-design-system/issues).

Se não encontrar nada relacionado:

- Abra uma nova issue e inclua:
  - Título e descrição claros
  - Passos para reproduzir o problema
  - Comportamento esperado vs. atual
  - Capturas de tela, imagens ou exemplos se possível

Quanto mais contexto você fornecer, mais fácil será ajudar.

## 🔧 Corrigiu um bug?

Ótimo!  
Para enviar sua correção:

- Abra um Pull Request com uma descrição clara de:
  - O que foi corrigido
  - Por que foi corrigido
- Vincule a issue relacionada se existir

PRs pequenos e focados são sempre mais fáceis de revisar 🙂

## 🎨 Alterações cosméticas (formatação, espaços, redação)

Melhorias em formatação, redação ou estrutura são bem-vindas, desde que:

- Melhorem a legibilidade
- Mantenham o Design System simples e útil
- Sigam os padrões de código do projeto (prefixo `Ds`, CSS Modules, CSS Variables)

Sinta-se à vontade para abrir um PR para esses tipos de alterações.

## ✨ Quer adicionar uma funcionalidade ou melhoria?

Antes de escrever código:

- Abra uma issue de **Solicitação de Funcionalidade** e descreva sua ideia
- Aguarde feedback antes de começar a implementação
- Certifique-se de que a funcionalidade segue as restrições do projeto:
  - Sem overengineering
  - Sem CLI estilo shadcn
  - Sem monorepo
  - Sem temas complexos
  - Foco em arquitetura sólida e simplicidade

Isso ajuda a manter o Design System consistente e evita esforço desperdiçado.

## 🏷️ Diretrizes de títulos e nomenclatura

Para manter issues e pull requests organizados, use os seguintes prefixos nos títulos:

### Prefixos para issues e PRs

- **feat:** nova funcionalidade ou melhoria  
  _Exemplo: `feat: adicionar componente DsInput`_

- **fix:** correção de bug  
  _Exemplo: `fix: ajuste de contraste no DsButton`_

- **docs:** alterações apenas em documentação  
  _Exemplo: `docs: atualizar README com novos tokens`_

- **style:** formatação, espaços ou alterações de redação  
  _Exemplo: `style: ajuste de espaçamento em seções do README`_

- **chore:** manutenção ou alterações de ferramentas  
  _Exemplo: `chore: atualizar estrutura do repositório`_

### Padrões de código

Ao adicionar componentes ou tokens, siga:

- Prefixo `Ds` em todos os componentes
- Pastas individuais para cada componente
- CSS Modules para isolamento de estilo
- CSS Variables para tokens de design
- Imports centralizados via `src/index.ts`

Isso ajuda os mantenedores a entenderem rapidamente o propósito de cada alteração.

## ❤️ Notas finais

- Seja respeitoso e construtivo
- Mantenha as coisas simples e práticas
- Se tiver dúvidas sobre algo, sinta-se à vontade para perguntar
- Priorize qualidade de código e arquitetura em vez de quantidade de componentes

Mais uma vez, obrigado por contribuir!
