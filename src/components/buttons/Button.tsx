import styled from "styled-components";
import { Button } from "reactstrap";
type Props = {
  disciplina: string;
  handleDisciplinaClick: (disciplina: string) => void;
  color: string;
};
const StyledButton = styled(Button)`
  background-color: #e9ff1a;
  border: none;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
const StylizedButton = ({
  disciplina,
  handleDisciplinaClick,
  color,
}: Props) => {
  return (
    <StyledButton
      color={color}
      onClick={() => handleDisciplinaClick(disciplina)}
    >
      {disciplina}
    </StyledButton>
  );
};

export default StylizedButton;
