import { deletarAvaliacao } from "../../database/database";
import DeleteIconComponent from "../icon/deleteIcon";
import * as C from "./styles";

type Props = {
  id: string;
  disciplina: string;
  nota: number;
  onDelete: any;
  AiOutlineBarChart: any;
  criado_em: string;
};

const getBackgroundColor = (disciplina: string) => {
  switch (disciplina) {
    case "Sociologia":
      return "#9B19C2";
    case "Biologia":
      return "#CC4090";
    case "Geografia":
      return "#C26719";
    case "Artes":
      return "#05A2C2";
    default:
      return "#333";
  }
};

const Card = ({
  disciplina,
  nota,
  onDelete,
  AiOutlineBarChart,
  criado_em,
  id,
}: Props) => {
  const handleDelete = async () => {
    const resultado = await deletarAvaliacao(id);

    if (resultado === "Disciplina deletada com sucesso!") {
      onDelete(id);
    }
  };

  console.log(id, disciplina, nota);

  return (
    <C.MiniCardContainer color={getBackgroundColor(disciplina)}>
      <DeleteIconComponent onClick={handleDelete} />
      <C.Title>{disciplina}</C.Title>
      <C.SubTitle>{criado_em}</C.SubTitle>
      <C.EndSection>
        <C.IconAndNote>
          <AiOutlineBarChart />
          {/* @ts-ignore */}
          <C.Note nota={nota}>{nota}</C.Note>
        </C.IconAndNote>
      </C.EndSection>
    </C.MiniCardContainer>
  );
};

export default Card;
