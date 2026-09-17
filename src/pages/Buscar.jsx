import Buscador from "../components/Buscador";
import DatosAccion from "../components/DatosAccion";
import MensajeEstado from "../components/MensajeEstado";

function Buscar({
  symbol,
  onSymbolChange,
  onBuscar,
  cargando,
  error,
  tickerInvalido,
  query,
  datos,
  onAgregar,
}) {
  return (
    <div>
      <h1>Buscar acciones</h1>

      <Buscador
        symbol={symbol}
        onSymbolChange={onSymbolChange}
        onBuscar={onBuscar}
      />

      {cargando && (
        <MensajeEstado
          tipo="cargando"
          mensaje="Cargando..."
        />
      )}

      {error && (
        <MensajeEstado
          tipo="error"
          mensaje={`Error: ${error}`}
        />
      )}

      {tickerInvalido && query && (
        <MensajeEstado
          tipo="error"
          mensaje={`El ticker ${query} no es válido o no tiene datos disponibles.`}
        />
      )}

      {!tickerInvalido && datos && query && (
        <DatosAccion
          query={query}
          datos={datos}
          onAgregar={onAgregar}
        />
      )}
    </div>
  );
}

export default Buscar;