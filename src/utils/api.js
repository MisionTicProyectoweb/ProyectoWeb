import axios from 'axios';

const baseURL = "https://tranquil-spire-34546.herokuapp.com"
//const baseURL = "http://localhost:5000"

export const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`
} 

export const obtenertablaventas = async(successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/ventas/`,
        headers: {
            Authorization: getToken()
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async(setVentas, setEjecutarVentas = () => {}) => {

    const options = {
        method: 'GET',
        url: `${baseURL}/ventas/`,
        headers: {
            Authorization: getToken()
        },
    };

    await axios
        .request(options)
        .then(function(response) {
            setVentas(response.data);
        })
        .catch(function(error) {
            return error;
        });
    setEjecutarVentas(false);
};

export const obtenerUsuarios = async(setUsuarios, setEjecutarUsuarios = () => {}) => {

    const options = {
        method: 'GET',
        url: `${baseURL}/usuarios/`,
        headers: {
            Authorization: getToken()
        },

    };

    await axios
        .request(options)
        .then(function(response) {
            setUsuarios(response.data);
            setEjecutarUsuarios(false);
        });
};

export const crearProducto = async(data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: `${baseURL}/productos/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async(id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/productos/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerProductos = async(successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/productos/`,
        headers: {
            Authorization: getToken()
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async(id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${baseURL}/productos/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtenerdatosUsuario = async(successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/usuarios/self`,
        headers: {
            Authorization: getToken() //3. ENVIARLE EL TOKEN AL BACKEN 
        }
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerclientes = async(setClientes, setEjecutarClientes = () => {}) => {
    const options = {
        method: 'GET',
        url: `${baseURL}/clientes/`,
        headers: {
            Authorization: getToken()
        }
    };
    await axios
        .request(options)
        .then(function(response) {
            setClientes(response.data);
            setEjecutarClientes(false);
        });
};

export const eliminarventa = async(id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `${baseURL}/ventas/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};
export const editarventa = async(id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/ventas/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};