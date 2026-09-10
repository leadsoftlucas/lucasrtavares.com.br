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
- **Design system RavenDB**, carregado de `_ds/` (tokens de cor, tipografia Montserrat, gradientes de marca).

## 📁 Estrutura de arquivos

```
index.html              # versão publicada
support.js              # runtime de renderização
image-slot.js           # componente de imagem arrastável
assets/                 # logotipos, bandeiras, fundos vetoriais, capas de artigo, fotos de evento, avatar, capa social
_ds/                    # design system RavenDB (tokens e bundle)
CNAME                   # domínio customizado do GitHub Pages
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

1. Subir `index.html`, `support.js`, `image-slot.js`, `assets/`, `_ds/` e `CNAME` na branch de publicação do repositório.
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

**Pendências conhecidas:**

- A versão em inglês não tem URL própria — se um dia for servida em `/en/`, os três `hreflang` (`pt-BR`, `en`, `x-default`) devem ser adicionados.
- Google Tag Manager (`GTM-59KJ4PPC`) e Google Analytics (`G-16LSSW03WS`) já estão instalados, mas nenhum evento é disparado nos 8 cartões de lead — ainda não dá para medir qual caminho converte. Falta marcar os links com `utm_source`/evento de clique.

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

Personal and institutional website of Lucas Resende Tavares, a Sales Engineer and Solutions Architect at RavenDB and founder of LeadSoft Soluções Web (2018–2025). Single-page, bilingual (pt-BR/en) static site, no backend and no build step — `index.html` is served as-is, generated from the source file `Lucas Tavares.dc.html`. All conversion happens through pre-filled WhatsApp links or `mailto:`, not forms. See the sections above for architecture decisions and known SEO gaps.
