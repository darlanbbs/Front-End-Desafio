import axios from "axios";

const getDisciplinas = async () => {
  const response = await axios.get("http://localhost:3000/disciplinas");
  return response.data;
};

export default getDisciplinas;
