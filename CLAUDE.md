# Tatiane Vieira Frederico — Landing Page

Repo standalone da LP de Tatiane Vieira.

## Stack
- React 19 + Vite 6 + Tailwind v4 (CSS-first @theme) + Framer Motion v12
- Fontes: Libre Baskerville (display) + Nunito Sans (sans) via @fontsource

## Comandos
- `npm run dev` — dev server
- `npm run build` — build de producao
- `npm run preview` — preview do build

## Estrutura
- `src/site.config.ts` — dados centralizados do cliente (nome, WA, fotos)
- `src/index.css` — @theme com tokens de cor e fonte
- `src/main.tsx` — imports de @fontsource
- `src/components/` — 11 componentes com COPY inline (nao duplicar dados)

## Regras
- NUNCA modificar a estrutura JSX dos componentes
- NUNCA usar travessao ` — ` em texto visivel
- Para atualizar copy: editar apenas o objeto `const COPY` no topo de cada componente
- Para atualizar cores/fontes: editar apenas o bloco @theme em index.css
- Fotos: substituir `public/foto-hero.jpg` e `public/foto-about.jpg` pelas fotos reais
