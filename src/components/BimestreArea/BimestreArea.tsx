import * as C from "./styles";
import Card from "../cards/Card";
import { AiOutlinePlus, AiOutlineBarChart } from "react-icons/Ai";
import { useState, useEffect } from "react";
import ModalComponent from "../modal/Modal";
import { getDisciplinas } from "../../database/database";

interface Disciplina {
  id: string;
  disciplina: string;
  bimestre: string;
  nota: number;
  criado_em: string;
}

const BimestreArea = ({ bimestre }: Disciplina) => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  const handleDelete = (id: string) => {
    setDisciplinas((prevDisciplinas) =>
      prevDisciplinas.filter((disciplina) => disciplina.id !== id)
    );
  };

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const data = await getDisciplinas();
        setDisciplinas(data);
      } catch (error) {
        console.error("Erro ao obter disciplinas:", error);
      }
    };

    fetchDisciplinas();
  }, []);

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
