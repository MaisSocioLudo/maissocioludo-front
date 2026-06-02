export interface Tema {
  id: string;
  nome: string;
  cor: string;
}

export const temas: Tema[] = [
  {
    id: "karl_marx",
    nome: "Karl Marx",
    cor: "#C02A3A",
  },
  {
    id: "max_weber",
    nome: "Max Weber",
    cor: "#C02A3A"
  },
  {
    id: "emile_durkheim",
    nome: "Émile Durkheim",
    cor: "#C02A3A"
  },
  {
    id: "introducao_sociologia",
    nome: "Introdução à Sociologia",
    cor: "#F7B608"
  },
  {
    id: "ciencia_politica",
    nome: "Ciência Política",
    cor: "#F7B608"
  },
  {
    id: "movimentos_sociais",
    nome: "Movimentos Sociais",
    cor: "#F7B608"
  },
  {
    id: "sociedade_informacional",
    nome: "Sociedade Informacional",
    cor: "#2DAB5C"
  },
    {
    id: "ideologia",
    nome: "Ideologia",
    cor: "#2DAB5C"
  },
  {
    id: "antropologia",
    nome: "Antropologia",
    cor: "#2DAB5C"
  },

  {
    id: "cultura",
    nome: "Cultura",
    cor: "#2DAB5C"
  },
  {
    id: "povos_indigenas",
    nome: "Povos Indígenas",
    cor: "#2DAB5C"
  },
  {
    id: "religiosidade",
    nome: "Religiosidade",
    cor: "#2DAB5C"
  },
    {
    id: "sociologia_ambiental",
    nome: "Sociologia Ambiental",
    cor: "#2DAB5C"
  },
  {
    id: "capitalismo",
    nome: "Capitalismo",
    cor: "#0267B2"
  },
  {
    id: "diversidade_sexual",
    nome: "Diversidade Sexual",
    cor: "#0267B2"
  },
  {
    id: "dominacao_masculina",
    nome: "Dominação Masculina",
    cor: "#0267B2"
  },
  {
    id: "racismo",
    nome: "Racismo",
    cor: "#0267B2"
  },
  {
    id: "trabalho",
    nome: "Trabalho",
    cor: "#0267B2"
  }
];

export function getTemaById(id: string) {
  return temas.find((tema) => tema.id === id);
}