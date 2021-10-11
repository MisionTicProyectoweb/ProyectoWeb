import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import {NavBarFull} from 'components/Navbar';
import "react-toastify/dist/ReactToastify.css";

const GestionProductos = ({setMostrarTabla,listaProductos,setProductos}) => {
    /* 
    const form = useRef(null);
  
    const submitForm = (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
  
      const nuevoProducto = {};
      fd.forEach((value, key) => {
        nuevoProducto[key] = value;
      });
  
      setMostrarTabla(true);
      setProductos([...listaProductos, nuevoProducto]);
  
      toast.success("Se ha registrado el producto con éxito");
    }; */
    return (
       <div className="w-full text-center">
            <NavBarFull titulo="Gestion de Productos" subtitulo="Total de ventas"/>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-extrabold text-gray-700">
                Registrar nuevo producto
                </h2>
                <form /* ref={form} onSubmit={submitForm} */ className="grid grid-cols-2 m-4">
                <label htmlFor="idProducto">
                    ID Producto
                    <input
                    className="bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="idProducto"
                    type="number"
                    min={0}
                    required
                    placeholder=""
                    />
                </label>
                <label htmlFor="nombreProducto">
                    Descripción
                    <input
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="nombreProducto"
                    type="text"
                    required
                    placeholder=""
                    />
                </label>
                <label htmlFor="valorUnitario">
                    Valor Unitario
                    <input
                    className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="valorUnitario"
                    type="number"
                    min={0}
                    required
                    placeholder=""
                    />
                </label>
                <label htmlFor="estado">
                    Estado
                    <select className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="estado"
                    defaultValue={0}
                    >
                    <option disabled value={0}>Seleccione una opción </option>
                    <option>Disponible </option>
                    <option>No disponible </option>
                    </select>
                </label>
                </form>
                <button
                    onClick={() => {
                        regisProducto();
                    }
                    }
                    type="submit"
                    className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span>Registrar Producto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <ToastContainer position="bottom-right" margin={2} theme="colored" autoClose={3000}/>
            </div>
       </div>
    );
  };
  const regisProducto = () => {
    toast.success("Producto Registrado");
  }

export default GestionProductos
