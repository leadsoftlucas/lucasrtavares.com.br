<div align="center">

<img src="design/readme-cover.svg" alt="lucasrtavares.com.br: o site pessoal de Lucas Resende Tavares, feito com Astro" width="100%">

<br>

### 🌐 O código por trás de [lucasrtavares.com.br](https://lucasrtavares.com.br)
**Um site de conteúdo que se comporta como um site de conteúdo: HTML pronto no build, duas línguas, zero peso à toa.**

*Primeiro o dado, depois o código.*

<br>

[![Site no ar](https://img.shields.io/badge/no_ar-lucasrtavares.com.br-0C2FA5?style=for-the-badge&logo=googlechrome&logoColor=white)](https://lucasrtavares.com.br)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node](https://img.shields.io/badge/Node-24-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com)

![Desempenho](https://img.shields.io/badge/Desempenho-100-0CCE6B?style=flat-square&logo=lighthouse&logoColor=white)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-100-0CCE6B?style=flat-square&logo=lighthouse&logoColor=white)
![Boas práticas](https://img.shields.io/badge/Boas_práticas-100-0CCE6B?style=flat-square&logo=lighthouse&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-100-0CCE6B?style=flat-square&logo=lighthouse&logoColor=white)
![Licença](https://img.shields.io/badge/licença-MIT-blue?style=flat-square)

🇧🇷 Português logo abaixo · 🇺🇸 [English summary](#-english)

</div>

---

## 🐦‍⬛ O que é isso?

O site pessoal de **Lucas Resende Tavares**, Sales Engineer e Arquiteto de Soluções na [RavenDB](https://ravendb.net). Ele conta a história, mostra as provas (casos, código e palestras) e leva o visitante a uma conversa por WhatsApp ou e-mail. Sem formulário, sem backend, sem banco de dados no meio do caminho. 😄

> [!NOTE]
> Este site é pessoal e **não** é um canal oficial da RavenDB.

| | |
|---|---|
| 🗣️ **Duas línguas, duas URLs** | Português em `/` e inglês em `/en/`, cada um com `canonical` e `hreflang` próprios |
| 🧱 **HTML pronto no build** | Nada de texto que só aparece depois do JavaScript: o que o Google e as IAs leem é o que você vê |
| 🤖 **Feito para ser lido por IA** | `llms.txt` e `sitemap.xml` gerados a partir dos mesmos dados das páginas, então não divergem |
| ⚡ **Leve** | JavaScript só onde precisa (idioma, vídeo, filtro, progresso de leitura) e fotos em WebP |
| 🧪 **Testado a cada mudança** | Idiomas, links, JSON-LD, SEO e Lighthouse rodam no CI antes de qualquer deploy |

---

## 🧰 Stack

<div align="center">

![Astro](https://img.shields.io/badge/-Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![Lighthouse](https://img.shields.io/badge/-Lighthouse_CI-F44B21?style=flat-square&logo=lighthouse&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/-GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)
![Google Tag Manager](https://img.shields.io/badge/-Tag_Manager-246FDB?style=flat-square&logo=googletagmanager&logoColor=white)
![Schema.org](https://img.shields.io/badge/-JSON--LD-003A70?style=flat-square&logo=schemadotorg&logoColor=white)

</div>

**Por que Astro e não React?** É um site de conteúdo (4 páginas × 2 idiomas), não uma aplicação. O ganho está em renderizar no build, não em reatividade no navegador. Se o framework sumir um dia, o HTML continua funcionando. 🪶

---

## 🗺️ Como tudo se encaixa

```mermaid
flowchart LR
    subgraph FONTES["📝 Fontes"]
        I["i18n<br/>textos PT e EN"]
        C["content<br/>História, Provas, Imprensa"]
        D["data<br/>pacotes, eventos, vídeos, clientes"]
    end

    FONTES --> A["⚙️ Astro build"]

    A --> H1["🇧🇷 HTML em /"]
    A --> H2["🇺🇸 HTML em /en/"]
    A --> S["🔎 robots, sitemap<br/>e llms.txt"]
    A --> E["🧯 404 temática"]

    H1 --> G["🤖 GitHub Actions"]
    H2 --> G
    S --> G
    E --> G

    G --> P["🌐 GitHub Pages"]
    P --> W["lucasrtavares.com.br"]

    style A fill:#BC52EE,color:#fff,stroke:#BC52EE
    style G fill:#2088FF,color:#fff,stroke:#2088FF
    style W fill:#0C2FA5,color:#fff,stroke:#0C2FA5
```

### 🚦 O que acontece a cada push

```mermaid
flowchart TD
    PUSH(["⬆️ push ou pull request"]) --> BUILD["🏗️ npm run build"]
    BUILD --> I18N{"🈯 PT e EN<br/>com as mesmas chaves?"}
    I18N -- sim --> LINKS{"🔗 links, H1, canonical<br/>e JSON-LD válidos?"}
    I18N -- não --> FAIL(["❌ falha"])
    LINKS -- sim --> BRAND{"🏷️ nomes de marca<br/>com link?"}
    LINKS -- não --> FAIL
    BRAND -- sim --> SEO{"🔎 robots, sitemap<br/>e llms.txt coerentes?"}
    BRAND -- não --> FAIL
    SEO -- sim --> LH{"💡 Lighthouse CI<br/>8 páginas × 3 execuções"}
    SEO -- não --> FAIL
    LH -- passou --> MASTER{"🌿 branch master?"}
    LH -- abaixo do mínimo --> FAIL
    MASTER -- sim --> DEPLOY(["🚀 deploy no Pages"])
    MASTER -- não --> OK(["✅ só validado"])

    style DEPLOY fill:#0CCE6B,color:#fff,stroke:#0CCE6B
    style FAIL fill:#E5484D,color:#fff,stroke:#E5484D
    style OK fill:#388EE9,color:#fff,stroke:#388EE9
```

### 📍 O mapa do site

```mermaid
flowchart LR
    ROOT(("λ")) --> PT["🇧🇷 /"]
    ROOT --> EN["🇺🇸 /en/"]

    PT --> PT1["/historia/"]
    PT --> PT2["/provas/"]
    PT --> PT3["/imprensa/"]

    EN --> EN1["/en/history/"]
    EN --> EN2["/en/proof/"]
    EN --> EN3["/en/press/"]

    ROOT -.-> X1["robots.txt"]
    ROOT -.-> X2["sitemap.xml"]
    ROOT -.-> X3["llms.txt"]
    ROOT -.-> X4["404.html 🐦‍⬛"]
```

### 🧬 Como o site evoluiu

```mermaid
timeline
    title Do HTML único ao Astro
    Antes : Uma página HTML com runtime próprio
          : Estilos inline e idioma só no navegador
    Base : Astro, tokens de design e layout
         : GTM, GA4 e aviso de cookies por variável
    Conteúdo : Textos PT e EN em módulos tipados
             : Home em componentes com a mesma aparência
    Páginas : História, Provas e Imprensa em duas línguas
            : JSON-LD e hreflang por página
    Qualidade : robots, sitemap e llms.txt gerados
              : Lighthouse CI e checks no deploy
```

---

## ▶️ Rodando localmente

Requer **Node 22.23+** (testado no 24) e **npm**.

```bash
npm install
npm run dev        # http://localhost:4321/
```

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento com recarga ao vivo |
| `npm run build` | gera o site estático em `dist/` |
| `npm run preview` | serve o build como ele vai para produção |
| `npm run verify` | build **+** todos os checks (abaixo) |

---

## 🗂️ Estrutura

```text
src/
├─ config.ts            variáveis PUBLIC_* e links de WhatsApp
├─ i18n/                textos da home e do layout, PT e EN (en é tipado como pt)
├─ content/             páginas História, Provas e Imprensa, PT e EN
├─ data/                pacotes NuGet, eventos, vídeos, artigos, clientes, depoimentos, JSON-LD
├─ components/          Hero, LeadCards, Timeline, OpenSource, Videos, PageHero, CtaCards…
├─ layouts/Base.astro   <head>, cabeçalho, rodapé e aviso de cookies
├─ pages/               rotas + robots.txt, sitemap.xml, llms.txt e 404
├─ scripts/             módulos pequenos de JavaScript
└─ styles/              tokens e estilos globais
public/                 imagens, CNAME, .nojekyll
design/                 fontes de arte (cosmic-bg.svg, capa deste README)
scripts/                verificações do build
```

---

## 🔐 Variáveis de ambiente

São **públicas** (vão para o HTML), então não há segredo aqui. Copie `.env.example` para `.env`; no GitHub, use *Settings → Secrets and variables → Actions → Variables*.

| Variável | Para quê |
|---|---|
| `PUBLIC_SITE_URL` | domínio (canonical, sitemap, Open Graph) |
| `PUBLIC_GTM_ID` · `PUBLIC_GA_ID` | Tag Manager e GA4 (só carregam no build de produção) |
| `PUBLIC_WHATSAPP_RAVENDB` · `PUBLIC_WHATSAPP_LEADSOFT` | números dos botões de WhatsApp |
| `PUBLIC_EMAIL_RAVENDB` · `PUBLIC_EMAIL_PERSONAL` | e-mails de contato |
| `PUBLIC_SHOW_FULL_STORY` | capítulo completo da página História (padrão: ligado; `false` oculta) |

---

## ✅ Verificações

`npm run verify` é o botão do "está tudo certo?":

| Check | O que confere |
|---|---|
| 🈯 `check:i18n` | PT e EN com as mesmas chaves, sem texto vazio e listas do tamanho dos dados |
| 🔗 `check:links` | links e recursos internos existem, 1 H1, `lang`, `canonical`, JSON-LD válido, imagens com `alt` |
| 🏷️ `check:brand` | todo "LeadSoft" no texto leva ao site da empresa |
| 🔎 `check:seo` | `robots.txt`, `sitemap.xml` (8 URLs com hreflang) e `llms.txt` batem com as páginas geradas |
| 💡 Lighthouse CI | as 8 páginas, 3 execuções cada, mínimo de **0,98** em acessibilidade, boas práticas e SEO, e **0,90** em desempenho no runner do GitHub (localmente dá 100) |

---

## 🎨 Detalhes de que eu gosto

- 🐦‍⬛ **A página 404 fala RQL**: mostra uma consulta `from Pages where Path = '/o-que-voce-digitou'` com *0 resultados*, sugere a página mais parecida e conclui que *até o olho do corvo falha quando a consulta aponta pro lugar errado*.
- 🌍 **O cartão "Base" tem um mapa-múndi de pontos** com Curitiba pulsando e rotas animadas para as Américas, a Europa e a Oceania. Gerado de dados geográficos abertos e salvo como um SVG de 18 KB.
- 🇧🇷🇺🇸 **O cartão "Idiomas" mistura as duas bandeiras**, desenhadas à mão em SVG.
- 📈 **Barra de progresso de leitura** no cabeçalho, em CSS e 20 linhas de script.
- 🎵 **Player do Spotify só carrega no clique** (nada de requisição de terceiros antes disso).
- 🍪 **Aviso de cookies (LGPD)** que respeita o idioma da página.
- 🧭 **Redirecionamento de idioma por preferência**, só no navegador, para nunca atrapalhar um rastreador.

---

## 🚀 Deploy

`.github/workflows/deploy.yml` constrói, verifica e roda o Lighthouse CI. Em **push na `master`**, publica no GitHub Pages; em qualquer outra branch ou pull request, só valida.

---

## 📬 Contato

| | |
|---|---|
| 🌐 **Site** | [lucasrtavares.com.br](https://lucasrtavares.com.br) |
| 💼 **LinkedIn** | [in/lucasrtavares](https://www.linkedin.com/in/lucasrtavares/) |
| 🎬 **YouTube** | [@LucasResendeTavares](https://www.youtube.com/@LucasResendeTavares) |
| 📦 **NuGet** | [lucastavares](https://www.nuget.org/profiles/lucastavares) |
| ✉️ **E-mail** | [lucas.tavares@ravendb.net](mailto:lucas.tavares@ravendb.net) · [eu@lucasrtavares.com.br](mailto:eu@lucasrtavares.com.br) |

<sub>Licença **MIT**. Ver [LICENSE](LICENSE).</sub>

---

<a id="-english"></a>

<details>
<summary><h2>🇺🇸 English</h2></summary>

<br>

The source code of **[lucasrtavares.com.br](https://lucasrtavares.com.br)**, the personal site of **Lucas Resende Tavares**, Sales Engineer and Solutions Architect at [RavenDB](https://ravendb.net). It is a personal site, **not** an official RavenDB channel.

- 🗣️ **Two languages, two URLs:** Portuguese at `/`, English at `/en/`, each with its own `canonical` and `hreflang`.
- 🧱 **Pre-rendered HTML** built with **Astro** and **TypeScript**: what crawlers and AI assistants read is what you see.
- 🤖 **AI-readable:** `llms.txt`, `sitemap.xml` and JSON-LD are generated from the same data as the pages.
- 🧪 **Tested on every push** with GitHub Actions: i18n parity, links, SEO and **Lighthouse CI** (100 / 100 / 100 / 100 on all 8 pages, locally) before anything is deployed to GitHub Pages.
- 🐦‍⬛ **A database-themed 404:** it "runs" an RQL query, finds nothing and suggests the closest page.

```bash
npm install
npm run dev       # http://localhost:4321/
npm run verify    # build + all checks
```

</details>
