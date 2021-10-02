import React, { useEffect, useState, useRef } from "react";
import "./Styles/gestionVentas.css";
import { Link } from "react-router-dom";



const GestVentas = () => {
  // Estados
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]); //pata obtener informacion desde el backend

 

  return (
    <div className="font-sick flex-col" id="body">
      <div
        id="barraNavegador"
        className="bg-indigo-500 mb-5 flex items-center justify-center w-full h-20 shadow-md"
      >
        <nav className="flex text-white">
          <div className="mr-10">
            <ul className="flex">
              <li className="ml-1 mr-4 text-5xl font-semibold">
                Gestión de Ventas
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="p-2">
        <FormularioVentas
          setMostrarTabla={setMostrarTabla}
          listaVentas={ventas}
          setVentas={setVentas}
        />
      </div>
      <div>
        <TablaVentas listaVentas={ventas} />
      </div>
    </div>
  );
};

const FormularioVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    setMostrarTabla(true);
    setVentas([...listaVentas, nuevaVenta]);

    //toast.success("Se ha registrado la venta con éxito");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">Registrar Venta</h2>
      <div className="grid grid-cols-3 border rounded-lg">
        <label htmlFor="idVenta">
          Código Venta
          <input
            className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="idVenta"
            type="text"
            placeholder="FV-00001"
          />
        </label>
        <label htmlFor="idVendedor">
          Código Vendedor
          <input
            className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="idVendedor"
            type="number"
            min={0}
            placeholder="10000000"
          />
        </label>
        <label htmlFor="idcliente">
          Código Cliente
          <input
            className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="idcliente"
            type="number"
            min={0}
            placeholder=""
          />
        </label>
        <label htmlFor="nombreCliente">
          Nombre Cliente
          <input
            className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="nombreCliente"
            type="text"
            placeholder=""
          />
        </label>
        <label htmlFor="estadoVenta">
          Estado Venta
          <select
            className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="estadoVenta"
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción{" "}
            </option>
            <option>En proceso</option>
            <option>Cancelada</option>
            <option>Entregada</option>
          </select>
        </label>
        <label htmlFor="fechaVenta">
          Fecha Venta
          <input
            className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="fechaVenta"
            type="date"
            required
            placeholder="dd/mm/año"
          />
        </label>
      </div>
      <form ref={form} onSubmit={submitForm} className="flex flex-col m-2">
        <div className="grid grid-cols-3 border rounded-lg m-2">
          <label htmlFor="idProducto">
            Código Producto
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="nombreProducto"
              type="text"
              required
              placeholder=""
            />
          </label>
          <label htmlFor="cantidad">
            Cantidad
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="cantidad"
              type="number"
              min={0}
              required
              placeholder=""
            />
          </label>
          <label htmlFor="valorUnitario">
            Valor Unitario
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="valorUnitario"
              type="number"
              min={0}
              required
              placeholder="$"
            />
          </label>
          <label htmlFor="valorTotal">
            Valor Total
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="valorTotal"
              type="number"
              min={0}
              required
              placeholder="$"
            />
          </label>
          <button
            type="submit"
            className="justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Insertar {">"}
          </button>
        </div>
      </form>
    </div>
  );
};

const TablaVentas = ({ listaVentas }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">Detalle</h2>
      <table className="border-2 font-semibold justify-center">
        <thead>
          <tr>
            <th>Código Producto</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Valor Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {listaVentas.map((ventas) => {
            return (
              <tr>
                <td> {ventas.idProducto} </td>
                <td> {ventas.nombreProducto} </td>
                <td> {ventas.cantidad} </td>
                <td> {ventas.valorUnitario} </td>
                <td> {ventas.valorTotal} </td>
                <td>
                  <i className="fas fa-pencil-alt p-2 hover:bg-gray-300 rounded-full" />
                  <i className="fas fa-trash-alt p-2 hover:bg-gray-300 rounded-full" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GestVentas;
