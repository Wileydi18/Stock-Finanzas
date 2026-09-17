// Componente encargado de recibir el ticker que escribe el usuario
// y ejecutar la búsqueda mediante las funciones recibidas por props.
function Buscador({ symbol, onSymbolChange, onBuscar }) {
  return (
    // onSubmit ejecuta la función de búsqueda sin recargar la página
    <form className="buscador" onSubmit={onBuscar}>

      {/* Input controlado por el estado del componente padre */}
      <input
        type="text"
        placeholder="Escribe el ticker (ej. NVDA, AAPL, MSFT, SMH)"
        value={symbol}
        onChange={onSymbolChange}
      />

      {/* Botón que envía el formulario */}
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Buscador;