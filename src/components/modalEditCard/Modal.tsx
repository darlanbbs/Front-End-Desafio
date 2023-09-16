import React, { useState } from "react";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useBimestre } from "../../Context/resultsContext";
import { atualizarAvaliacao, getDisciplinas } from "../../database/database";

interface disciplinaItemProps {
  id: string;
  resultado: {
    disciplina: string;
    nota: number;
  };
}
function UpdateModalComponent({
  children,
  bimestre,
  id,
  setNewValue,
}: {
  children: React.ReactNode;
  bimestre: string;
  setNewValue?: (newValue: any) => void;
  id: string;
}) {
  const { setDisciplina, setNota, disciplina, nota } = useBimestre();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDisciplinaClick = (disciplina: string) => {
    setDisciplina(disciplina);
  };

  const handleConfirmClick = async () => {
    if (bimestre && disciplina && nota) {
      setModal(false);
      const resultado = await atualizarAvaliacao(nota, disciplina, id);

      const disciplinas = await getDisciplinas();
      if (disciplinas) {
        const updatedDisciplinas = disciplinas.map(
          (disciplinaItem: disciplinaItemProps) =>
            disciplinaItem.id === id
              ? {
                  ...disciplinaItem,
                  disciplina: resultado.disciplina,
                  nota: resultado.nota,
                }
              : disciplinaItem
        );
        if (setNewValue) {
          setNewValue(updatedDisciplinas);
        }
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
      <C.Modal isOpen={modal} toggle={toggle}>
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
              color="info"
              onClick={() => handleDisciplinaClick("Sociologia")}
            >
              Sociologia
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
            value={nota}
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

export default UpdateModalComponent;
