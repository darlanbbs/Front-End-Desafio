import axios from "axios";

const getDisciplinas = async () => {
  const response = await axios.get("http://localhost:3000/disciplinas");
  console.log(response.data);
  return response.data;
};

export default getDisciplinas;
