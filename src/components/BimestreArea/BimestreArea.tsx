import * as C from "./styles";
import Card from "../cards/Card";
import { AiOutlinePlus, AiOutlineBarChart, AiFillDelete } from "react-icons/Ai";
import styled from "styled-components";

type Props = {
  Bimestre: string;
};

const BimestreArea = ({ Bimestre }: Props) => {
  const TrashIcon = styled(AiFillDelete)`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    color: red;
    width: 32px;
    height: 32px;
  `;

  function onDelete() {
    console.log("teste");
  }

  return (
    <>
      <C.BimestreContainer>
        <C.CardArea fluid="xl">
          <C.Name>{Bimestre}</C.Name>
          <C.LaunchButton>
            Lançar Nota
            <AiOutlinePlus />
          </C.LaunchButton>
        </C.CardArea>
        <C.CardsArea>
          <Card
            AiOutlineBarChart={AiOutlineBarChart}
            TrashIcon={TrashIcon}
            onDelete={onDelete}
            grade={5}
            subject="Artes"
          />
          <Card
            AiOutlineBarChart={AiOutlineBarChart}
            TrashIcon={TrashIcon}
            onDelete={onDelete}
            grade={5}
            subject="Artes"
          />
          <Card
            AiOutlineBarChart={AiOutlineBarChart}
            TrashIcon={TrashIcon}
            onDelete={onDelete}
            grade={5}
            subject="Artes"
          />
          <Card
            AiOutlineBarChart={AiOutlineBarChart}
            TrashIcon={TrashIcon}
            onDelete={onDelete}
            grade={5}
            subject="Artes"
          />
        </C.CardsArea>
      </C.BimestreContainer>
    </>
  );
};

export default BimestreArea;
