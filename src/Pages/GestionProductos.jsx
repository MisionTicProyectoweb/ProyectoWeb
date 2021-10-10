import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const GestionProductos = () => {
  const [productos, setProductos] = useState([]);
  return (
    <div className="w-full text-center">
      <div
        id="barraNavegador"
        className="w-full text-center bg-indigo-500 mb-16 flex items-center justify-center h-20"
      >
        <nav className="flex text-white">
          <div className="mr-10">
            <ul className="flex">
              <li className="ml-1 mr-4 text-5xl font-semibold">
                Gestion Productos
              </li>
            </ul>
          </div>
        </nav>
      </div>
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

    const options = {
      method: "POST",
      url: "http://localhost:5000/productos/nuevo/",
      headers: { "Content-Type": "application/json" },
      data: {
        idProducto: nuevoProducto.idProducto,
        nombreProducto: nuevoProducto.nombreProducto,
        valorUnitario: nuevoProducto.valorUnitario,
        estado: nuevoProducto.estado,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Se ha agregado el producto con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error creando un producto");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">
        Registrar nuevo producto
      </h2>
      <form ref={form} onSubmit={submitForm} className="grid grid-cols-2 m-4">
        <label htmlFor="idProducto">
          ID Producto
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
          <select
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
            className="fas fa-plus-circle mr-2 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left ml-20 flex items-left p-2 rounded-lg border shadow-md"
          >
          <span>Registrar Producto</span>
          
        </button>
        <Link to="/admin/productos">
          <button
            className="fas fa-plus-circle mr-2 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left ml-20 flex items-left p-2 rounded-lg border shadow-md"
            >
              Atras
          </button>
        </Link>

      </form>
    </div>
  );
};

export default GestionProductos;
