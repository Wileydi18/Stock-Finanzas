function MensajeEstado({ tipo, mensaje }) {
  return (
    <p className={`mensaje-${tipo}`}>
      {mensaje}
    </p>
  );
}

export default MensajeEstado;