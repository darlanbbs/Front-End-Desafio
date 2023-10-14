import axios from "axios";

export const getDisciplinas = async () => {
  const response = await axios.get(
    "https://disciplinas-api.onrender.com/disciplinas"
  );
  return response.data;
};

export const adicionarAvaliacao = async (
  bimestre: string,
  disciplina: string,
  nota: number
) => {
  try {
    const response = await axios.post(
      "https://disciplinas-api.onrender.com/disciplinas",
      {
        bimestre,
        disciplina,
        nota,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar avaliação:", error);
  }
};

export const deletarAvaliacao = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://disciplinas-api.onrender.com/disciplinas/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar avaliação:", error);
  }
};

export const atualizarAvaliacao = async (
  nota: number,

  id?: string
) => {
  try {
    const response = await axios.put(
      `https://disciplinas-api.onrender.com/disciplinas/${id}`,
      {
        nota,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar avaliação:", error);
    throw new Error("Erro ao atualizar avaliação");
  }
};
