import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import {NavBarFull} from 'components/Navbar';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { crearProducto } from "utils/api";

const GestionProductos = () => {
  const [productos, setProductos] = useState([]);
  return (
    <div className="w-full text-center">
      <NavBarFull titulo="Gestion de productos"/>
      <div>
        <FormularioProductos
          listaProductos={productos}
          setProductos={setProductos}
        />

        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

const FormularioProductos = () => {
  
  const form = useRef(null);

  const submitForm = async (e) => {e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    await crearProducto(
      {
        nombreProducto: nuevoProducto.nombreProducto,
        marca: nuevoProducto.marca,
        valorUnitario: nuevoProducto.valorUnitario,
        estado: nuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
        e.target.reset();
      },
      (error) => {
        console.error(error);
        toast.error('Error creando un producto');
      }
    );
    
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700 my-6">
        Registrar nuevo producto
      </h2>
      <form ref={form} onSubmit={submitForm} className=" flex-col items-center justify-center grid grid-cols-2 m-6 my-4">
        <label htmlFor="nombreProducto">
          Descripción
          <input
            className="w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            name="nombreProducto"
            type="text"
            required
            placeholder=""
          />
        </label>
        <label htmlFor="marca">
          Marca
          <input
            className=" w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            name="marca"
            type="text"
            required
            placeholder=""
          />
        </label>
        <label htmlFor="valorUnitario">
          Valor Unitario
          <input
            className=" w-44 mr-4 my-5 ml-5 p-2  bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
            name="valorUnitario"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="estado">
          Estado
          <select
            className="w-44 mr-4 my-5 ml-5 p-2 bg-gray-50 border border-gray-200 rounded-lg appearance-none relative block focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
            name="estado"
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Disponible </option>
            <option>No disponible </option>
          </select>
        </label>
        <button
          type="submit"
          className="w-44 mr-4 my-10 ml-5 p-2 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left rounded-lg border shadow-md"
          >
          <span className="mx-2">Registrar Producto</span>
          <span className=" fas fa-angle-right ">  </span>
        </button>
        <Link to="/admin/productos">
          <button
            className="w-44 mr-4 my-10 ml-5 p-2 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left rounded-lg border shadow-md">
            <span className="mx-2">Atras</span>
            <span className=" fas fa-angle-double-left ">  </span>
          </button>
        </Link>
      </form>    
    </div>
  );
};


export default GestionProductos;
