import React, { useState } from "react";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useBimestre } from "../../Context/resultsContext";
import { atualizarAvaliacao, getDisciplinas } from "../../database/database";

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
  const { setNota, nota } = useBimestre();
  const [modal, setModal] = useState(false);
  const [notaError, setNotaError] = useState("");

  const toggle = () => setModal(!modal);

  const handleConfirmClick = async () => {
    if (bimestre && nota) {
      setModal(false);
      const resultado = await atualizarAvaliacao(nota, id);

      const disciplinas = await getDisciplinas();
      const updatedDisciplinas = disciplinas.filter(
        (disciplinaItem: disciplinaItemProps) => {
          if (disciplinaItem.id === id) {
            return {
              resultado: {
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
          <C.NotasDiv>Notas</C.NotasDiv>
          <StyledInputComponent
            type="number"
            min="0"
            max="10"
            //@ts-ignore
            value={nota !== null ? nota : ""}
            onChange={handleNotaChange}
            notaError={notaError}
          />
        </ModalBody>
        <ModalFooter>
          <C.StyledButton onClick={handleConfirmClick}>Alterar</C.StyledButton>
        </ModalFooter>
      </C.Modal>
    </div>
  );
}

export default UpdateModalComponent;
