import * as C from "./styles";
import Card from "../cards/Card";
import { AiOutlinePlus, AiOutlineBarChart } from "react-icons/Ai";
import DeleteIconComponent from "../icon/deleteIcon";

type Props = {
  title: string;
  id: string;
  disciplina: string;
  nota: number;
  criado_em: string;
};

const BimestreArea = ({ title, id, disciplina, nota, criado_em }: Props) => {
  function onDelete() {
    console.log("teste");
  }

  return (
    <>
      <C.BimestreContainer>
        <C.CardArea fluid="xl">
          <C.Name>{title}</C.Name>
          <C.LaunchButton>
            Lançar Nota
            <AiOutlinePlus />
          </C.LaunchButton>
        </C.CardArea>
        <C.CardsArea>
          <Card
            key={id}
            AiOutlineBarChart={AiOutlineBarChart}
            onDelete={onDelete}
            grade={nota}
            subject={disciplina}
            title={title}
            criado_em={criado_em}
          />
        </C.CardsArea>
      </C.BimestreContainer>
    </>
  );
};

export default BimestreArea;
