import { useState } from "react";
import Portafolio from "../Components/portafolio";

function PortafolioPage({ portafolio, onEliminar }) {
  const [filtro, setFiltro] = useState("");

  const portafolioFiltrado = portafolio.filter((p) =>
    p.symbol.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h1>Mi Portafolio</h1>

      <input
        type="text"
        placeholder="Filtrar por ticker..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <Portafolio
        portafolio={portafolioFiltrado}
        onEliminar={onEliminar}
      />
    </div>
  );
}

export default PortafolioPage;