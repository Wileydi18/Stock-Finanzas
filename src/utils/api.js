// Construye la URL para consultar una acción en la API de Finnhub
export function obtenerUrlAccion(symbol, apiKey) {
  return `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
}