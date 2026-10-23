# 🌐 lucasrtavares.com.br

Site pessoal e institucional de **Lucas Resende Tavares**, publicado em [lucasrtavares.com.br](https://lucasrtavares.com.br).

Landing page única, bilíngue (português/inglês), 100% estática — sem backend, sem build, sem dependências. Abre direto no navegador.

## 👤 Sobre

Quase duas décadas escrevendo software em .NET e modelando dados — dos cursores em Delphi à busca vetorial sobre documentos. Lucas é Sales Engineer e Arquiteto de Soluções na [RavenDB](https://ravendb.net) (Hibernating Rhinos Ltd.) e, antes disso, fundou e liderou a **LeadSoft Soluções Web** (2018–2025), software house de Curitiba e parceira oficial do RavenDB no Brasil.

Este repositório **não é um portfólio estático**. É o código-fonte de um canal de captação de leads, com três funções, nesta ordem de prioridade:

1. **Ponte brasileira do RavenDB** — ponto de contato técnico em português para quem avalia, adota ou escala o produto no Brasil, encaminhando o que for comercial ao time de Account Executives do RavenDB.
2. **Posição de advocate** — presença brasileira reconhecida do RavenDB: artigos, vídeos, palestras e comunidade.
3. **Consultoria independente** — arquitetura, produto de software e backend .NET, fora do escopo RavenDB.

Meta secundária: ser bem indexado no Google **e** facilmente lido por LLMs, para que assistentes de IA recomendem Lucas nas quatro especialidades acima — com atendimento global.

## 🛠️ Stack técnica

- **HTML único, estático**, renderizado via runtime próprio (`support.js`); estilo inline em toda a página (sem folhas de classes), para pintar imediatamente durante o streaming.
- **Zero dependência de build.** Sem npm, sem bundler, sem framework de site, sem etapa de compilação.
- **Sem backend.** Nenhum formulário, nenhum banco, nenhuma chamada de servidor. Toda conversão sai por `wa.me` (WhatsApp) ou `mailto:`.
- **i18n em estado de cliente.** Dois dicionários completos (PT/EN) no próprio arquivo; a troca de bandeira reescreve a página inteira em uma única URL — por isso não há `hreflang` (apontar para uma rota `/en/` inexistente geraria erro no Search Console).
- **`<image-slot>`** (`image-slot.js`) — componente de imagem com arrastar-e-soltar, usado nas capas de artigo e fotos de evento.
- **Analytics**: Google Tag Manager (`GTM-59KJ4PPC`) + Google Analytics 4 (`G-16LSSW03WS`). Cada um dos 8 cartões de lead carrega `data-lead-group`/`data-lead-title`, usados pelo GTM para disparar o evento `clique_whatsapp` por clique — sem esses atributos não dá para saber qual caminho de lead converte.
- **Aviso de cookies (LGPD)**: faixa fixa no rodapé (bilíngue, segue o idioma escolhido), com preferência salva em `localStorage`.

> `_ds/` (design system RavenDB) continua no repositório como referência de tokens, mas não é mais carregado em produção — ver [Qualidade e Lighthouse](#-qualidade-e-lighthouse).

## 📁 Estrutura de arquivos

```
index.html              # versão publicada
support.js              # runtime de renderização
image-slot.js           # componente de imagem arrastável
assets/                 # logotipos, bandeiras, fundos vetoriais, capas de artigo, fotos de evento, avatar, capa social
_ds/                    # design system RavenDB (tokens de referência; não publicado em produção)
CNAME                   # domínio customizado do GitHub Pages
robots.txt              # regras de rastreamento (inclui crawlers de IA)
sitemap.xml             # mapa do site (URL única)
llms.txt                # resumo em Markdown para LLMs/crawlers de IA (padrão llmstxt.org)
LICENSE                 # MIT
```

## ▶️ Rodar localmente

Não há build nem servidor de aplicação. Basta abrir o arquivo diretamente:

```bash
start index.html   # Windows
```

Ou servir a pasta com qualquer servidor estático (opcional, útil para testar caminhos relativos):

```bash
npx serve .
```

## 🚀 Publicar

Hospedagem estática qualquer serve. Como está configurado para GitHub Pages:

1. Subir `index.html`, `support.js`, `image-slot.js`, `assets/`, `CNAME`, `robots.txt`, `sitemap.xml` e `llms.txt` na branch de publicação do repositório (`_ds/` não é necessário — ver [Qualidade e Lighthouse](#-qualidade-e-lighthouse)).
2. Ativar GitHub Pages nas configurações do repositório, apontando para essa branch.
3. DNS do domínio customizado configurado conforme o `CNAME`.

Após publicar, rodar o validador de compartilhamento do LinkedIn e do WhatsApp para atualizar o cache da capa social (`og-cover.jpg`).

## 🧩 Decisões de arquitetura

| Decisão | Racional |
|---|---|
| Posicionamento alternado por idioma | Em PT o H1 é "Sua ponte com o RavenDB no Brasil" (intenção local de busca); em EN o H1 é o nome próprio, mantendo o posicionamento global de Sales Engineer. |
| Captação por roteador de WhatsApp, não por formulário | Site estático, sem backend. Oito cartões de intenção abrem o WhatsApp com mensagem já redigida e qualificada, reduzindo o atrito a zero. |
| Oito caminhos de lead separados | Avaliação · Comercial/licenciamento (ponte com o AE) · Suporte técnico · POC · Migração · Convite para palestra · Treinamento · Consultoria independente — cada um segmenta o lead na origem. |
| Prova antes de promessa | Métricas reais de projeto abrem a página, antes de qualquer texto institucional. |
| Vídeos embarcados, não redirecionados | Click-to-play: miniatura estática que só cria o iframe (`youtube-nocookie`) ao clique — sem cookies de terceiros no carregamento. |
| Sem newsletter | Decisão explícita: só contato direto. |

## 🔍 SEO e legibilidade por IA

- **JSON-LD (schema.org)** com três entidades: `Person` (cargo, empregador, idiomas, `knowsAbout`, `sameAs`), `makesOffer` (as quatro consultorias, cada uma com `serviceType` e `areaServed: Worldwide`) e `ProfilePage`/`ProfessionalService`.
- Meta tags completas (title, description, keywords, `robots`, canonical, `geo.region`/`geo.placename`).
- Open Graph e Twitter Card com URLs absolutas e capa social 1200×630 dedicada.
- Um único `H1`, hierarquia de `H2`/`H3` por seção, `alt` descritivo em toda imagem.
- `og:locale` `pt_BR` com `og:locale:alternate` `en_US`.
- **`llms.txt`** (padrão [llmstxt.org](https://llmstxt.org)) com resumo em Markdown de quem é Lucas, os quatro serviços e os contatos — para LLMs e assistentes de IA que não renderizam o HTML completo.
- `robots.txt` libera explicitamente os crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai).

**Pendências conhecidas:**

- A versão em inglês não tem URL própria — se um dia for servida em `/en/`, os três `hreflang` (`pt-BR`, `en`, `x-default`) devem ser adicionados.
- O evento `clique_whatsapp` ainda não está marcado como conversão no GA4 (Configurar → Eventos → marcar como conversão).

## ✅ Qualidade e Lighthouse

Rodamos o relatório do Google Lighthouse e corrigimos tudo o que saía abaixo de 100 em performance, acessibilidade e boas práticas (SEO já estava em 100):

- **Imagens**: todas as fotos e capas de artigo foram redimensionadas para ~2× o tamanho exibido e recomprimidas (as capas, de PNG fotográfico para JPEG) — de ~13MB para ~1MB no total. A foto do hero (`lucas-tavares.png`) tem `srcset`/`sizes` com uma variante menor (620×840) para mobile e telas normais, reservando a grande (1238×1680) só para alta densidade (retina).
- **LCP**: `<link rel="preload" fetchpriority="high">` no background do hero, somado à redução geral de peso de imagem.
- **Contraste (WCAG AA)**: corrigido em 4 pontos que ficavam abaixo de 4,5:1 — eyebrow da seção "Falar comigo", texto legal e link de e-mail do rodapé, botão do aviso de cookies. Ao mudar cores no inline-style, confira o contraste antes de publicar.
- **Landmark**: `<main>` único envolvendo o conteúdo entre `<header>` e `<footer>`.
- **`_ds/`** (design system) removido do `<head>`/`<helmet>` — não é mais carregado em produção, eliminando a maior parte dos 404 que apareciam no console (o estilo da página já é 100% inline, então o bundle nunca foi necessário ali).

**Limite conhecido:** alguns `<img>` de conteúdo repetido (bandeira do evento, miniatura de vídeo) usam `{{ placeholder }}` cru no `src`, resolvido em runtime pelo `support.js`; o navegador tenta buscar esse literal por uma fração de segundo antes do JS substituir, gerando 404 passageiros no console. O mesmo vale para o sidecar `.image-slots.state.json` do `image-slot.js`, usado para persistir imagens arrastadas dentro da ferramenta de design — fora dela, em produção, o 404 é esperado. Ambos vêm do runtime de autoria (`support.js`/`image-slot.js`, arquivos vendor com aviso explícito contra edição manual) e não afetam o conteúdo visível; corrigi-los exigiria reescrever essa engine de template.

## 📬 Contato

- RavenDB (oficial): lucas.tavares@ravendb.net
- Pessoal: eu@lucasrtavares.com.br
- LinkedIn: [/in/lucasrtavares](https://linkedin.com/in/lucasrtavares)
- GitHub: [@leadsoftlucas](https://github.com/leadsoftlucas)
- NuGet: [/profiles/lucastavares](https://www.nuget.org/profiles/lucastavares)
- YouTube: [@LucasResendeTavares](https://www.youtube.com/@LucasResendeTavares)

## 📄 Licença

MIT — ver [LICENSE](LICENSE).

---

## 🇺🇸 English

Personal and institutional website of Lucas Resende Tavares, a Sales Engineer and Solutions Architect at RavenDB and founder of LeadSoft Soluções Web (2018–2025). Single-page, bilingual (pt-BR/en) static site, no backend and no build step — `index.html` is served as-is, generated from the source file `Lucas Tavares.dc.html`. All conversion happens through pre-filled WhatsApp links or `mailto:`, not forms. Images are resized/compressed close to their displayed size, with `srcset` on the hero photo, and `llms.txt` gives LLM crawlers a plain-Markdown summary. See the sections above for architecture decisions, Lighthouse fixes, and known SEO/console-noise gaps.
