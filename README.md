# lucasrtavares.com.br

Site pessoal de **Lucas Resende Tavares**, Sales Engineer e Arquiteto de Soluções na [RavenDB](https://ravendb.net). Este site é pessoal e **não** é um canal oficial da RavenDB.

Feito com [Astro](https://astro.build): HTML gerado no build, português em `/` e inglês em `/en/`, componentes, CSS com tokens e JavaScript apenas onde é necessário.

## Rodar localmente

Requer Node 22.23+ e npm.

```bash
npm install
npm run dev        # http://localhost:4321/
npm run verify     # build + checks
npm run preview    # serve o build
```

## Estrutura

```text
src/
  config.ts            variáveis PUBLIC_* e links de WhatsApp
  i18n/                textos da home e do layout (PT e EN)
  content/             páginas História, Provas e Imprensa (PT e EN)
  data/                pacotes NuGet, eventos, vídeos, artigos, clientes, depoimentos, JSON-LD
  components/          seções e blocos reutilizáveis
  layouts/Base.astro   <head>, cabeçalho, rodapé e aviso de cookies
  pages/               rotas, robots.txt, sitemap.xml, llms.txt e 404
  scripts/             módulos pequenos de JavaScript
  styles/              tokens e estilos globais
public/                imagens, CNAME, .nojekyll
design/                fontes de arte
scripts/               verificações do build
```

## Variáveis de ambiente

Públicas (vão para o HTML), não são segredos. Copie `.env.example` para `.env`; no GitHub, use *Settings → Secrets and variables → Actions → Variables*.

| Variável | Para quê |
|---|---|
| `PUBLIC_SITE_URL` | domínio (canonical, sitemap, Open Graph) |
| `PUBLIC_GTM_ID`, `PUBLIC_GA_ID` | Tag Manager e GA4 (só carregam no build de produção) |
| `PUBLIC_WHATSAPP_RAVENDB`, `PUBLIC_WHATSAPP_LEADSOFT` | números dos botões de WhatsApp |
| `PUBLIC_EMAIL_RAVENDB`, `PUBLIC_EMAIL_PERSONAL` | e-mails de contato |
| `PUBLIC_SHOW_FULL_STORY` | capítulo completo da página História (padrão: ligado; `false` oculta) |

## Verificações

`npm run verify` faz o build e confere idiomas (PT e EN com as mesmas chaves), links internos, H1 único, `canonical`, JSON-LD, `robots.txt`, `sitemap.xml` e `llms.txt`. O Lighthouse CI (`lighthouserc.json`) mede as 8 páginas.

## Deploy

`.github/workflows/deploy.yml` constrói, verifica e roda o Lighthouse CI; em push na `master`, publica no GitHub Pages.

## Licença

MIT. Ver [LICENSE](LICENSE).
