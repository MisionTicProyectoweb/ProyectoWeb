import axios from 'axios';
import { useEffect } from 'react';
const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`
}
console.log(getToken());
export const obtenerVentas = async(setVentas, setEjecutarVentas = () => {}) => {

    const options = {
        method: 'GET',
        url: 'http://localhost:5000/ventas/',
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
            console.error(error);
        });
    setEjecutarVentas(false);
};

export const obtenerUsuarios = async(setVentas, setEjecutarUsuarios = () => {}) => {

    const options = {
        method: 'GET',
        url: 'http://localhost:5000/usuarios/',
        headers: {
            Authorization: getToken()
        },




    };

    await axios
        .request(options)
        .then(function(response) {
            setVentas(response.data);
            setEjecutarUsuarios(false);
        });
};

export const crearProducto = async(data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/productos/',
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
        url: 'http://localhost:5000/productos/',
        headers: {
            Authorization: getToken()
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};



export const editarProducto = async(id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/productos/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async(id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/productos/${id}/`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: getToken()
        },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
};