import {
  FaRocket,
  FaGlobe,
  FaLaptopCode,
  FaCube,
  FaRobot,
  FaBolt,
  FaPalette,
  FaBullseye,
  FaMobileAlt,
  FaComments,
} from "react-icons/fa";

/* HERO ------------------------------------------------------------------ */

export const highlights = [
  "Landing pages prontas para receber anúncios e gerar contatos",
  "Landing pages 3D com cenas interativas para impressionar seu cliente",
  "Sites e sistemas web feitos sob medida para a sua operação",
  "Agentes de IA que atendem seus clientes 24 horas por dia",
];

/* SOLUÇÕES EM DESTAQUE --------------------------------------------------- */

export const featuredSolutions = [
  {
    id: "landing-page",
    name: "Landing Page",
    icon: FaRocket,
    variant: "pink",
    badge: "Nosso carro-chefe",
    eyebrow: "Produto principal",
    tagline: "Transforme visitantes em oportunidades.",
    description:
      "É o serviço que mais entregamos e o nosso preço fechado mais acessível: uma página estratégica para apresentar sua empresa, serviço ou produto e transformar visitantes em oportunidades.",
    benefit: "Pronta para receber tráfego de anúncios e redes sociais.",
    includes: [
      "Domínio próprio incluso por 1 ano",
      "Hospedagem e publicação da página no ar",
      "Manutenção inclusa: ajustes de textos, imagens e contatos",
      "Layout personalizado, sem template genérico",
      "Versão para celular, tablet e desktop",
      "Botão de WhatsApp e formulário de contato",
    ],
    price: "R$ 800,00",
    priceNote: "à vista — preço fechado, sem surpresa",
    priceAlt: "ou R$ 149,90 de entrada + R$ 149,90/mês na oferta anual",
    footnote:
      "No cartão, pagamento com juros conforme as condições da maquininha. No boleto, as condições são informadas na proposta.",
    cta: "Quero minha Landing Page",
    whatsappMessage: "Olá! Tenho interesse na Landing Page da Bloom Pages.",
  },
  {
    id: "landing-page-3d",
    name: "Landing Page 3D",
    icon: FaCube,
    variant: "immersive",
    badge: "Experiência imersiva",
    eyebrow: "Versão premium",
    tagline: "Sua marca em outro nível.",
    description:
      "Uma landing page com cenas, objetos e animações em 3D, feita para marcas que querem impressionar já nos primeiros segundos e se destacar da concorrência.",
    benefit:
      "O visitante interage com o seu produto na tela, e não só olha uma foto.",
    includes: [
      "Cenas e objetos 3D interativos sob medida",
      "Seu produto girando em 360° na tela",
      "Animações que acompanham a rolagem",
      "Layout exclusivo, sem template genérico",
      "Otimização de performance para o celular",
      "Versão para celular, tablet e desktop",
      "Domínio próprio incluso por 1 ano",
      "Hospedagem e publicação da página no ar",
    ],
    price: "R$ 3.000,00",
    priceNote: "+ manutenção mensal de R$ 300,00/mês",
    priceAlt:
      "A manutenção cobre hospedagem e ajustes de textos, imagens, contatos e cenas 3D.",
    footnote:
      "Condições de parcelamento informadas na proposta, conforme a forma de pagamento escolhida.",
    cta: "Quero uma Landing Page 3D",
    whatsappMessage: "Olá! Tenho interesse na Landing Page 3D da Bloom Pages.",
  },
];

/* DEMAIS SOLUÇÕES ------------------------------------------------------- */

export const solutions = [
  {
    id: "sites",
    name: "Sites profissionais",
    icon: FaGlobe,
    accent: "neutral",
    tagline: "Sua marca com mais credibilidade.",
    description:
      "Sites profissionais desenvolvidos para fortalecer a presença digital da sua empresa e apresentar sua marca com mais credibilidade.",
    benefit: "Estrutura com várias páginas: serviços, sobre, contato e mais.",
    price: "Sob consulta",
    priceNote: "orçamento conforme o número de páginas e recursos",
    cta: "Solicitar orçamento",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para um site com a Bloom Pages.",
  },
  {
    id: "sistemas-web",
    name: "Sistemas Web",
    icon: FaLaptopCode,
    accent: "neutral",
    tagline: "Menos planilha, mais controle.",
    description:
      "Sistemas web personalizados para automatizar processos, organizar operações e facilitar a gestão do seu negócio.",
    benefit: "Feito sob medida para o processo que a sua equipe já usa.",
    price: "Sob consulta",
    priceNote: "escopo e investimento definidos junto com você",
    footnote:
      "Cada sistema tem regras próprias, por isso o valor só é fechado depois de entendermos o seu processo.",
    cta: "Falar sobre meu projeto",
    whatsappMessage:
      "Olá! Quero conversar sobre um sistema web com a Bloom Pages.",
  },
  {
    id: "automacoes",
    name: "Automações",
    icon: FaBolt,
    accent: "neutral",
    tagline: "Sua rotina no piloto automático.",
    description:
      "Integrações e automações entre as ferramentas que você já usa: WhatsApp, planilhas, e-mail, CRM e formulários trabalhando juntos, sem trabalho manual.",
    benefit: "Menos tarefa repetitiva e menos erro no dia a dia.",
    price: "Sob consulta",
    priceNote: "depende das ferramentas e do volume de tarefas",
    footnote:
      "Nos conte qual processo você quer automatizar e enviamos uma proposta com escopo, prazo e valor.",
    cta: "Quero automatizar meu processo",
    whatsappMessage:
      "Olá! Quero conversar sobre automações com a Bloom Pages.",
  },
  {
    id: "agente-de-ia",
    name: "Agente de IA",
    icon: FaRobot,
    badge: "Solução avançada",
    accent: "premium",
    tagline: "Atendimento que não dorme.",
    description:
      "Agentes de IA personalizados para atender clientes, responder dúvidas, automatizar tarefas e apoiar sua empresa 24 horas por dia.",
    benefit: "Nenhuma oportunidade perdida fora do horário comercial.",
    price: "A partir de R$ 3.000,00",
    priceNote: "+ manutenção mensal a partir de R$ 300,00/mês",
    footnote:
      "O investimento varia conforme a complexidade e as necessidades do projeto.",
    cta: "Quero um Agente de IA",
    whatsappMessage: "Olá! Tenho interesse em um Agente de IA da Bloom Pages.",
  },
];

