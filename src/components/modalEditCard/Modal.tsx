import React, { useState } from "react";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useBimestre } from "../../Context/resultsContext";
import { atualizarAvaliacao, getDisciplinas } from "../../database/database";
import StylizedButton from "../buttons/Button";
import StyledInputComponent from "../input/input";

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
  const [notaError, setNotaError] = useState("");

  const toggle = () => setModal(!modal);

  const handleDisciplinaClick = (disciplina: string) => {
    setDisciplina(disciplina);
  };

  const handleConfirmClick = async () => {
    if (bimestre && disciplina && nota) {
      setModal(false);
      const resultado = await atualizarAvaliacao(nota, disciplina, id);

      const disciplinas = await getDisciplinas();
      const updatedDisciplinas = disciplinas.filter(
        (disciplinaItem: disciplinaItemProps) => {
          if (disciplinaItem.id === id) {
            return {
              resultado: {
                disciplina: resultado.disciplina,
                nota: resultado.nota,
              },
            };
          }
        }
      );
      if (setNewValue) {
        setNewValue(updatedDisciplinas);
      }
    }
    setModal(false);
  };

  const handleNotaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newNota = inputValue !== "" ? Number(inputValue) : null;

    if (newNota !== null && (newNota < 0 || newNota > 10)) {
      setNotaError("Nota inválida. Deve estar entre 0 e 10.");
    } else {
      setNotaError("");
      //@ts-ignore
      setNota(newNota);
    }
  };

  return (
    <div>
      <div onClick={toggle}>{children}</div>
      <C.Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{bimestre}</ModalHeader>
        <ModalBody>
          <C.DisciplinaDiv>Disciplina</C.DisciplinaDiv>
          <C.ButtonsContainer>
            <StylizedButton
              color="success"
              disciplina="Biologia"
              handleDisciplinaClick={handleDisciplinaClick}
            />
            <StylizedButton
              color="info"
              disciplina="Sociologia"
              handleDisciplinaClick={handleDisciplinaClick}
            />
            <StylizedButton
              color="warning"
              disciplina="Geografia"
              handleDisciplinaClick={handleDisciplinaClick}
            />
            <StylizedButton
              color="danger"
              disciplina="Artes"
              handleDisciplinaClick={handleDisciplinaClick}
            />
          </C.ButtonsContainer>
          <C.NotasDiv>Notas</C.NotasDiv>

          <StyledInputComponent
            type="number"
            min="0"
            max="10"
            //@ts-ignore
            value={nota}
            onChange={handleNotaChange}
            notaError={notaError}
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
