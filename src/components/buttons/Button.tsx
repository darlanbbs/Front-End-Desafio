import styled from "styled-components";
import { Button } from "reactstrap";
type Props = {
  disciplina: string;
  handleDisciplinaClick: (disciplina: string) => void;
  color: string;
};

const StylizedButton = ({
  disciplina,
  handleDisciplinaClick,
  color,
}: Props) => {
  const StyledButton = styled(Button)`
    background-color: #e9ff1a;
    border: none;
    color: black;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  `;

  return (
    <StyledButton
      color="success"
      onClick={() => handleDisciplinaClick(disciplina)}
    >
      Biologia
    </StyledButton>
  );
};

export default StylizedButton;
