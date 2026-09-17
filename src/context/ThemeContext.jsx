import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState("claro");

  const cambiarTema = () => {
    setTema((temaActual) =>
      temaActual === "claro" ? "oscuro" : "claro"
    );
  };

  return (
    <ThemeContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;