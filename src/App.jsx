import { useState, useEffect, useMemo, useCallback, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/UseFetch";
import useLocalStorage from "./hooks/UseLocalStorage";
import Portafolio from "./Components/portafolio";
import "./App.css";
import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import DatosAccion from "./components/DatosAccion";
import MensajeEstado from "./components/MensajeEstado";
import Inicio from "./pages/inicio";
import Buscar from "./pages/Buscar";
import PortafolioPage from "./pages/PortafolioPage";
import AccionDetalle from "./pages/AccionDetalle";
import NoEncontrado from "./pages/NoEncontrado";
import ThemeContext from "./context/ThemeContext";
import { obtenerUrlAccion } from "./utils/api";

function App() {
  // API Key utilizada para consultar la API de Finnhub
  const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
  const { tema } = useContext(ThemeContext);

  // Estado para guardar lo que escribe el usuario en el buscador
  const [symbol, setSymbol] = useState("");

  // Estado que representa el ticker que se está consultando
  const [query, setQuery] = useState("");

  /*
    useEffect con array vacío [].
    Se ejecuta una sola vez cuando el componente se monta.
    Carga AAPL como acción inicial de la aplicación.
  */
  useEffect(() => {
    const tickerInicial = "AAPL";

    setSymbol(tickerInicial);
    setQuery(tickerInicial);
  }, []);

  /*
    Custom Hook useFetch.
    Realiza la petición a la API cuando cambia la URL.
    Devuelve los datos, el estado de carga y el error.
  */
 const { datos, cargando, error } = useFetch(
  query ? obtenerUrlAccion(query, API_KEY) : null
);

  /*
    Custom Hook useLocalStorage.
    Permite guardar el portafolio en localStorage
    para conservar los datos aunque se recargue la página.
  */
  const [portafolio, setPortafolio] = useLocalStorage(
    "miPortafolio",
    []
  );

  /*
    Función que maneja el formulario de búsqueda.
    preventDefault evita que la página se recargue
    cuando el usuario realiza una búsqueda.
  */
  const buscarTicker = (e) => {
    e.preventDefault();

    if (!symbol.trim()) {
      alert("Por favor ingresa un ticker válido.");
      return;
    }

    setQuery(symbol.trim().toUpperCase());
  };

            /*
            Elimina una posición específica del portafolio.
            Recibe el objeto completo de la acción en lugar de su índice.
            Esto evita problemas cuando el portafolio se muestra ordenado.
            */
            const eliminarPosicion = useCallback(
              (posicion) => {
              const nuevoPortafolio = portafolio.filter(
              (p) => p !== posicion
            );

            setPortafolio(nuevoPortafolio);
        },
        [portafolio, setPortafolio]
      );

  /*
    Agrega la acción consultada al portafolio.
  */
  const agregarPosicion = () => {
    if (!datos || !datos.c || !query) return;

    const nuevaPosicion = {
      symbol: query,
      precio: datos.c,
    };

    setPortafolio([...portafolio, nuevaPosicion]);
  };

  /*
    useMemo memoriza el resultado de ordenar el portafolio.
    Solo vuelve a ordenar cuando cambia el portafolio.
  */
  const portafolioOrdenado = useMemo(() => {
    return [...portafolio].sort((a, b) =>
      a.symbol.localeCompare(b.symbol)
    );
  }, [portafolio]);

  /*
    Verificación para determinar si el ticker
    no tiene datos disponibles.
  */
  const tickerInvalido =
    !cargando &&
    datos &&
    Object.keys(datos).length > 0 &&
    datos.c === 0 &&
    datos.h === 0 &&
    datos.l === 0;

  return (
     <div className={`contenedor tema-${tema}`}>
      <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
  path="/buscar"
  element={
    <Buscar
      symbol={symbol}
      onSymbolChange={(e) =>
        setSymbol(e.target.value.toUpperCase())
      }
      onBuscar={buscarTicker}
      cargando={cargando}
      error={error}
      tickerInvalido={tickerInvalido}
      query={query}
      datos={datos}
      onAgregar={agregarPosicion}
    />
  }
/>
          <Route
  path="/portafolio"
  element={
    <PortafolioPage
      portafolio={portafolioOrdenado}
      onEliminar={eliminarPosicion}
    />
  }
/>
          <Route path="/accion/:id" element={<AccionDetalle />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
        

      
    </div>
  );
}

export default App;



