import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {obtenerProductos} from "utils/api";
//import axios from "axios";
import {NavBarFull} from 'components/Navbar';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { crearProducto } from "utils/api";

const GestionProductos = () => {

  return (
    <div className="w-full text-center">
      <NavBarFull titulo="Gestion de productos"/>
      <div>
        <FormularioProductos/>

        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

const FormularioProductos = () => {

  const [producto, setProductos] = useState([]);

  useEffect(() => {
      obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          return error
        }
      );
  });

  const form = useRef(null);

  const submitForm = async (e) => {e.preventDefault();
    const fd = new FormData(form.current);

    fd.append('idProducto', idProd(producto));

    const nuevoProducto = {};
    let estado;

    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    if(nuevoProducto.cantidad >= 1){
      estado = "Disponible"
    }else{
      estado = "No disponible"
    }

    await crearProducto(
      {
      idProducto: nuevoProducto.idProducto,
      nombreProducto: nuevoProducto.nombreProducto,
      valorUnitario: nuevoProducto.valorUnitario,
      cantidad: nuevoProducto.cantidad,
      estado: estado
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
      <h2 className="text-2xl font-extrabold text-gray-700">
        Registrar nuevo producto
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex-col items-center justify-center grid grid-cols-3 m-6 my-4">
        <label htmlFor="nombreProducto">
          Descripción
          <input
            className=" w-44 my-5 ml-5 bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            name="nombreProducto"
            type="text"
            required
            placeholder=""
          />
        </label>
        <label htmlFor="valorUnitario">
          Valor Unitario
          <input
            className=" w-44 my-5  bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
            name="valorUnitario"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="estado">
          Cantidad
          <input
            className=" w-44 my-5  bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
            name="cantidad"
            id="cant"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <button
          type="submit"
          className="ml-5 w-44 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 p-2 rounded-lg border shadow-md"
          >
          <span className="mx-2">Registrar Producto</span>
          <span className=" fas fa-angle-right ">  </span>
        </button>
        <Link to="/admin/productos">
          <button
            className=" font w-44 my-10 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left ml-2 p-2 rounded-lg border shadow-md">
            <span className="mx-2">Atras</span>
            <span className=" fas fa-angle-double-left ">  </span>
          </button>
        </Link>
      </form>    
    </div>
  );
};

const idProd = (productos) => {
  let mayor = 0;
  productos.forEach(producto => {
    if (producto.idProducto > mayor){
      mayor = producto.idProducto;
    }
  })
  let id = parseInt(mayor, 10);
  return id + 1;
}


export default GestionProductos;
