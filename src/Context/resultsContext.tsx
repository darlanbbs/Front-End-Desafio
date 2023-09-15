// BimestreContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

type BimestreContextType = {
  bimestre: string | null;
  disciplina: string | null;
  nota: number | null;
  setBimestre: (value: string) => void;
  setDisciplina: (value: string) => void;
  setNota: (value: number) => void;
};

const BimestreContext = createContext<BimestreContextType | undefined>(
  undefined
);

type BimestreProviderProps = {
  children: ReactNode;
};

const BimestreProvider = ({ children }: BimestreProviderProps) => {
  const [bimestre, setBimestre] = useState<string | null>(null);
  const [disciplina, setDisciplina] = useState<string | null>(null);
  const [nota, setNota] = useState<number | null>(null);

  return (
    <BimestreContext.Provider
      value={{
        bimestre,
        disciplina,
        nota,
        setBimestre,
        setDisciplina,
        setNota,
      }}
    >
      {children}
    </BimestreContext.Provider>
  );
};

const useBimestre = () => {
  const context = useContext(BimestreContext);
  if (context === undefined) {
    throw new Error("useBimestre must be used within a BimestreProvider");
  }
  return context;
};

export { BimestreProvider, useBimestre };
