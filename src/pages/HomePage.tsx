import * as C from "./styles";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineBarChart, AiFillDelete } from "react-icons/Ai";
import Card from "../components/cards/Card";

const TrashIcon = styled(AiFillDelete)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: red;
  width: 32px;
  height: 32px;
`;

type Props = {};
function onDelete() {
  console.log("teste");
}
const HomePage = (props: Props) => {
  return (
    <C.Container fluid>
      <C.CardArea fluid="xl">
        <C.Name>Bimestre 1 </C.Name>
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
          grade={7.6}
          subject="Sociologia"
        />
        <Card
          AiOutlineBarChart={AiOutlineBarChart}
          TrashIcon={TrashIcon}
          onDelete={onDelete}
          grade={8.5}
          subject="Biologia"
        />
        <Card
          AiOutlineBarChart={AiOutlineBarChart}
          TrashIcon={TrashIcon}
          onDelete={onDelete}
          grade={0}
          subject="Geografia"
        />
      </C.CardsArea>
    </C.Container>
  );
};

export default HomePage;
