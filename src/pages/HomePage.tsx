import React, { useEffect, useState } from "react";
import * as C from "./styles";
import BimestreArea from "../components/BimestreArea/BimestreArea";
import getDisciplinas from "../database/database";

interface Disciplina {
  id: string;
  disciplina: string;
  bimestre: string;
  nota: number;
  criado_em: string;
}

const HomePage = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDisciplinas();
      setDisciplinas(data);
    };

    fetchData();
  }, []);

  return (
    <C.Container fluid>
      {disciplinas.length > 0 &&
        disciplinas.map((disciplina) => (
          <BimestreArea
            id={disciplina.id}
            key={disciplina.id}
            title={disciplina.bimestre}
            disciplina={disciplina.disciplina}
            nota={disciplina.nota}
            criado_em={disciplina.criado_em}
          />
        ))}
    </C.Container>
  );
};

export default HomePage;
