import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getToken } from "utils/api";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { NavBarFull } from "components/Navbar";
import axios from "axios";


const GestionUsuarios = () => {
    
    return (
      <div className="w-full text-center">
          <NavBarFull titulo="Gestion de Usuarios"/>
          <CrearUsuario/>          
      </div>
    );
  };

const CrearUsuario = () => {
  
    const form = useRef(null);
  
    const submitForm = async (e) => {e.preventDefault();
      const fd = new FormData(form.current);
      const nuevoUsuarios = {};
      fd.forEach((value, key) => {
        nuevoUsuarios[key] = value;
      });
  
      const options = {
        method: "POST",
        url: "http://localhost:5000/usuarios/nuevo/",
        headers: { "Content-Type": "application/json",
        Authorization: getToken() },
        data: {
          ccUsuario: nuevoUsuarios.ccUsuario,
          nombre: nuevoUsuarios.nombre,
          apellido: nuevoUsuarios.apellido,
          correo: nuevoUsuarios.correo,
          estado: nuevoUsuarios.estado,
          rol: nuevoUsuarios.rol,
        },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success("Se ha agregado el usuario con éxito");
          e.target.reset();           
        })
        .catch(function (error) {
          console.error(error);
          toast.error("Error creando un usuario");
        });
        
    }; 
    return (
    <div className="flex flex-col items-center justify-center">
    <h2 className="text-2xl font-extrabold text-gray-700 my-6">Crear nuevo usuario</h2>
        <form ref={form} onSubmit={submitForm} className="flex-col items-center justify-center grid grid-cols-2 m-6 my-4">
        <label htmlFor="ccUsuario">
            Cedula
            <input
              className=" w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="ccUsuario"
            type="text"
            min={0}
            required
            placeholder=""
            />
        </label>
  
        <label htmlFor="nombre">
            Nombre 
            <input
              className=" w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="nombre"
            type="text"
            required
            placeholder=""
            />
        </label>
  
        <label htmlFor="apellido">
            Apellido
            <input
              className=" w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="apellido"
            type="text"
            required
            placeholder=""
            />
        </label>
        <label htmlFor="correo">
            Correo
            <input
              className="w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="correo"
            type="text"
            required
            placeholder=""
            />
        </label>
  
        <label htmlFor="estado">
            Estado 
            <select
              className=" w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200  rounded-lg appearance-none relative block focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="estado"
            defaultValue={0}
            >
            <option disabled value={0}>
                Seleccione una opción{" "}
            </option>
            <option>Autorizado</option>
            <option>No autorizado</option>
            <option>Pendiente</option>
            </select>
        </label>
  
        <label htmlFor="rol">
            Rol
            <select
              className="w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            name="rol"
            defaultValue={0}
            >
            <option disabled value={0}>
                Seleccione una opción{" "}
            </option>
            <option>Vendedor</option>
            <option>Administardor</option>
            </select>
        </label>
    
          <button
            type="submit"
              className="w-44 mr-4 my-5 ml-5 p-2 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="mx-2" >Registrar Usuario</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <Link to="/admin/usuarios/listausuario">
            <button
                className="w-44 mr-4 my-5 ml-5 p-2 flex items-center justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="mx-2">Atras</span>
              <span className=" fas fa-angle-double-left "></span>
            </button>
          </Link>
    </form>
    <ToastContainer position="bottom-right" margin={2} theme="colored" autoClose={3000}/>
  </div>
    );
  };

export default GestionUsuarios
