import axios from 'axios';

export const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}
console.log(getToken());

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

export const consultarVentas = async (id, setVentas, setEjecutarVentas = () => {}) => {
  const options = {
     method: 'GET', 
     url: `http://localhost:5000/ventas/${id}`,
     headers: {'Content-Type': 'application/json'},
     data: {id: id} };
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

export const consultarClientes = async (cedula, setClientes, setEjecutarClientes = () => {}) => {
  const options = {
     method: 'GET', 
     url: `http://localhost:5000/Clientes/${cedula}`,
     headers: {'Content-Type': 'application/json'},
     data: {id: cedula} };
  await axios
    .request(options)
    .then(function (response) {
      setClientes(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarClientes(false);
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

export const obtenerclientes = async (setVentas, setEjecutarClientes = () => { }) => {
  const options = { method: 'GET', url: 'http://localhost:5000/Clientes/' };
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
      setEjecutarClientes(false);
    });
};

export const obtenerdatosUsuario = async(successCallback, errorCallback) => {
  const options = {
      method: 'GET',
      url: 'http://localhost:5000/usuarios/self',
      headers: {
          Authorization: getToken() //3. ENVIARLE EL TOKEN AL BACKEN 
      }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