/* COMO FUNCIONA --------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Conversa inicial",
    description:
      "Entendemos seu negócio, seu público e o objetivo do projeto.",
  },
  {
    step: "02",
    title: "Proposta e escopo",
    description:
      "Você recebe o que será entregue, o prazo e o investimento, sem surpresa depois.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description:
      "Layout, textos e código evoluem com você acompanhando cada etapa.",
  },
  {
    step: "04",
    title: "Publicação e ajustes",
    description:
      "Colocamos no ar, testamos em celular e desktop e ajustamos o que for preciso.",
  },
];

/* DIFERENCIAIS ---------------------------------------------------------- */

export const differentials = [
  {
    icon: FaPalette,
    title: "Projeto sob medida",
    description:
      "Nada de template genérico: layout, textos e estrutura são pensados para o seu negócio.",
  },
  {
    icon: FaBullseye,
    title: "Foco em conversão",
    description:
      "Cada seção tem um objetivo claro: gerar contato, venda ou agendamento.",
  },
  {
    icon: FaMobileAlt,
    title: "Feito para o celular",
    description:
      "Tudo é testado em celular, tablet e desktop antes de entrar no ar.",
  },
  {
    icon: FaComments,
    title: "Acompanhamento direto",
    description:
      "Você fala direto com quem desenvolve, do orçamento à publicação.",
  },
];

/* DÚVIDAS FREQUENTES ---------------------------------------------------- */

export const faqItems = [
  {
    question: "O que está incluído na Landing Page de R$ 800,00?",
    answer:
      "Criação da página com layout personalizado, organização dos textos junto com você, versão para celular, publicação no ar, domínio próprio por 1 ano e manutenção da página (ajustes de textos, imagens e contatos). É o nosso principal serviço e a porta de entrada mais acessível — quem quer uma experiência imersiva pode subir para a Landing Page 3D.",
  },
  {
    question: "O domínio e a manutenção continuam depois do primeiro ano?",
    answer:
      "O primeiro ano de domínio já vem incluso. A partir do segundo ano, a renovação do domínio e a continuidade da manutenção são combinadas com você — os valores são informados na proposta, sem cobrança surpresa.",
  },
  {
    question: "Como funciona o pagamento da Landing Page?",
    answer:
      "R$ 800,00 à vista ou R$ 149,90 de entrada + R$ 149,90 por mês na oferta anual. No cartão, o pagamento sai com juros conforme as condições da maquininha. No boleto, as condições são informadas na proposta.",
  },
  {
    question: "Por que sites, sistemas web e automações são sob consulta?",
    answer:
      "Porque não existem dois projetos iguais: o valor depende do número de páginas, das funcionalidades, das integrações e do volume de tarefas envolvido. Você conta o que precisa e recebe uma proposta com escopo, prazo e valor antes de qualquer compromisso.",
  },
  {
    question: "Qual a diferença da Landing Page 3D para a Landing Page comum?",
    answer:
      "A Landing Page 3D traz cenas e objetos tridimensionais interativos: o visitante gira o seu produto na tela, vê animações que acompanham a rolagem e vive uma experiência bem mais marcante. O investimento é de R$ 3.000,00, mais manutenção mensal de R$ 300,00, que já inclui hospedagem e os ajustes de textos, imagens e das cenas 3D.",
  },
  {
    question: "Quanto custa um Agente de IA?",
    answer:
      "O investimento parte de R$ 3.000,00, mais manutenção mensal a partir de R$ 300,00. O valor final depende da complexidade do atendimento, das integrações e do volume de conversas.",
  },
  {
    question: "Quanto tempo leva para o projeto ficar pronto?",
    answer:
      "Depende do tipo de projeto e da agilidade no envio das informações. Landing pages são as entregas mais rápidas; sites, sistemas, automações e agentes de IA têm o prazo definido na proposta.",
  },
  {
    question: "Preciso ter os textos e as imagens prontos?",
    answer:
      "Não. Se você já tiver o material, aproveitamos. Se não, organizamos o conteúdo junto com você durante o projeto.",
  },
];
