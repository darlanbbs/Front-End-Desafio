import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useBimestre } from "./../../Context/resultsContext";

type childrenProps = {
  children: React.ReactNode;
  bimestre: string;
};

function ModalComponent({ children, bimestre }: childrenProps, args: any) {
  const { setBimestre, setDisciplina, setNota, disciplina, nota } =
    useBimestre();
  const [modal, setModal] = useState(false);
  console.log(bimestre, disciplina, nota);

  const toggle = () => setModal(!modal);

  const handleDisciplinaClick = (disciplina: string) => {
    setDisciplina(disciplina);
  };

  const handleConfirmClick = () => {
    setBimestre(bimestre);
    setModal(false);
  };

  const handleNotaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNota = Number(event.target.value);
    setNota(newNota);
  };

  return (
    <div>
      <div onClick={toggle}>{children}</div>
      <C.Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{bimestre}</ModalHeader>
        <ModalBody>
          <C.DisciplinaDiv>Disciplina</C.DisciplinaDiv>
          <C.ButtonsContainer>
            <C.StyledButton
              color="success"
              onClick={() => handleDisciplinaClick("Biologia")}
            >
              Biologia
            </C.StyledButton>
            <C.StyledButton
              color="warning"
              onClick={() => handleDisciplinaClick("Geografia")}
            >
              Geografia
            </C.StyledButton>
            <C.StyledButton
              color="danger"
              onClick={() => handleDisciplinaClick("Artes")}
            >
              Artes
            </C.StyledButton>
          </C.ButtonsContainer>
          <C.NotasDiv>Notas</C.NotasDiv>
          <C.StyledInput
            type="number"
            min="0"
            max="10"
            onChange={handleNotaChange}
          />
        </ModalBody>
        <ModalFooter>
          <C.StyledButton onClick={handleConfirmClick}>
            Confirmar
          </C.StyledButton>
        </ModalFooter>
      </C.Modal>
    </div>
  );
}

export default ModalComponent;
