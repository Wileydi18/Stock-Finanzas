# Stock - Finanzas

Aplicación web desarrollada con React y Vite para consultar información de acciones y administrar un portafolio personal.

## Funcionalidades

- Búsqueda de acciones por ticker.
- Consulta de precio actual, máximo y mínimo del día.
- Consumo de la API de Finnhub.
- Agregar acciones al portafolio.
- Eliminar acciones del portafolio.
- Persistencia de datos mediante localStorage.
- Navegación mediante React Router.
- Ruta dinámica para consultar el detalle de una acción.
- Página 404 para rutas no encontradas.
- Tema claro y oscuro mediante Context API.
- Filtrado de acciones dentro del portafolio.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- Finnhub API
- LocalStorage
- Context API

## Hooks utilizados

El proyecto utiliza hooks de React como:

- useState
- useEffect
- useMemo
- useCallback
- useContext

También incluye Custom Hooks:

- useFetch
- useLocalStorage

## Rutas

- `/` - Página de inicio.
- `/buscar` - Búsqueda de acciones.
- `/portafolio` - Portafolio de acciones.
- `/accion/:id` - Detalle de una acción.
- `*` - Página 404.

## Instalación

Instalar las dependencias:

npm install

Ejecutar el proyecto:

npm run dev

## Variables de entorno

Para utilizar la API de Finnhub se debe crear un archivo `.env` en la raíz del proyecto con:

VITE_FINNHUB_API_KEY=TU_API_KEY

El archivo `.env` está excluido del repositorio mediante `.gitignore` para proteger la API Key.