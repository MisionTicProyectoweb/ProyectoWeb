import axios from 'axios';

export const obtenerVentas = async (setVentas, setEjecutarVentas = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarVentas(false);
};

export const obtenerUsuarios = async (setVentas, setEjecutarUsuarios = () => { }) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
      setEjecutarUsuarios(false);
    });
};
