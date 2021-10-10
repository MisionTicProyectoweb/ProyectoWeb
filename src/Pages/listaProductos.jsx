import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { obtenerProductos } from "utils/api";
import { Link } from "react-router-dom";
import "./Styles/Tablas.css";
import "react-toastify/dist/ReactToastify.css";

const ListProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroCampo, setFilroCampo] = useState('idProducto');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
    setProductosFiltrados(productos);
    console.log(productos);
  }, [ejecutarConsulta]);

  useEffect(() => {
    console.log(busqueda, filtroCampo);

    setProductosFiltrados(
      productos.filter((elemento) => {
        console.log(busqueda);
        console.log(JSON.stringify(elemento));
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );

  }, [busqueda, filtroCampo]);

  useEffect(() => {
    //Obtener productos desde el backend
    //setProductos(productosBackend);
    setEjecutarConsulta(true);
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
                Total: {productosFiltrados.length}
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
          //type="text"
          //id="txtBuscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="p-2 ml-4 w-96 h-10 rounded-lg border shadow-md"
          placeholder="Buscar por ..."
        ></input>

        <Link to="/admin/productos/gestionproductos">
        <button
         type="button"
          className="fas fa-plus-circle mr-2 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left ml-20 flex items-left p-2 rounded-lg border shadow-md"
        >
           Insertar
        </button>
        </Link>
      </div>

      <div className="overflow-y-scroll h-96">
        <TablaProductos
          listaProductos={productosFiltrados}
          setEjecutarConsulta={setEjecutarConsulta}
        />
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(listaProductos);
    console.log(productosFiltrados);
  }, [listaProductos]);

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
          {productosFiltrados.map((productos) => {
            return (
              <FilaProducto
                key={nanoid()}
                productos={productos}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ productos, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    id: productos._id,
    idProducto: productos.idProducto,
    nombreProducto: productos.nombreProducto,
    valorUnitario: productos.valorUnitario,
    estado: productos.estado,
  });

  const actualizarProducto = async () => {
    //enviar la info al backend
    const options = {
      method: "PATCH",
      url: `http://localhost:5000/productos/${productos._id}/`,
      headers: { "Content-Type": "application/json" },
      data: { ...infoNuevoProducto},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("El producto se ha modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error al modificar el producto");
        console.error(error);
      });
  };

  const eliminarProducto = async () => {
    console.log(productos);
    const options = {
      method: "DELETE",
      url: `http://localhost:5000/productos/${productos._id}/`,
      headers: { "Content-Type": "application/json" },
      data: { id: productos._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("El producto se ha eliminado con éxito");
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error al eliminar el producto");
      });
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className="Input"
              type="number"
              value={infoNuevoProducto.idProducto}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  idProducto: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="Input"
              type="text"
              value={infoNuevoProducto.nombreProducto}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  nombreProducto: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="Input"
              type="number"
              value={infoNuevoProducto.valorUnitario}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  valorUnitario: e.target.value,
                })
              }
            />
          </td>
          <td>
            <select
              className="Input"
              type="text"
              value={infoNuevoProducto.estado}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  estado: e.target.value,
                })
              }
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
          <td> {productos.idProducto} </td>
          <td> {productos.nombreProducto} </td>
          <td> {productos.valorUnitario} </td>
          <td> {productos.estado} </td>
        </>
      )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i
                  onClick={() => actualizarProducto()}
                  className="fas fa-check p-2 text-gray-700 hover:text-green-500 hover:bg-gray-300 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-times p-2 text-gray-700 hover:text-red-500 hover:bg-gray-300 rounded-full"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Producto" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt p-2 text-gray-700 hover:text-green-500 hover:bg-gray-300 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Eliminar Producto" arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash-alt p-2 text-gray-700 hover:text-red-500 hover:bg-gray-300  rounded-full"
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-800 text-xl font-bold">
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button
                onClick={() => eliminarProducto()}
                className="mx-2 px-4 py-2 bg-green-400 text-white hover:bg-green-600 rounded-md shadow-md"
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-2 px-4 py-2 bg-red-400 text-white hover:bg-red-600 rounded-md shadow-md"
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
