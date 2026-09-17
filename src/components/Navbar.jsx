import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
  const { tema, cambiarTema } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Stock - Finanzas</h2>

      <div className="navbar-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/buscar">Buscar</NavLink>
        <NavLink to="/portafolio">Portafolio</NavLink>

        <button onClick={cambiarTema}>
          {tema === "claro" ? "Modo oscuro" : "Modo claro"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;