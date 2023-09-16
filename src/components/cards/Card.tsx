import { deletarAvaliacao } from "../../database/database";
import DeleteIconComponent from "../icon/deleteIcon";
import UpdateModalComponent from "../modalEditCard/Modal";
import * as C from "./styles";
import { useState } from "react";
type Props = {
  id: string;
  disciplina: string;
  nota: number;
  onDelete: any;
  AiOutlineBarChart: any;
  atualizado_em: string;
  bimestre: string;
  setNewValue: any;
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
  id,
  atualizado_em,
  bimestre,
  setNewValue,
}: Props) => {
  const [disciplinasExcluidas, setDisciplinasExcluidas] = useState([]);

  const handleDelete = async () => {
    const resultado = await deletarAvaliacao(id);

    if (resultado === "Disciplina deletada com sucesso!") {
      onDelete(id);

    }
  };

  return (
    <UpdateModalComponent
      key={id}
      bimestre={bimestre}
      id={id}
      setNewValue={setNewValue}
    >
      <C.MiniCardContainer color={getBackgroundColor(disciplina)}>
        <DeleteIconComponent onClick={handleDelete} />
        <C.Title>{disciplina}</C.Title>
        <C.SubTitle>{atualizado_em}</C.SubTitle>
        <C.EndSection>
          <C.IconAndNote>
            <AiOutlineBarChart />
            {/* @ts-ignore */}
            <C.Note nota={nota}>{nota}</C.Note>
          </C.IconAndNote>
        </C.EndSection>
      </C.MiniCardContainer>
    </UpdateModalComponent>
  );
};

export default Card;
