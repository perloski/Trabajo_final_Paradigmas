const obtenerFechaActual = () => new Date().toLocaleDateString("es-ES");

const validarFecha = (fecha) => {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!regex.test(fecha)) return false;
  const [dia, mes, anio] = fecha.split("/").map(Number);
  const fechaObj = new Date(anio, mes - 1, dia);
  return fechaObj.getDate() === dia && fechaObj.getMonth() === mes - 1 && fechaObj.getFullYear() === anio;
};

module.exports = validarFecha;
module.exports = obtenerFechaActual;