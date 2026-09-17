function DatosAccion({ query, datos, onAgregar }) {
  return (
    <div className="datos">
      <h2>{query}</h2>

      <p>Precio actual: ${datos.c}</p>
      <p>Máximo del día: ${datos.h}</p>
      <p>Mínimo del día: ${datos.l}</p>

      <button
        className="boton-agregar"
        onClick={onAgregar}
      >
        Agregar {query} al portafolio
      </button>
    </div>
  );
}

export default DatosAccion;