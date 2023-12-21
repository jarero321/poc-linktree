import React, { useState } from "react";

// Definimos el tipo del estado compartido
interface SharedState {
  primaryColor?: string;
  secondaryColor?: string;
  thirdColor?: string;
  typography?: string;
  typographySecondary?: string;
}

// Creamos un contexto con un valor inicial
export const SharedStateContext = React.createContext<
  | {
      state: SharedState;
      setState: React.Dispatch<React.SetStateAction<SharedState>>;
    }
  | undefined
>(undefined);

// Creamos un provider para el contexto
export const SharedStateProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<SharedState>({
    primaryColor: "",
    secondaryColor: "",
    thirdColor: "",
    typography: "",
    typographySecondary: "",
  });

  return (
    <SharedStateContext.Provider value={{ state, setState: setState }}>
      {children}
    </SharedStateContext.Provider>
  );
};
