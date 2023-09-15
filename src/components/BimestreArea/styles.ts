import styled from "styled-components";
import * as C from "reactstrap";

export const BimestreContainer = styled(C.Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin: 30px;
`;

export const CardArea = styled(C.Container)`
  width: 100%;
  color: #fff;
  padding: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Name = styled.h1`
  font-size: 1.2em;
  font-weight: bold;
`;

export const CardsArea = styled(C.Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 560px) {
    gap: 0px;
  }


`;
