import { Dialog, Tooltip } from "@material-ui/core";
import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Styles/tablaproducto.css";
import "react-toastify/dist/ReactToastify.css";

const productosBackend = [
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000,  
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000,
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000, 
    estado: "Disponible",
  },
  {
    id: 101,
    descripcion: "computador portatil",
    valor: 1205000,
    estado: "Disponible",
  },
];

const ListProductos = () => {
  const [productos, setProductos] = useState([]); //
  useEffect(() => {
    //Obtener productos desde el backend
    setProductos(productosBackend);
  }, []);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <div
        id="barraNavegador"
        className="bg-indigo-500 mb-16 flex items-center justify-center w-full h-20"
      >
        <nav className="flex text-white">
          <div className="mr-10">
            <ul className="flex">
              <li className="ml-1 mr-4 text-5xl font-semibold">
                Listado Productos
              </li>
            </ul>
          </div>
          <div className="font-sick">
            <ul className="flex mt-1.5">
              <li className="ml-3 mr-4 text-2xl">
                Total: {productosBackend.length}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mb-8 flex items-center justify-center w-full h-20">
        <label className="text-base font-semibold mr-5 text-black">
          Buscar:
        </label>
        <svg
          width="24"
          height="24"
          fill="none"
          class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <input
          type="text"
          id="txtBuscar"
          className="p-2 ml-4 w-96 h-10 rounded-lg border shadow-md"
          placeholder="Buscar por ..."
        ></input>
        <select
          name="select"
          className="font-semibold text-center ml-4 border h-10 rounded-lg shadow-md"
        >
          <option value="value1" selected>
            Id
          </option>
          <option value="value2">Descripcion</option>
          <option value="value3">Estado</option>
        </select>
        <Link to="/admin/productos/gestionproductos">
          <button
            type="button"
            className="bg-indigo-500 text-white transform hover:scale-110 hover:bg-indigo-600   float-left ml-20 flex items-center p-2 rounded-lg border shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              />
            </svg>
            Insertar
          </button>
        </Link>
      </div>

      <div className="overflow-y-scroll h-96">
        <TablaProductos listaproductos={productos} />
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

const TablaProductos = ({ listaproductos }) => {
  return (
    <div className="flex items-center justify-center">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripción</th>
            <th>Valor</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {listaproductos.map((productos) => {
            return <FilaProducto key={nanoid()} productos={productos} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ productos }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className="Input"
              type="number"
              defaultValue={productos.id}
            />
          </td>
          <td>
            <input
              className="Input"
              type="text"
              defaultValue={productos.descripcion}
            />
          </td>
          <td>
            <input
              className="Input"
              type="number"
              defaultValue={productos.valor}
            />
          </td>
          <td>
            <select
              className="Input"
              type="text"
              defaultValue={productos.estado}
            >
              <option disabled value={0}>
                Seleccione una opción
              </option>
              <option>Disponible </option>
              <option>No disponible </option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td> {productos.id} </td>
          <td> {productos.descripcion} </td>
          <td> {productos.valor} </td>
          <td> {productos.estado} </td>
        </>
      )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-check p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-times p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Producto" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Elminar Producto" arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash-alt p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button className="mx-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md shadow-md">
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

export default ListProductos;
