// Depoimentos de clientes da LeadSoft (2018-2025), transcritos dos cartoes de depoimento da propria LeadSoft
// enviados pelo Lucas em 24/10/2026. O texto em portugues e LITERAL (nao corrigir nem resumir).
// A traducao para o ingles e do site e aparece marcada como traducao; o original fica acessivel na pagina em ingles.
// Cargos como impressos nos cartoes.
import type { Lang } from '../i18n';

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Lang, string>;
  /** Citacao literal, em portugues. */
  quote: string;
  /** Traducao para o ingles. */
  quoteEn: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'remo-lucioli',
    name: 'Remo Lucioli',
    role: { pt: 'Fundador e diretor de Eng. de Dados, Inforlube Group', en: 'Founder and Data Engineering Director, Inforlube Group' },
    quote:
      'O grande desafio das empresas de tecnologia é a disciplina e os processos! Com o Acordo de Cooperação celebrado com a Leadsoft® nossa empresa conseguiu implantar modernos processos de produção, elevando muito nossa capacidade de controle gerando maior rapidez e performance. Por isso, podemos afirmar que a Leadsoft® figura entre os Parceiros "Top Five" do Grupo Inforlube.',
    quoteEn:
      'The great challenge of technology companies is discipline and processes! With the Cooperation Agreement signed with Leadsoft®, our company was able to implement modern production processes, greatly raising our control capacity and delivering greater speed and performance. That is why we can say that Leadsoft® is among the "Top Five" Partners of the Inforlube Group.',
  },
  {
    id: 'ricardo-braidotte',
    name: 'Ricardo Braidotte',
    role: { pt: 'Cofundador da R3 Engenharia e gerente de projetos na Inforlube', en: 'Co-founder, R3 Engenharia, and Project Manager at Inforlube' },
    quote:
      'Nós buscávamos parceiros que nos fornecesse agilidade, conhecimento técnico e comercial para nossos softwares e nossos clientes e, encontramos no time LeadSoft® muito mais! Juntos, superamos nossas metas de aperfeiçoamento dentro do prazos planejados, graças a alta disponibilidade e dedicação desprendida no projeto. Hoje, a parceria nos garantiu a alta satisfação dos nossos clientes mais significativos, elevando cada dia mais a nossa marca. Obrigado time Lead!',
    quoteEn:
      'We were looking for partners who could give us agility and technical and commercial knowledge for our software and our customers, and we found much more in the LeadSoft® team! Together, we exceeded our improvement goals within the planned deadlines, thanks to the high availability and selfless dedication to the project. Today, the partnership has secured the high satisfaction of our most significant customers, raising our brand more every day. Thank you, Lead team!',
  },
  {
    id: 'sandra-baroni',
    name: 'Sandra Baroni',
    role: { pt: 'Gerente de Processos, Leadmec', en: 'Process Manager, Leadmec' },
    quote:
      'A LeadSoft® foi uma aquisição importante para nossa empresa. Sempre com excelência na qualidade do produto e no desempenho do trabalho em equipe. Profissionais qualificados e atendimento excelente promovendo a satisfação dos seus clientes.',
    quoteEn:
      'LeadSoft® was an important acquisition for our company. Always with excellence in product quality and in teamwork performance. Qualified professionals and excellent service, promoting the satisfaction of its customers.',
  },
  {
    id: 'professor-ari',
    name: 'Professor Ari',
    role: {
      pt: 'O Brabo da Redação, [Minha Discursiva](https://minhadiscursiva.com/)',
      en: '"O Brabo da Redação" (writing instructor), [Minha Discursiva](https://minhadiscursiva.com/)',
    },
    quote:
      'Passando aqui para agradecer pelo empenho de toda a equipe da LeadSoft® no atendimento das demandas da minha plataforma. Hoje vejo o quanto ter um suporte de desenvolvedores foi fundamental para o crescimento e a estabilidade da minha empresa. Com certeza vou continuar recomendando muito o trabalho de vocês!',
    quoteEn:
      "Stopping by to thank the whole LeadSoft® team for the effort in handling my platform's demands. Today I see how essential having developer support was for the growth and stability of my company. I will certainly keep recommending your work a lot!",
  },
];

/** Frase de destaque (ultima do depoimento do Remo Lucioli) para a secao LeadSoft da home. */
export const featuredQuote = {
  name: 'Remo Lucioli',
  role: { pt: 'Inforlube Group', en: 'Inforlube Group' } as Record<Lang, string>,
  pt: 'Por isso, podemos afirmar que a Leadsoft® figura entre os Parceiros "Top Five" do Grupo Inforlube.',
  en: 'That is why we can say that Leadsoft® is among the "Top Five" Partners of the Inforlube Group.',
};
