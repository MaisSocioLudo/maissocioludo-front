export interface Tema {
  id: string;
  nome: string;
  cor: string;
}

export const temas: Tema[] = [
  {
    id: "introducao_sociologia",
    nome: "Introdução à Sociologia",
    cor: "#eab91f"
  },
  {
    id: "dominacao_masculina",
    nome: "Gênero e Dominação Masculina",
    cor: "",
  
  },
  {
    id: "karl_marx",
    nome: "Karl Marx",
    cor: "#c52128",
  },

];

export function getTemaById(id: string) {
  return temas.find((tema) => tema.id === id);
}