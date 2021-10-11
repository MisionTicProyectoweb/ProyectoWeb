import React, { useEffect, useState, useRef } from "react";
import "./Styles/gestionVentas.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavBarFull} from 'components/Navbar';

const GestVentas = () => {
  // Estados
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]); //pata obtener informacion desde el backend
  return (
    <div className="font-sick flex-col" id="body">
      <NavBarFull titulo="Gestion de Ventas"/>
      <div className="p-1">
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
      <h2 className="top-0 text-2xl font-extrabold text-gray-700">Registrar Venta</h2>
      <div className="grid grid-cols-4 border rounded-lg">
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
            className="bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="fechaVenta"
            type="date"
            required
            placeholder="dd/mm/año"
          />
        </label>
      </div>
      <form ref={form} onSubmit={submitForm} className="flex flex-col justify-center">
        <div className="grid grid-cols-4 border rounded-lg m-2">
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
            className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Agregar producto</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

const TablaVentas = ({ listaVentas }) => {
  return (
    <div>
      <div className="border rounded-lg top-0 mr-44 ml-44 h-48 overflow-y-scroll flex flex-col items-center justify-center">
        <div className="h-full text-center">
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
                  <tr className="justify-center">
                    <td> {ventas.idProducto} </td>
                    <td> {ventas.nombreProducto} </td>
                    <td> {ventas.cantidad} </td>
                    <td> {ventas.valorUnitario} </td>
                    <td> {ventas.valorTotal} </td>
                    <td className="flex justify-center">
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="hover:bg-gray-300 rounded-full h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="hover:bg-gray-300 rounded-full h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
            onClick={() => {
              regisCompra();
            }
            }
            type="submit"
            className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Registrar Venta</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
        <ToastContainer position="bottom-right" margin={2} theme="colored" autoClose={3000}/>
      </div>
    </div>
  );
};

const regisCompra = () => {
  toast.success("Compra Registrada");
}
export default GestVentas;
