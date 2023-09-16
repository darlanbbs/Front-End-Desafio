import styled from "styled-components";
import { Button as RSButton, Modal as RSModal } from "reactstrap";



export const NotasDiv = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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
