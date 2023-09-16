import * as C from "./styles";
import Card from "../cards/Card";
import { AiOutlinePlus, AiOutlineBarChart } from "react-icons/Ai";
import { useState } from "react";
import ModalCreateCard from "../modalCreateCard/Modal";

interface Disciplina {
  id: string;
  disciplina: string;
  bimestre: string;
  nota: number;
  criado_em: string;
  atualizado_em: string;
}

const BimestreArea = ({ bimestre }: Disciplina) => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const handleDelete = (id: string) => {
    setDisciplinas((prevDisciplinas) =>
      prevDisciplinas.filter((disciplina) => disciplina.id !== id)
    );
  };

  return (
    <C.BimestreContainer>
      <C.CardArea fluid="xl">
        <C.Name>{bimestre}</C.Name>
        <ModalCreateCard
          bimestre={bimestre}
          key={bimestre}
          setNewValue={setDisciplinas}
        >
          <C.LaunchButton>
            Lançar Nota
            <AiOutlinePlus />
          </C.LaunchButton>
        </ModalCreateCard>
      </C.CardArea>
      <C.CardContainer fluid="xl">
        {disciplinas.length > 0 &&
          disciplinas.map((disciplinaItem) => (
            <C.CardsArea key={disciplinaItem.id}>
              <Card
                setNewValue={setDisciplinas}
                atualizado_em={disciplinaItem.atualizado_em}
                key={disciplinaItem.id}
                disciplina={disciplinaItem.disciplina}
                id={disciplinaItem.id}
                nota={disciplinaItem.nota}
                bimestre={disciplinaItem.bimestre}
                onDelete={handleDelete}
                AiOutlineBarChart={AiOutlineBarChart}
              />
            </C.CardsArea>
          ))}
      </C.CardContainer>
    </C.BimestreContainer>
  );
};

export default BimestreArea;
