// StyledInputComponent.tsx
import React from "react";
import styled from "styled-components";
interface StyledInputProps {
  type: string;
  min: string;
  max: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  notaError: string;
}
const StyledInput = styled.input`
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
const StyledInputComponent: React.FC<StyledInputProps> = ({
  type,
  min,
  max,
  value,
  onChange,
  notaError,
}) => {
  return (
    <>
      <StyledInput
        type={type}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      {notaError && <div style={{ color: "red" }}>{notaError}</div>}
    </>
  );
};

export default StyledInputComponent;
