/**
 * TODO o conteúdo factual do site vive aqui, com fonte e data ao lado.
 *
 * Regra da casa: nenhum número aparece no site sem `fonte` preenchida.
 * Quando um dado for atualizado (novo ciclo do PNTP, novo IEGM, novo decreto
 * do teto de dispensa), edite SÓ este arquivo — nenhum componente precisa mudar.
 */

export const EMPRESA = {
  nome: "Prisma Consultoria em Governança Pública",
  nomeCurto: "Prisma Consultoria",
  assinatura: "governança pública orientada a dados",
  email: "contato@prismagovernanca.com.br", // TROCAR pelo e-mail real
  telefone: "", // preencher quando houver número comercial
  cidade: "São Luís — Maranhão",
  linkedin: "", // preencher com a URL da página da empresa
};

/** Endpoint do formulário. Crie um form gratuito em https://formspree.io e cole o ID aqui. */
export const FORMSPREE_ID = "SEU_ID_AQUI";

export const PROVA = [
  {
    numero: "62",
    de: "de 217 prefeituras",
    texto:
      "obtiveram selo de transparência no Programa Nacional de Transparência Pública. As outras 155 não foram reprovadas por não trabalhar — não apresentaram a evidência no formato pedido.",
    fonte: "PNTP Ciclo 2025 — Atricon / TCE-MA",
  },
  {
    numero: "75",
    de: "de 116 municípios avaliados",
    texto:
      "ficaram com nota zero no eixo ambiental do IEGM. Todos eles recolhem resíduo, licenciam obra e mantêm secretaria de meio ambiente. O que faltou foi registro.",
    fonte: "IEGM 2024 — TCE/MA",
  },
  {
    numero: "49,9",
    de: "média nacional",
    texto:
      "do Índice de Desenvolvimento Sustentável das Cidades, numa escala de 0 a 100. O país melhorou frente aos 46,7 do ano anterior, e ainda está longe da metade do caminho.",
    fonte: "IDSC-BR 2025",
  },
];

export type Servico = {
  id: string;
  nome: string;
  prazo: string;
  resumo: string;
  entrega: string[];
  porta?: boolean;
};

export const SERVICOS: Servico[] = [
  {
    id: "diagnostico",
    nome: "Diagnóstico de Governança",
    prazo: "15 a 30 dias",
    resumo:
      "O retrato do município em evidência, não em impressão. Sete dimensões lidas uma a uma, comparação nominal com municípios vizinhos e um plano com responsável, prazo e custo por item.",
    entrega: [
      "Relatório com fonte e data em cada afirmação",
      "Comparativo regional com municípios citados pelo nome",
      "Régua de scoring aberta — qualquer pessoa recalcula",
      "Plano de 12 meses com responsável, prazo e custo",
    ],
    porta: true,
  },
  {
    id: "lgpd",
    nome: "Adequação à LGPD",
    prazo: "60 a 90 dias",
    resumo:
      "Seis sprints quinzenais, do decreto de nomeação do encarregado ao treinamento com registro de presença. O inventário começa por Saúde, Assistência Social e Educação, onde está o dado sensível.",
    entrega: [
      "Decretos de encarregado e de comitê, publicados",
      "Inventário de tratamentos (RoPA) validado por secretaria",
      "Relatório de impacto dos tratamentos de alto risco",
      "Kit de políticas e correções no portal",
    ],
  },
  {
    id: "painel",
    nome: "Painel de Indicadores",
    prazo: "30 a 60 dias",
    resumo:
      "Doze a quinze indicadores que respondem às perguntas que o prefeito já faz na reunião de segunda-feira. Cada número com ficha assinada e origem rastreável até a fonte oficial.",
    entrega: [
      "Ficha assinada por indicador: fórmula, fonte, meta e responsável",
      "Reconciliação periódica contra o dado publicado pelo órgão",
      "Infraestrutura própria do município, com backup testado",
      "Treinamento gravado e manual de operação",
    ],
  },
  {
    id: "selos",
    nome: "Selos e Editais",
    prazo: "por ciclo",
    resumo:
      "Matriz que liga cada requisito do edital ou do selo à evidência que o comprova e ao dado que a sustenta, com cronograma reverso e folga antes do prazo final.",
    entrega: [
      "Matriz requisito → evidência → dado",
      "Cronograma reverso com folga de dez dias",
      "Acompanhamento até o protocolo",
      "Reprovação vira plano do ciclo seguinte",
    ],
  },
  {
    id: "sustentacao",
    nome: "Sustentação Mensal",
    prazo: "contrato de 12 meses",
    resumo:
      "O que foi construído continua vivo. Verificação mensal, relatório executivo de duas páginas e reunião de trinta minutos — porque sistema sem rotina volta ao estado anterior em um semestre.",
    entrega: [
      "Verificação mensal com registro",
      "Relatório executivo de duas páginas",
      "Reunião mensal de trinta minutos",
      "Escopo fechado, com exclusões explícitas",
    ],
  },
];

export const METODO = [
  {
    passo: "01",
    titulo: "Leitura do que já é público",
    texto:
      "Antes da primeira reunião, o município já foi lido em bases oficiais: índice de efetividade, transparência, dados fiscais e populacionais. A conversa começa com fatos, não com apresentação institucional.",
  },
  {
    passo: "02",
    titulo: "Coleta com quem executa",
    texto:
      "Entrevistas roteirizadas nas secretarias, auditoria de transparência item a item e levantamento documental. O que depende de verificação presencial é marcado como tal — e verificado.",
  },
  {
    passo: "03",
    titulo: "Análise separada da interpretação",
    texto:
      "A evidência fica de um lado, a leitura da consultoria do outro. O gestor pode discordar da nossa conclusão sem precisar duvidar do dado — e é isso que faz o documento sobreviver ao contraditório.",
  },
  {
    passo: "04",
    titulo: "Entrega com aceite verificável",
    texto:
      'Critérios de aceite numéricos, termo assinado e uma reunião de entrega. Nada de "relatório de qualidade": dezoito de dezoito itens verificados, com evidência datada.',
  },
];

export const PRINCIPIOS = [
  {
    titulo: "Nenhuma afirmação sem fonte e data",
    texto:
      "É o que permite ao gestor usar o documento perante o Tribunal de Contas. Sem isso, é opinião cara.",
  },
  {
    titulo: "O encarregado de dados é servidor do município",
    texto:
      "A Prisma nunca assume essa função. O art. 41 da LGPD faz do encarregado o canal com a autoridade nacional — terceirizá-lo ao fornecedor cria conflito de interesse.",
  },
  {
    titulo: "Nenhuma promessa de nota",
    texto:
      "Não prometemos que um índice vai subir. Prometemos que o que o município faz passa a estar registrado no formato que o avaliador pede.",
  },
  {
    titulo: "A autoria dos documentos é do órgão",
    texto:
      "Entregamos minuta de apoio ao ponto focal. Consultoria que redige o próprio termo de referência vira apontamento de direcionamento.",
  },
];


export const FATOS_CONTRATACAO = {
  teto: "R$ 65.492,11",
  fonteTeto: "Lei 14.133/2021, art. 75, II — valor de 2026, Decreto 12.807/2025",
};
