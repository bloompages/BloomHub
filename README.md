# BloomHub — Landing Page

Landing page da **BloomHub** (Agentes de IA · Landing Pages · CRM), focada em gerar pedidos de orçamento.

Stack: React 19 + Vite, Tailwind CSS 4 e Framer Motion.

## Rodando

```bash
npm install
npm run dev
```

## Variáveis de ambiente (`.env`)

Copie `.env.example` para `.env` (`cp .env.example .env`) e preencha. O `.env` não vai para o Git.

| Variável            | Uso                                                   |
| ------------------- | ----------------------------------------------------- |
| `VITE_EMAIL`        | E-mail que recebe o formulário (via FormSubmit)       |
| `VITE_WHATSAPP_URL` | Link `wa.me/<numero>` usado nos botões de orçamento   |
| `VITE_INSTAGRAM`    | Perfil do Instagram (@bloomhub.io)                    |

## Onde editar

- Textos, soluções, FAQ e etapas: `src/data/siteData.js`
- Logo (SVG animado): `src/components/brand/BloomLogo.jsx`
- Seções: `src/components/sections/`
