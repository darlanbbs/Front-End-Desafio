import styled from "styled-components";
import { Button as RSButton, Modal as RSModal } from "reactstrap";

export const DisciplinaDiv = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
  color: #fff;
  font-size: 18px;
`;

export const NotasDiv = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 20px;
  color: #ecedee;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 65px;
  padding: 5px;
  font-size: 16px;
  border-radius: 12px;
  background-color: transparent;
  border: #424242 1px solid;
  display: flex;
  align-items: center;
  text-align: center;

  color: #999f;
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
    background-color: #0f0f0f;
    color: #fff;
  }
`;
