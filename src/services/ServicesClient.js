import http from "./ConnectionHttp";

const getAll = () => {
  return http.get("/all");
};


const create = data => {
  // console.log(data, 'data')
  // const { nombre, apellido, rut, telefono, correo, tiene_tarjeta } = data;
  // const params = `nombre=${nombre}&&apellido=${apellido}&&rut=${rut}&&telefono=${telefono}&&correo=${correo}&&tiene_tarjeta=${tiene_tarjeta}`;

  return http.post("/recibePayload", data);
};


export default {
  getAll,
  create
};