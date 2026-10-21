import {
  FaRobot,
  FaWindowMaximize,
  FaFilter,
  FaProjectDiagram,
  FaPalette,
  FaBullseye,
  FaHeadset,
  FaBullhorn,
  FaComments,
  FaHandshake,
  FaBolt,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa";

/* HERO ------------------------------------------------------------------ */

export const highlights = [
  { icon: FaRobot, text: "Agentes de IA que atendem 24h" },
  { icon: FaWindowMaximize, text: "Landing pages que convertem" },
  { icon: FaFilter, text: "CRM automático: nenhum cliente esquecido" },
];

/* FAIXA ANIMADA --------------------------------------------------------- */

export const marqueeItems = [
  "Agentes de IA",
  "Landing Pages",
  "CRM automático",
  "Atendimento 24h",
  "Follow-up automático",
  "Mais conversão",
  "Tudo conectado",
];

/* SOLUÇÕES -------------------------------------------------------------- */

export const solutions = [
  {
    id: "agente-de-ia",
    name: "Agente de IA",
    icon: FaRobot,
    tone: "pink",
    tagline: "Atendimento que não dorme.",
    description:
      "Um assistente treinado com as informações do seu negócio para responder clientes, tirar dúvidas, qualificar contatos e agendar horários, a qualquer hora do dia.",
    features: [
      "Atendimento 24h no WhatsApp e no site",
      "Treinado com os dados e o tom da sua empresa",
      "Qualifica contatos e agenda horários",
      "Passa a conversa para sua equipe quando precisa",
    ],
    cta: "Orçar meu Agente de IA",
    whatsappMessage:
      "Olá! Vim pelo site da BloomHub e quero um orçamento de Agente de IA.",
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    icon: FaWindowMaximize,
    tone: "purple",
    badge: "Mais procurada",
    tagline: "Visita que vira contato.",
    description:
      "Páginas estratégicas, rápidas e bonitas, feitas para apresentar sua oferta e transformar o tráfego de anúncios e redes sociais em clientes.",
    features: [
      "Layout exclusivo, sem template genérico",
      "Pronta para anúncios e redes sociais",
      "Perfeita no celular, tablet e desktop",
      "Opção com experiência 3D interativa",
    ],
    cta: "Orçar minha Landing Page",
    whatsappMessage:
      "Olá! Vim pelo site da BloomHub e quero um orçamento de Landing Page.",
  },
  {
    id: "crm",
    name: "CRM automático",
    icon: FaFilter,
    tone: "indigo",
    tagline: "Nenhum cliente esquecido.",
    description:
      "Todos os seus contatos organizados em um funil visual, com lembretes e follow-ups automáticos para sua equipe saber com quem falar e quando.",
    features: [
      "Funil de vendas visual e simples",
      "Follow-ups e lembretes automáticos",
      "Histórico completo de cada cliente",
      "Contatos entram sozinhos do site e do WhatsApp",
    ],
    cta: "Orçar meu CRM",
    whatsappMessage:
      "Olá! Vim pelo site da BloomHub e quero um orçamento de CRM.",
  },
];

/* AGENTE EM AÇÃO: simulação de conversa no celular 3D ------------------ */

export const agentDemo = {
  messages: [
    { from: "client", text: "Oi! Vocês atendem no sábado?" },
    {
      from: "agent",
      text: "Olá! 😊 Atendemos sim, das 9h às 14h. Quer que eu reserve um horário para você?",
    },
    { from: "client", text: "Quero! Pode ser às 10h?" },
    {
      from: "agent",
      text: "Prontinho! Seu horário está confirmado para sábado, às 10h. ✅",
    },
  ],
  // `after`: quantas mensagens precisam ter aparecido para o selo surgir.
  badges: [
    { icon: FaBolt, text: "Respondeu em segundos", after: 2 },
    { icon: FaCalendarCheck, text: "Horário agendado", after: 4 },
    { icon: FaFilter, text: "Contato salvo no CRM", after: 4 },
  ],
  bullets: [
    { icon: FaClock, text: "Atende a qualquer hora, inclusive de madrugada" },
    { icon: FaComments, text: "Entende o cliente do jeito que ele escreve" },
    { icon: FaFilter, text: "Registra cada conversa no CRM automaticamente" },
  ],
};

/* ECOSSISTEMA: como as soluções se conectam ----------------------------- */

export const hubFlow = [
  {
    icon: FaBullhorn,
    title: "A landing page atrai",
    description:
      "O visitante chega pelo anúncio ou pelo Instagram e encontra uma página feita para converter.",
  },
  {
    icon: FaComments,
    title: "O agente de IA atende",
    description:
      "Responde na hora, tira dúvidas e qualifica o contato, mesmo de madrugada ou no fim de semana.",
  },
  {
    icon: FaFilter,
    title: "O CRM organiza",
    description:
      "O contato cai no funil com todo o histórico, e os follow-ups são lembrados automaticamente.",
  },
  {
    icon: FaHandshake,
    title: "Você fecha a venda",
    description:
      "Sua equipe entra na hora certa, com o cliente já aquecido e as informações em mãos.",
  },
];

/* COMO FUNCIONA --------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Conversa inicial",
    description:
      "Entendemos seu negócio, seu público e onde você está perdendo clientes hoje.",
  },
  {
    step: "02",
    title: "Orçamento sob medida",
    description:
      "Você recebe o escopo, o prazo e o investimento da solução ideal, sem surpresa depois.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description:
      "Criamos, treinamos e integramos tudo, com você acompanhando cada etapa.",
  },
  {
    step: "04",
    title: "No ar e acompanhado",
    description:
      "Publicamos, testamos e seguimos ajustando para a solução render cada vez mais.",
  },
];

/* DIFERENCIAIS ---------------------------------------------------------- */

export const differentials = [
  {
    icon: FaProjectDiagram,
    title: "Tudo conectado",
    description:
      "Página, atendimento e CRM conversam entre si. Nenhum contato se perde no caminho.",
  },
  {
    icon: FaPalette,
    title: "Feito sob medida",
    description:
      "Nada de solução de prateleira: cada projeto é pensado para o seu negócio e o seu público.",
  },
  {
    icon: FaBullseye,
    title: "Foco em resultado",
    description:
      "Cada detalhe tem um objetivo claro: gerar contato, agendamento ou venda.",
  },
  {
    icon: FaHeadset,
    title: "Suporte próximo",
    description:
      "Você fala direto com quem desenvolve, do orçamento aos ajustes depois da entrega.",
  },
];

/* DÚVIDAS FREQUENTES ---------------------------------------------------- */

export const faqItems = [
  {
    question: "Quanto custa contratar a BloomHub?",
    answer:
      "Cada projeto é orçado de acordo com a sua necessidade: o valor depende da solução escolhida, das integrações e do volume de atendimento. Você conta o que precisa e recebe uma proposta com escopo, prazo e investimento, sem compromisso.",
  },
  {
    question: "Posso contratar só uma das soluções?",
    answer:
      "Pode. Agente de IA, Landing Page e CRM funcionam separadamente. Mas, quando trabalham juntos, o resultado é maior: a página atrai, o agente atende e o CRM garante que ninguém fique sem retorno.",
  },
  {
    question: "O agente de IA atende pelo WhatsApp?",
    answer:
      "Sim. O agente pode atender pelo WhatsApp e pelo site. As integrações exatas são definidas no orçamento, de acordo com as ferramentas que você já usa.",
  },
  {
    question: "O agente de IA substitui minha equipe?",
    answer:
      "Não, ele potencializa. O agente cuida das perguntas repetitivas e do primeiro atendimento, a qualquer hora, e transfere a conversa para uma pessoa quando é preciso.",
  },
  {
    question: "Já uso uma planilha para controlar clientes. O CRM serve para mim?",
    answer:
      "Serve, e é justamente o próximo passo. Organizamos seus contatos atuais em um funil visual e automatizamos os lembretes, para nenhum cliente ser esquecido.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "Depende da solução e da agilidade no envio das informações. Landing pages são as entregas mais rápidas; agentes de IA e CRM têm o prazo definido na proposta.",
  },
  {
    question: "Preciso ter os textos e as imagens prontos?",
    answer:
      "Não. Se você já tiver o material, aproveitamos. Se não, organizamos o conteúdo junto com você durante o projeto.",
  },
];

/* FORMULÁRIO: opções de interesse --------------------------------------- */

export const interestOptions = [
  "Agente de IA",
  "Landing Page",
  "CRM",
  "Pacote completo",
];
