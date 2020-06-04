export const initialClientState = {
  nombre: "",
  apellido: "",
  rut: "",
  telefono: "",
  correo: "",
  sucursal: "",
  tiene_tarjeta: false
};

export const dataFill = (data) => ({
  nombre: data.nombre,
  apellido: data.apellido,
  rut: data.rut,
  telefono: data.telefono,
  correo: data.correo,
  sucursal: data.sucursal,
  tiene_tarjeta: data.tiene_tarjeta
});