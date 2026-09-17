import { useState, useEffect } from "react";



function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // evita ejecutar si no hay URL

    let cancelado = false;
    const cargar = async () => {
      try {
        setCargando(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al conectar con la API");
        const json = await res.json();
        if (!cancelado) setDatos(json);
      } catch (e) {
        if (!cancelado) setError(e.message);
      } finally {
        if (!cancelado) setCargando(false);
      }
    };
    cargar();
    return () => { cancelado = true; };
  }, [url]);

  return { datos, cargando, error };
}

export default useFetch;
