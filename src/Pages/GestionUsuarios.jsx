import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import{Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { NavBarFull } from "components/Navbar";

const GestionUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios}) => {
    /* const form = useRef(null);

    const submitForm = (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);

      const nuevoUsuarios = {};
      fd.forEach((value, key) => {
        nuevoUsuarios[key] = value;
      });

      setMostrarTabla(true);
      setUsuarios([...listaUsuarios, nuevoUsuarios]);

      toast.success("Se ha creo el usuario con éxito");
    }; */

    return (
      <div className="w-full text-center">
          <NavBarFull titulo="Gestion de Usuarios"/>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-extrabold text-gray-700">Crear nuevo usuario</h2>
            <form /* ref={form} onSubmit={submitForm} */ className="flex flex-col grid-cols-2 m-4">
                <label htmlFor="cedula">
                    Cedula
                    <input
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    name="cedula"
                    type="number"
                    min={0}
                    required
                    placeholder=""
                    />
                </label>

                <label htmlFor="nombre">
                    Nombre 
                    <input
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    name="nombre"
                    type="text"
                    required
                    placeholder=""
                    />
                </label>

                <label htmlFor="apellido">
                    Apellido
                    <input
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    name="apellido"
                    type="text"
                    required
                    placeholder=""
                    />
                </label>

                <label htmlFor="estado">
                    Estado 
                    <select
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
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
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
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
            </form>
            <button
                    onClick={() => {
                        regisUsuario();
                    }
                    }
                    type="submit"
                    className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span>Registrar Usuario</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
            </button>
            <ToastContainer position="bottom-right" margin={2} theme="colored" autoClose={3000}/>
        </div>
      </div>
    );
  };
  const regisUsuario = () => {
    toast.success("Usuario Registrado");
  }
export default GestionUsuarios
