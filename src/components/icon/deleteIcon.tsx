import { AiFillDelete } from "react-icons/Ai";
import styled from "styled-components";

type Props = {};

const DeleteIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: red;
  width: 32px;
  height: 32px;
`;

const DeleteIconComponent = (props: Props) => {
  return (
    <DeleteIcon>
      <AiFillDelete />
    </DeleteIcon>
  );
};

export default DeleteIconComponent;
