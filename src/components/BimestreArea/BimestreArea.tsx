import * as C from "./styles";
import Card from "../cards/Card";
import { AiOutlinePlus, AiOutlineBarChart } from "react-icons/Ai";
import { getDisciplinas } from "../../database/database";
import { useEffect, useState } from "react";
import ModalComponent from "../modal/Modal";

interface Disciplina {
  id: string;
  disciplina: string;
  bimestre: string;
  nota: number;
  criado_em: string;
}

const BimestreArea = ({ bimestre }: Disciplina) => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  function onDelete() {
    console.log("teste");
  }

  return (
    <C.BimestreContainer>
      <C.CardArea fluid="xl">
        <C.Name>{bimestre}</C.Name>
        <ModalComponent
          bimestre={bimestre}
          key={bimestre}
          setNewValue={setDisciplinas}
        >
          <C.LaunchButton>
            Lançar Nota
            <AiOutlinePlus />
          </C.LaunchButton>
        </ModalComponent>
      </C.CardArea>
      <C.CardContainer fluid="xl">
        {disciplinas.length > 0 &&
          disciplinas.map((disciplinaItem) => (
            <C.CardsArea key={disciplinaItem.id}>
              <Card
                key={disciplinaItem.id}
                disciplina={disciplinaItem.disciplina}
                id={disciplinaItem.id}
                nota={disciplinaItem.nota}
                criado_em={disciplinaItem.criado_em}
                onDelete={onDelete}
                AiOutlineBarChart={AiOutlineBarChart}
              />
            </C.CardsArea>
          ))}
      </C.CardContainer>
    </C.BimestreContainer>
  );
};

export default BimestreArea;
