import * as C from "reactstrap";
import styled from "styled-components";

export const Container = styled(C.Container)`
  background-color: #0f0f0f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
`;

export const CardArea = styled(C.Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 10px;
  margin-bottom: 30px;
`;

export const LaunchButton = styled.button`
  background-color: #e9ff1a;
  color: #333;
  padding: 16px 32px;

  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  svg {
    margin-left: 5px;
    font-size: 25px;
  }
`;

export const Name = styled.div`
  font-size: 1.2em;
`;

export const CardsArea = styled(C.Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;
