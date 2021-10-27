import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getToken } from "utils/api";
import "react-toastify/dist/ReactToastify.css";
import { NavBarFull } from "components/Navbar";
import axios from "axios";

const baseURL = "https://tranquil-spire-34546.herokuapp.com"
//const baseURL = "http://localhost:5000"

const GestionClientes = () => {
    
    return (
      <div className="w-full text-center">
          <NavBarFull titulo="Gestion de Clientes"/>
          <CrearCliente/>          
      </div>
    );
  };

const CrearCliente = () => {
  
    const form = useRef(null);
  
    const submitForm = async (e) => {e.preventDefault();
      const fd = new FormData(form.current);
      const nuevoClientes = {};
      fd.forEach((value, key) => {
        nuevoClientes[key] = value;
      });

      console.log("entra")
  
      const options = {
        method: "POST",
        url: `${baseURL}/clientes/nuevo/`,
        headers: { "Content-Type": "application/json",
            Authorization: getToken() },
        data: {
          cedula: nuevoClientes.cedula,
          nombre: nuevoClientes.nombre,
          apellido: nuevoClientes.apellido,
          correo: nuevoClientes.correo,
          tel: nuevoClientes.tel
        },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success("Se ha agregado el Cliente con éxito");
          e.target.reset();           
        })
        .catch(function (error) {
          console.error(error);
          toast.error("Error creando un Cliente");
        });
        
    }; 
    return (
    <div className="flex flex-col items-center justify-center">
    <h2 className="text-2xl font-extrabold text-gray-700">Crear nuevo Cliente</h2>
    <form ref={form} onSubmit={submitForm} className="flex flex-col grid-cols-2 m-4">
        <label htmlFor="cedula">
            Cedula
            <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="cedula"
            type="text"
            min={0}
            required
            />
        </label>
  
        <label htmlFor="nombre">
            Nombre 
            <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="nombre"
            type="text"
            required
            />
        </label>
  
        <label htmlFor="apellido">
            Apellido
            <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="apellido"
            type="text"
            required
            />
        </label>
        <label htmlFor="correo">
            Correo
            <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="correo"
            type="text"
            required
            />
        </label>
        <label htmlFor="tel">
            Telefono
            <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="tel"
            type="text"
            required
            />
        </label>
        <button
          type="submit"
          className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span>Registrar Cliente</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
    </form>
    <ToastContainer position="bottom-right" margin={2} theme="colored" autoClose={3000}/>
  </div>
    );
  };

export default GestionClientes
