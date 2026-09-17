import { createContext, useState } from "react";

// Crea el contexto que permitirá compartir el tema en la aplicación
const ThemeContext = createContext();

// Proveedor que permite que los componentes hijos accedan al tema
export function ThemeProvider({ children }) {

  // Estado global que guarda el tema actual
  const [tema, setTema] = useState("claro");

  // Cambia entre el tema claro y el tema oscuro
  const cambiarTema = () => {
    setTema((temaActual) =>
      temaActual === "claro" ? "oscuro" : "claro"
    );
  };

  // Comparte el tema y la función cambiarTema con los componentes hijos
  return (
    <ThemeContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;