import { memo } from "react";


const Portafolio = memo(function Portafolio({ portafolio, onEliminar }) {
  return (
    <>
      <h3>Mi Portafolio</h3>

      <ul className="lista-portafolio">
        {portafolio.map((p, i) => (
          <li key={i} className="item-portafolio">
            <span className="texto-portafolio">
              {p.symbol} comprado a ${p.precio || "—"}
            </span>

            <button
              className="boton-eliminar"
              onClick={() => onEliminar(p)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
});

export default Portafolio;