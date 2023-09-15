import * as C from "./styles";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineBarChart, AiFillDelete } from "react-icons/Ai";

const TrashIcon = styled(AiFillDelete)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

type Props = {};

const HomePage = (props: Props) => {
  return (
    <C.Container fluid>
      <C.CardArea fluid="xl">
        <C.Name>Bimestre</C.Name>
        <C.LaunchButton>
          Lançar Nota
          <AiOutlinePlus />
        </C.LaunchButton>
      </C.CardArea>
    </C.Container>
  );
};

export default HomePage;
