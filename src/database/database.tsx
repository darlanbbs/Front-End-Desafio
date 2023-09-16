import axios from "axios";

export const getDisciplinas = async () => {
  const response = await axios.get("http://localhost:3000/disciplinas");
  console.log(response.data);
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

export const deletarAvaliacao = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/disciplinas/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar avaliação:", error);
  }
};
