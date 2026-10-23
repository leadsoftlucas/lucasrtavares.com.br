# 🌐 lucasrtavares.com.br

Site pessoal de **Lucas Resende Tavares**, Sales Engineer e Arquiteto de Soluções na [RavenDB](https://ravendb.net). Este site é pessoal e **não** é um canal oficial da RavenDB.

Construído com **[Astro](https://astro.build)**: HTML gerado no build (nada de conteúdo que só aparece depois do JavaScript), PT em `/` e EN em `/en/`, componentes, CSS com tokens e JavaScript só onde precisa.

> **Estado:** branch `redesign/astro`. O site de produção continua sendo a `master` antiga (tag `site-legacy-2026-10-24`) até o dia do corte. Nada aqui publica sozinho.

## ▶️ Rodar localmente

Requer Node 22.23+ (testado no 24) e npm.

```bash
npm install
npm run dev        # http://localhost:4321/
npm run verify     # build + todos os checks
npm run preview    # serve o build em http://localhost:4321/
```

## 🗂️ Estrutura

```text
src/
  config.ts            variáveis PUBLIC_* e links de WhatsApp (nenhum segredo)
  i18n/                textos da home e do layout, PT e EN (en.ts é tipado como pt.ts)
  content/             páginas História, Provas e Imprensa, PT e EN
  data/                pacotes NuGet, eventos, vídeos, artigos, clientes, depoimentos, JSON-LD, links
  components/          Hero, LeadCards, Timeline, OpenSource, Videos, PageHero, CtaCards...
  layouts/Base.astro   <head> (GTM, GA4, hreflang, Open Graph), cabeçalho, rodapé, banner LGPD
  pages/               rotas (/, /en/, /historia/, /en/history/, ...) + robots.txt, sitemap.xml, llms.txt, 404
  scripts/             módulos pequenos (idioma, cookies, vídeo, filtro de pacotes, progresso de leitura...)
  styles/              tokens.css e global.css
public/                assets, CNAME, .nojekyll
design/                fontes de arte (ex.: cosmic-bg.svg, que gerou o cosmic-bg.webp)
legacy/                o site antigo (index.html + runtime), só para consulta
scripts/               checks do build (abaixo)
```

## 🔐 Variáveis de ambiente (públicas, não são segredos)

Copie `.env.example` para `.env`. No GitHub, use *Settings → Secrets and variables → Actions → Variables*.

| Variável | Para quê |
|---|---|
| `PUBLIC_SITE_URL` | domínio (canonical, sitemap, Open Graph) |
| `PUBLIC_GTM_ID`, `PUBLIC_GA_ID` | Tag Manager e GA4 (só carregam no build de produção) |
| `PUBLIC_WHATSAPP_RAVENDB` | número dos botões RavenDB |
| `PUBLIC_WHATSAPP_LEADSOFT` | **só** a seção LeadSoft |
| `PUBLIC_EMAIL_RAVENDB`, `PUBLIC_EMAIL_PERSONAL` | e-mails |
| `PUBLIC_SHOW_G1` | `true` mostra o trecho "A conversa que mudou tudo" da página História. **Padrão: desligado** (só ligar depois do alinhamento com a RavenDB) |

O número pessoal do Lucas **nunca** entra neste repositório.

## ✅ Checks

`npm run verify` faz o build e roda:

| Comando | O que confere |
|---|---|
| `check:i18n` | PT e EN com as mesmas chaves, sem texto vazio, listas com o tamanho dos dados |
| `check:links` | links e recursos internos existem, 1 H1, `lang`, `canonical`, JSON-LD válido, imagens com `alt` |
| `check:brand` | todo "LeadSoft" no texto leva a https://leadsoft.inf.br |
| `check:seo` | `robots.txt`, `sitemap.xml` (8 URLs com hreflang) e `llms.txt` coerentes com as páginas |
| `check:placeholders` | lista os marcadores pendentes no código (`[adicionar]`, `[LINK a informar]`); **em produção eles são removidos do HTML** (`PUBLIC_SHOW_TODO=true` os mostra); `--strict` falha se houver |

**Lighthouse CI** (`npx @lhci/cli autorun`, configurado em `lighthouserc.json`): as 8 páginas, 3 execuções cada, mínimo de **0,98** em desempenho, acessibilidade, boas práticas e SEO.

## 🚀 Deploy

`.github/workflows/deploy.yml` constrói, roda os checks e o Lighthouse CI. **Só em push na `master`** ele publica no GitHub Pages. Isso passa a valer quando, no dia do corte, *Settings → Pages → Source* for trocado para **GitHub Actions**. Rollback: voltar a `master` para a tag `site-legacy-2026-10-24`.

## 📝 Regras de conteúdo

Os fatos e as decisões do Lucas estão no vault (`Content/99 Gestão/Fatos Novos e Decisões`). Em resumo: sem inventar fatos (usar `[adicionar]`), "demonstrações" em vez de "demos" em português, nunca "exclusivamente RavenDB", nenhuma foto de terceiros sem autorização, sem telefone pessoal.

## 📄 Licença

MIT. Ver [LICENSE](LICENSE).
