import React, { useEffect, useState } from "react";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useBimestre } from "../../Context/resultsContext";
import { adicionarAvaliacao, getDisciplinas } from "../../database/database";
import StylizedButton from "../buttons/Button";
import StyledInputComponent from "../input/input";
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

function ModalCreateCard(
  { children, bimestre, setNewValue }: childrenProps,
  args: any
) {
  const { setBimestre, setDisciplina, setNota, disciplina, nota } =
    useBimestre();

  const [disciplinasSelecionadas, setDisciplinasSelecionadas] = useState<
    string[]
  >([]);

  const [modal, setModal] = useState(false);
  const [notaError, setNotaError] = useState("");
  const [disciplinaError, setDisciplinaError] = useState("");

  const toggle = () => setModal(!modal);

  const handleDisciplinaClick = (disciplina: string) => {
    setDisciplina(disciplina);
  };

  const handleConfirmClick = async () => {
    if (
      bimestre !== null &&
      disciplina !== null &&
      nota !== null &&
      nota >= 0 &&
      nota <= 10 &&
      !disciplinasSelecionadas.includes(disciplina)
    ) {
      setDisciplinaError("");
      setBimestre(bimestre);
      setModal(false);
      const resultado = await adicionarAvaliacao(bimestre, disciplina, nota);
      try {
        setNewValue((prevDisciplinas: Disciplina[]) => [
          ...prevDisciplinas,
          resultado,
        ]);
        setDisciplinasSelecionadas([...disciplinasSelecionadas, disciplina]);
      } catch (error) {
        console.error("Erro ao adicionar avaliação:", error);
      }
    } else {
      setDisciplinaError("Disciplina já selecionada no bimestre.");
    }
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
  useEffect(() => {
    (async () => {
      const data = await getDisciplinas();
      const disciplinasFiltradas = data.filter(
        (disciplinaItem: Disciplina) => disciplinaItem.bimestre === bimestre
      );
      setNewValue(disciplinasFiltradas);

      setDisciplinasSelecionadas(
        disciplinasFiltradas.map((item: Disciplina) => item.disciplina)
      );
    })();
  }, [disciplinasSelecionadas]);

  return (
    <div>
      <div onClick={toggle}>{children}</div>
      <C.Modal isOpen={modal} toggle={toggle} {...args}>
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
          {disciplinaError && (
            <div className="text-danger">{disciplinaError}</div>
          )}
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
          <C.StyledButton onClick={handleConfirmClick}>
            Confirmar
          </C.StyledButton>
        </ModalFooter>
      </C.Modal>
    </div>
  );
}

export default ModalCreateCard;
