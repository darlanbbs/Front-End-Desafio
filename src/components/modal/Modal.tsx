import React, { useEffect, useState } from "react";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useBimestre } from "./../../Context/resultsContext";
import { adicionarAvaliacao, getDisciplinas } from "./../../database/database";
type childrenProps = {
  children: React.ReactNode;
  bimestre: string;
  setNewValue: any;
};

interface Disciplina {
  disciplina: string;
  bimestre: string;
  nota: number;
  criado_em: string;
  id: string;
}

function ModalComponent(
  { children, bimestre, setNewValue }: childrenProps,
  args: any
) {
  const { setBimestre, setDisciplina, setNota, disciplina, nota } =
    useBimestre();
  useEffect(() => {
    (async () => {
      const data = await getDisciplinas();
      const disciplinasFiltradas = data.filter(
        (disciplinaItem: Disciplina) => disciplinaItem.bimestre === bimestre
      );
      setNewValue(disciplinasFiltradas);
    })();
  }, [bimestre]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDisciplinaClick = (disciplina: string) => {
    setDisciplina(disciplina);
  };

  const handleConfirmClick = async () => {
    if (bimestre !== null && disciplina !== null && nota !== null) {
      setBimestre(bimestre);
      setModal(false);
      const resultado = await adicionarAvaliacao(bimestre, disciplina, nota);
      console.log(resultado);
      try {
        setNewValue((prevDisciplinas: Disciplina[]) => [
          ...prevDisciplinas,
          resultado,
        ]);
      } catch (error) {
        console.error("Erro ao adicionar avaliação:", error);
      }
    }
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
