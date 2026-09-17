import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// Barra de navegación principal de la aplicación
function Navbar() {

  // Obtiene el tema actual y la función para cambiarlo desde Context API
  const { tema, cambiarTema } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Stock - Finanzas</h2>

      <div className="navbar-links">

        {/* Enlace a la página de inicio */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "activo" : ""}
        >
          Inicio
        </NavLink>

        {/* Enlace a la página de búsqueda */}
        <NavLink
          to="/buscar"
          className={({ isActive }) => isActive ? "activo" : ""}
        >
          Buscar
        </NavLink>

        {/* Enlace a la página del portafolio */}
        <NavLink
          to="/portafolio"
          className={({ isActive }) => isActive ? "activo" : ""}
        >
          Portafolio
        </NavLink>

        {/* Botón para cambiar entre tema claro y oscuro */}
        <button onClick={cambiarTema}>
          {tema === "claro" ? "Modo oscuro" : "Modo claro"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;