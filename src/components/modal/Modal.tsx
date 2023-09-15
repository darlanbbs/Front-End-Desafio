import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";

type childrenProps = {
  children: React.ReactNode;
  bimestre: string;
};

function ModalComponent({ children, bimestre }: childrenProps, args: any) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div onClick={toggle}>{children}</div>
      <C.Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{bimestre}</ModalHeader>
        <ModalBody>
          <C.DisciplinaDiv>Disciplina</C.DisciplinaDiv>
          <C.ButtonsContainer>
            <C.StyledButton color="info">Sociologia</C.StyledButton>
            <C.StyledButton color="success">Biologia</C.StyledButton>
            <C.StyledButton color="warning">Geografia</C.StyledButton>
            <C.StyledButton color="danger">Artes</C.StyledButton>
          </C.ButtonsContainer>
          <C.NotasDiv>Notas</C.NotasDiv>
          <C.StyledInput type="number" min="0" max="10" />
        </ModalBody>
        <ModalFooter>
          <C.StyledButton onClick={toggle}>Confirmar</C.StyledButton>
        </ModalFooter>
      </C.Modal>
    </div>
  );
}

export default ModalComponent;
