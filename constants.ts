import type { InsightCardData, PedagogyStepData } from './types';
import { ChipIcon, CodeIcon, SparklesIcon } from './components/icons';

export const INSIGHTS_DATA: InsightCardData[] = [
  {
    title: 'Produção Audiovisual',
    insight: 'Desejo de criar narrativas e se expressar visualmente.',
    connection: 'Alunos poderão registrar (em fotografia) a criação física e sua transformação digital, narrando a história de seu objeto.',
    potential: 'Criar trailers, clipes ou curtas dos jogos desenvolvidos, aprofundando em narrativa e estética.',
    className: 'hover:border-lab-red',
  },
  {
    title: 'Criatividade Livre',
    insight: 'Forte engajamento com autoria, invenção e liberdade de escolha.',
    connection: 'Autonomia total para criar qualquer objeto físico com identidade e função, protagonizando sua digitalização no Construct.',
    potential: 'Realização de Hackathons estudantis e desafios abertos de invenção e design de jogos.',
    className: 'hover:border-lab-orange',
  },
  {
    title: 'Integração Físico + Digital',
    insight: 'Gosto por experiências fora da tela - que nascem no mundo real e podem ganhar vida digital.',
    connection: 'É a base da nossa proposta! Construir no mundo físico (lego, massinha, desenho) → digitalizar e programar no Construct → opcionalmente integrar com Makey Makey para uma resposta física e interativa.',
    potential: 'Projetos híbridos contínuos, como música com objetos, sensores criativos, arte interativa e gamificação de espaços da escola.',
    className: 'md:col-span-2 hover:border-lab-blue',
  },
  {
    title: 'Aviação',
    insight: 'Gosto por imaginar aventuras, trajetos e exploração.',
    connection: 'O objeto criado pode ter elementos de voo e, no Construct, ganhar movimentos e missões aéreas.',
    potential: 'Explorar mecânicas de mapas, simulação de voo e desafios de navegação.',
    className: 'hover:border-lab-purple',
  },
  {
    title: 'Esporte',
    insight: 'Interesse em movimento, regras e competição saudável.',
    connection: 'Criação de objetos inspirados em esportes, com funções como correr, pular e marcar pontos no Construct.',
    potential: 'Desenvolvimento de jogos colaborativos ou competitivos que misturem o físico e o digital.',
    className: 'hover:border-lab-red',
  },
];

export const PEDAGOGY_STEPS_DATA: PedagogyStepData[] = [
    {
        icon: ChipIcon,
        title: '1. Partir do Tangível',
        description: 'Alunos começam criando algo com as mãos. A materialidade (lego, massinha, desenho) desperta afetos, colaboração e identidade.'
    },
    {
        icon: CodeIcon,
        title: '2. Migrar para o Digital',
        description: 'No Construct, o objeto físico ganha movimento, função e regras. A autoria manual se transforma em autoria digital.'
    },
    {
        icon: SparklesIcon,
        title: '3. Fechar com Encantamento',
        description: 'A integração opcional com Makey Makey dá "vida física" ao jogo digital, provocando uma reação imediata e mágica.'
    }
];