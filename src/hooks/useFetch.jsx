import { useState, useEffect } from "react";

// Custom Hook encargado de realizar peticiones a una API
function useFetch(url) {

  // Estados para controlar los datos, la carga y los errores
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    // Evita realizar la petición si no existe una URL
    if (!url) return;

    let cancelado = false;

    // Función asíncrona que realiza la petición
    const cargar = async () => {
      try {
        setCargando(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Error al conectar con la API");
        }

        const json = await res.json();

        if (!cancelado) {
          setDatos(json);
        }

      } catch (e) {
        if (!cancelado) {
          setError(e.message);
        }

      } finally {
        if (!cancelado) {
          setCargando(false);
        }
      }
    };

    cargar();

    // Evita actualizar el estado si el componente se desmonta
    return () => {
      cancelado = true;
    };

  }, [url]);

  return { datos, cargando, error };
}

export default useFetch;
