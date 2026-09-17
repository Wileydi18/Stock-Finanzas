import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

function AccionDetalle() {
  const { id } = useParams();

  const API_KEY = "dajik79r01qhhp59fs10dajik79r01qhhp59fs1g";

  const { datos, cargando, error } = useFetch(
    `https://finnhub.io/api/v1/quote?symbol=${id}&token=${API_KEY}`
  );

  if (cargando) {
    return <p>Cargando información de {id}...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="datos">
      <h1>Detalle de la acción</h1>

      <h2>{id}</h2>

      {datos && (
        <>
          <p>Precio actual: ${datos.c}</p>
          <p>Máximo del día: ${datos.h}</p>
          <p>Mínimo del día: ${datos.l}</p>
        </>
      )}
    </div>
  );
}

export default AccionDetalle;