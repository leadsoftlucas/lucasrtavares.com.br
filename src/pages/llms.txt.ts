import type { APIRoute } from 'astro';
import { config } from '../config';
import { homePath, routes } from '../i18n';
import { proof } from '../content/proof';
import { clients } from '../data/clients';
import { ossStats } from '../data/links';
import { articles } from '../data/articles';

// llms.txt (llmstxt.org) gerado a partir dos mesmos dados das paginas, para nao divergir do site.
// Fonte do texto: Content/06 Site/06 SEO, LLM e Dados Estruturados.md (secao 6) + decisoes do Lucas de 24/10/2026.
export const GET: APIRoute = () => {
  const abs = (path: string) => config.siteUrl + path;
  const pt = proof.pt;
  const cases = pt.cases
    .filter((c) => c.name !== 'App do Trocador Castrol' && c.name !== 'Delphi → .NET')
    .map((c) => `- ${c.name}${c.period ? ` (${c.period})` : ''}: ${c.result}.`);
  const events = pt.events.filter((e) => e.date !== '—').map((e) => `${e.name} (${e.date.slice(-4)})`);

  const body = `# Lucas Resende Tavares

> Sales Engineer e Arquiteto de Soluções na RavenDB (Hibernating Rhinos Ltd.) e a ponte do RavenDB no Brasil. Programa desde 2007 e projeta software com RavenDB desde 2018. Autor de ${ossStats.packages} pacotes .NET open source (mais de 208 mil downloads no NuGet) e palestrante no Brasil e nos EUA. Atende em português e inglês, no mundo todo, com foco nas Américas, na Europa e na Oceania, a partir de Curitiba.

Este site é pessoal e **não** é um canal oficial da RavenDB. O foco é o RavenDB. Desenvolvimento de software (.NET) e consultoria de tecnologia e de produto estão disponíveis sob demanda, sem destaque, na seção LeadSoft. A conversão acontece por WhatsApp (mensagens pré-preenchidas por assunto) ou e-mail.

## O que ele faz
- Avalia casos de uso e faz **prova de conceito** com RavenDB, com benchmark contra o caminho atual.
- Ajuda em **modelagem de documentos, índices e performance** em produção.
- **Migração de legado** (relacional ou outro NoSQL), com **CDC e ETL**.
- **Busca textual e vetorial e IA** sobre os dados.
- Faz a **ponte com o time comercial da RavenDB** quando faz sentido.
- Atende times técnicos, quem decide e donos de negócio.

## Quem é
- Sales Engineer e Arquiteto de Soluções na RavenDB desde agosto de 2025.
- Fundou e liderou a [LeadSoft Soluções Web](https://leadsoft.inf.br) (2018–2025), software house de Curitiba; parceira oficial do RavenDB no Brasil entre 2024 e 2025.
- Projeta software com RavenDB sempre que a escolha é dele; só usa outros bancos quando o cliente tem uma restrição clara de infraestrutura.
- Bacharel em Sistemas de Informação (Faculdade Cotemig, 2010–2015); técnico em Informática (Colégio Cotemig, 2007–2009).

## Provas
${cases.join('\n')}
- Cliente RavenDB: Invent Software (CTO Fábio Nascimento) relatou ganho de 80% no tempo de desenvolvimento e manutenção e uma carga retroativa de 38 milhões de registros em 10 horas, com RavenDB e Kafka.
- ${ossStats.packages} pacotes NuGet; demonstrações no GitHub: ravendb-demo e ravendb-sales-assistant-demo.
- Palestras: ${events.join(', ')}.
- Clientes citados: ${clients.map((c) => c.name).join(', ')}.
- Artigos no LinkedIn: ${articles.length}, sobre dados, arquitetura e IA.

## Páginas
- [Início](${abs(homePath.pt)}) · [English](${abs(homePath.en)})
- [História](${abs(routes.story.pt)}) · [Story](${abs(routes.story.en)})
- [Provas](${abs(routes.proof.pt)}) · [Proof](${abs(routes.proof.en)})
- [Imprensa e bio kit](${abs(routes.press.pt)}) · [Press kit](${abs(routes.press.en)})

## Contato e perfis
- RavenDB (oficial): ${config.emailRavendb}
- Pessoal: ${config.emailPersonal}
- LinkedIn: https://linkedin.com/in/lucasrtavares
- GitHub: https://github.com/leadsoftlucas
- NuGet: https://www.nuget.org/profiles/lucastavares
- YouTube: https://www.youtube.com/@LucasResendeTavares

## English summary
Lucas Resende Tavares is a Sales Engineer and Solutions Architect at RavenDB and its bridge to Brazil. He has been programming since 2007 and has designed software with RavenDB since 2018, using other databases only when a client had a clear infrastructure constraint. He authored ${ossStats.packages} open-source .NET packages (200,000+ NuGet downloads) and speaks in Brazil and the US. He works in English and Portuguese, worldwide, with a focus on the Americas, Europe and Oceania. This is a personal site, not an official RavenDB channel.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
