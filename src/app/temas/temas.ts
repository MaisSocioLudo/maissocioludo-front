export interface Tema {
  id: string;
  nome: string;
  cor: string;
  introducao: string;
}

export const temas: Tema[] = [
  {
    id: "introducao_sociologia",
    nome: "Introdução à Sociologia",
    cor: "#eab91f",
    introducao: "Uma breve descrição",
  },
];

export function getTemaById(id: string) {
  return temas.find((tema) => tema.id === id);
}