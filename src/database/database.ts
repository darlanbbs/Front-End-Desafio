import axios from "axios";

export const getDisciplinas = async () => {
  const response = await axios.get("http://localhost:3000/disciplinas");
  return response.data;
};

export const adicionarAvaliacao = async (
  bimestre: string,
  disciplina: string,
  nota: number
) => {
  try {
    const response = await axios.post("http://localhost:3000/disciplinas", {
      bimestre,
      disciplina,
      nota,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar avaliação:", error);
  }
};
