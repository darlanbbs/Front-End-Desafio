import { MouseEventHandler } from "react";
import { AiFillDelete } from "react-icons/Ai";
import styled from "styled-components";

type Props = {
  [x: string]: MouseEventHandler<HTMLDivElement> | undefined;
};

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
    <DeleteIcon onClick={props.onClick}>
      <AiFillDelete />
    </DeleteIcon>
  );
};

export default DeleteIconComponent;
