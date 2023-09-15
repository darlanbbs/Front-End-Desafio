import styled from "styled-components";
import { Button as RSButton, Modal as RSModal } from "reactstrap";

export const DisciplinaDiv = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NotasDiv = styled.div`
  font-weight: bold;
  margin-top: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 16px;
`;

export const StyledButton = styled(RSButton)`
  background-color: #e9ff1a;
  border: none;
  color: black;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const Modal = styled(RSModal)`
  .modal-content {
    background-color: #fff;
    color: #000;
  }
`;
