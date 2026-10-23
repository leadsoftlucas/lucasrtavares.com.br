// Pagina /historia/ e /en/history/. Texto de Content/06 Site/03 Pagina Historia (PT e EN).md,
// com as correcoes do Lucas de 24/10/2026. Sintaxe: [texto](url), **negrito**, *enfase*.
import type { Lang } from '../i18n';

export interface Section {
  id: string;
  h2: string;
  paras?: string[];
  list?: string[];
  /** Trecho sujeito ao gate G1 (alinhamento com a RavenDB): so entra com PUBLIC_SHOW_G1=true. */
  g1?: boolean;
  /** Acrescentado ao ultimo paragrafo quando o G1 esta desligado. */
  withoutG1Tail?: string;
}

export interface HistoryContent {
  meta: { title: string; description: string };
  h1: string;
  lead: string;
  sections: Section[];
  ctaTitle: string;
  proof: string;
  back: string;
}

export const history: Record<Lang, HistoryContent> = {
  pt: {
    meta: {
      title: 'Por que RavenDB? A história de Lucas Resende Tavares',
      description:
        'Do incômodo com objeto e tabela ao time global do RavenDB: como Lucas Resende Tavares virou a ponte do RavenDB no Brasil.',
    },
    h1: 'Por que RavenDB? A história de como virei a ponte dele no Brasil',
    lead: '*Meu caminho até o RavenDB tem um incômodo, um prazo apertado, sete anos de empresa e uma ligação internacional. Conto aqui, sem enfeite.*',
    sections: [
      {
        id: 'incomodo',
        h2: 'O incômodo',
        paras: [
          'Na faculdade, estudando orientação a objeto, eu olhava o banco de dados e não aceitava: *se dá para guardar o objeto na memória, por que não dá para guardá-lo no disco do jeito que ele é, em vez de transformá-lo em tabelas?* Perguntei ao meu professor de banco de dados avançado, o Gilberto. A resposta, por volta de 2012, foi honesta: existiam estudos de bancos orientados a documentos, mas ainda nada concreto no mercado. Aquilo ficou na minha cabeça por seis anos.',
        ],
      },
      {
        id: 'bloco-de-notas',
        h2: 'O menino do Bloco de Notas',
        paras: [
          'Programo desde 2007, quando escrevi o primeiro site da empresa do meu pai no Bloco de Notas, e profissionalmente desde 2009. Meu primeiro grande projeto foi um ERP inteiro, em Delphi e Firebird, para a fábrica da família: entrevistando cada setor, entendendo o dia a dia de cada pessoa e inventando, da cabeça, telas, rotinas e banco de dados. Foi ali que aprendi o que virou a minha especialidade: **modelar dados a partir do negócio**. Depois vieram bancos, fábricas de software e a Mastertech, em Curitiba, onde um relatório de previsão de metas que levava cerca de quatro horas passou a rodar em trinta segundos, só por repensar a consulta.',
        ],
      },
      {
        id: 'prazo',
        h2: 'O prazo de 30 dias',
        paras: [
          'Em 2018 abri a LeadSoft e, meses depois, fui contratado para auditar um sistema que o cliente queria no ar em **30 dias**. A restrição era inegociável: **RavenDB**, um banco do qual eu nunca tinha ouvido falar. Eu era craque em SQL Server, e um banco sem tabelas me assustou por uns minutos. Depois vi o quanto era fácil. **Pedi 45 dias.** Na primeira semana refiz a estrutura inteira em documentos, e entreguei em 45. O fim da novela das migrations e dos joins infinitos. Daquele dia em diante, **projetei software com RavenDB sempre que a escolha foi minha**; só usei outros bancos quando o cliente tinha uma restrição clara de infraestrutura.',
        ],
      },
      {
        id: 'leadsoft',
        h2: 'Sete anos de LeadSoft',
        paras: [
          'Fundei e liderei a LeadSoft por sete anos. Foram clientes como [Castrol Brasil](https://castrol.com.br), [Inforlube](https://inforlube.com/) e [Ebbi](https://www.ebbi.com.br/), uma equipe, dois escritórios, erros e acertos e muito aprendizado sobre pessoas, processo e o custo real de software mal planejado. Em 2024 reestruturei o time e a empresa; em 2025 encerrei suas atividades. Levei dali o que mais importa para quem avalia uma tecnologia: **já estive do outro lado do balcão**, assinando contrato, cumprindo prazo e sustentando o que eu mesmo arquitetava.',
        ],
      },
      {
        id: 'ligacao',
        h2: 'A ligação',
        paras: [
          'Em janeiro de 2024 recebi uma ligação internacional. Era o RavenDB, curioso para saber por que um desconhecido do Brasil tinha cadastro e usava o banco. Contei a história acima. Semanas depois eu estava em San Francisco, na **Developer Week**, conhecendo Oren Eini e David Baruc. A LeadSoft se tornou **parceira oficial do RavenDB no Brasil**, e eu assumi a missão de apresentar o banco por aqui: **TDC São Paulo**, vídeos, artigos, bibliotecas abertas.',
        ],
        withoutG1Tail: 'Em 2025 encerrei a LeadSoft e, em agosto, entrei no time da RavenDB como Sales Engineer.',
      },
      {
        id: 'conversa',
        h2: 'A conversa que mudou tudo',
        g1: true,
        paras: [
          'Em maio de 2025, a RavenDB me chamou para uma conversa sobre a minha experiência como parceiro. Contei os casos e o que resolvi para os clientes. No fim, o David Baruc disse: *"um dia te trago para trabalhar com a gente."* Eu **recusei com um sorriso**: a LeadSoft ainda estava de pé e eu acreditava nela. Um mês depois, a empresa não se sustentou e decidi encerrá-la. Mandei uma mensagem ao David, como quem não quer nada. A resposta foi honesta: não havia vaga. Semanas depois, com a saída do então Head de DevRel, ele me chamou. O "teste" foram entrevistas gravadas, que viraram vídeos no meu canal, e duas demonstrações abertas no GitHub. Entrei no time em **agosto de 2025**. [LINKS a informar: vídeos]',
        ],
      },
      {
        id: 'hoje',
        h2: 'Hoje',
        paras: [
          'Sou **Sales Engineer e Arquiteto de Soluções na RavenDB**. Meu trabalho: **avaliar o seu caso com você**, **provar em código** se o banco resolve (e, quando não resolve, eu digo) e, quando faz sentido, **conectar você ao time comercial**. Em português ou em inglês, no seu fuso, em qualquer continente, com linha direta com a engenharia.',
        ],
      },
      {
        id: 'acredito',
        h2: 'No que eu acredito',
        list: [
          '**Quase toda conta cara de tecnologia é conta de complexidade.** Simplificar exige coragem e costuma ser a decisão mais rentável.',
          '**Software é investimento, não despesa:** ou agiliza um processo ou economiza recursos.',
          '**A curva de manutenção não pode ser maior do que a de novas funcionalidades.**',
          '**A IA a favor de quem entende o problema:** quem sabe o que a máquina está fazendo vai mais longe do que quem só pede a ela.',
          '**Integridade antes de CNPJ:** uma empresa é só um CNPJ; o que dura são as relações.',
        ],
      },
      {
        id: 'fora-do-codigo',
        h2: 'Fora do código',
        paras: [
          'Escalo e faço trilhas (já subi o Vulcão Láscar, no Chile), ouço rock e metal, e tenho uma Belina 1984 que virou beer truck: a [Choppellina](https://choppellina.com.br). Também escrevo ficção científica: *Lambda X* será o meu primeiro livro.',
        ],
      },
    ],
    ctaTitle: 'Quer conversar sobre o seu caso com RavenDB?',
    proof: 'Ver as provas',
    back: 'Voltar ao início',
  },
  en: {
    meta: {
      title: 'Why RavenDB? The story of Lucas Resende Tavares',
      description:
        "From an itch with objects and tables to RavenDB's global team: how Lucas Resende Tavares became RavenDB's bridge to Brazil.",
    },
    h1: 'Why RavenDB? How I became its bridge to Brazil',
    lead: '*My road to RavenDB has an itch, a tight deadline, seven years running a company and an international phone call. Here it is, no sugarcoating.*',
    sections: [
      {
        id: 'itch',
        h2: 'The itch',
        paras: [
          "In college, studying object orientation, I looked at databases and couldn't accept them: *if I can keep the object in memory, why can't I store it on disk as it is, instead of flattening it into tables?* I asked my advanced databases professor, Gilberto. Around 2012 the answer was honest: there was research on document-oriented databases, but nothing solid on the market yet. That stayed with me for six years.",
        ],
      },
      {
        id: 'notepad',
        h2: 'The kid with Notepad',
        paras: [
          "I've been programming since 2007, when I wrote my father's company website in Notepad, and professionally since 2009. My first big project was an entire ERP in Delphi and Firebird for the family factory: interviewing every department, understanding each person's day and inventing screens, routines and the database from scratch. That's where I learned what became my specialty: **modeling data from the business**. Banks, software houses and Mastertech in Curitiba followed, where a goals-forecast report that took about four hours started running in thirty seconds just by rethinking the query.",
        ],
      },
      {
        id: 'deadline',
        h2: 'The 30-day deadline',
        paras: [
          'In 2018 I started LeadSoft and, a few months later, I was hired to audit a system the client wanted live in **30 days**. The constraint was non-negotiable: **RavenDB**, a database I had never heard of. I was a SQL Server ace, and a database without tables scared me for a few minutes. Then I saw how easy it was. **I asked for 45 days.** In the first week I rebuilt the whole structure as documents, and I delivered in 45. The end of the migrations soap opera and the endless joins. From that day on, **I designed software with RavenDB whenever the choice was mine**; I only used other databases when the client had a clear infrastructure constraint.',
        ],
      },
      {
        id: 'leadsoft',
        h2: 'Seven years of LeadSoft',
        paras: [
          'I founded and led LeadSoft for seven years. Clients like [Castrol Brazil](https://castrol.com.br), [Inforlube](https://inforlube.com/) and [Ebbi](https://www.ebbi.com.br/), a team, two offices, mistakes and wins, and a lot of learning about people, process and the real cost of poorly planned software. In 2024 I restructured the team and the company; in 2025 I closed it down. I took away what matters most to anyone evaluating a technology: **I\'ve stood on the other side of the counter**, signing contracts, meeting deadlines and sustaining what I architected myself.',
        ],
      },
      {
        id: 'call',
        h2: 'The call',
        paras: [
          'In January 2024 I got an international call. It was RavenDB, curious about why an unknown person in Brazil had an account and used the database. I told them the story above. Weeks later I was in San Francisco at **Developer Week**, meeting Oren Eini and David Baruc. LeadSoft became an **official RavenDB partner in Brazil**, and I took on the mission of introducing the database here: **TDC São Paulo**, videos, articles, open-source libraries.',
        ],
        withoutG1Tail: 'In 2025 I closed LeadSoft and, in August, joined the RavenDB team as a Sales Engineer.',
      },
      {
        id: 'conversation',
        h2: 'The conversation that changed everything',
        g1: true,
        paras: [
          'In May 2025, RavenDB invited me to a conversation about my experience as a partner. I told them the cases and what I solved for clients. At the end, David Baruc said: *"one day I\'ll bring you to work with us."* I **declined with a smile**: LeadSoft was still standing and I believed in it. A month later, the company couldn\'t sustain itself and I decided to close it. I sent David a message, casually. His answer was honest: there was no opening. Weeks later, when the then Head of DevRel left, he called me. The "test" was recorded interviews, which became videos on my channel, and two open demos on GitHub. I joined the team in **August 2025**. [links to be provided: videos]',
        ],
      },
      {
        id: 'today',
        h2: 'Today',
        paras: [
          "I'm a **Sales Engineer and Solutions Architect at RavenDB**. My job: **evaluate your case with you**, **prove in code** whether the database solves it (and when it doesn't, I say so) and, when it makes sense, **connect you with the sales team**. In Portuguese or English, in your time zone, on any continent, with a direct line to engineering.",
        ],
      },
      {
        id: 'beliefs',
        h2: 'What I believe',
        list: [
          '**Almost every expensive technology bill is a complexity bill.** Simplifying takes courage and is usually the most profitable decision.',
          '**Software is an investment, not an expense:** it either speeds up a process or saves resources.',
          "**The maintenance curve can't exceed the new-feature curve.**",
          '**AI on the side of people who understand the problem:** whoever knows what the machine is doing goes further than whoever just asks it.',
          '**Integrity before the company registry number:** a company is just a tax ID; relationships are what last.',
        ],
      },
      {
        id: 'off-keyboard',
        h2: 'Off the keyboard',
        paras: [
          "I climb and hike (I've climbed the Láscar Volcano in Chile), listen to rock and metal, and run a 1984 Belina turned beer truck: [Choppellina](https://choppellina.com.br). I also write science fiction: *Lambda X* will be my first book.",
        ],
      },
    ],
    ctaTitle: 'Want to talk about your RavenDB case?',
    proof: 'See the proof',
    back: 'Back home',
  },
};
