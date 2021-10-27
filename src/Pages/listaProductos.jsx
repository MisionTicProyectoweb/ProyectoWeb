import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { obtenerProductos,editarProducto,eliminarProducto} from "utils/api";
import { Link } from "react-router-dom";
import "./Styles/Tablas.css";
import "react-toastify/dist/ReactToastify.css";
import { NavBarFull } from "components/Navbar";

const ListProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const filtroCampo = useState('idProducto');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  

  useEffect(() => {
    if (ejecutarConsulta) {
      obtenerProductos(
        (response) => {
          setProductos(response.data);
          setProductosFiltrados(response.data);
        },
        (error) => {
          return error;
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    setProductosFiltrados(
      productos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );

  }, [busqueda, filtroCampo, productos]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start ">
      <NavBarFull titulo="Listado de productos" subtitulo={"productos: "+ productos.length}/>
      <div className="mb-2 flex items-center justify-center w-full h-40">
        <label className="text-base font-semibold mr-5 text-black">
          Buscar:
        </label>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="p-2 ml-2 w-96 h-10 rounded-lg border shadow-md"
          placeholder="Buscar por ..."
        ></input>
        <span className=" fas fa-search text-gray-400 group-hover:text-gray-500 transition-colors duration-200 ml-4 ">  </span>
        <Link to="/admin/productos/gestionproductos">
        <button
         type="button"
            className="w-36 bg-indigo-500 text-white text-base transform hover:scale-110 hover:bg-indigo-600 float-left ml-20 p-2 rounded-lg border shadow-md" >
            <span className=" fas fa-plus-circle sm mx-2"> </span>
            <span>Insertar</span>  
        </button>
        </Link>
      </div>
      <div className="z-10 overflow-y-scroll">
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
  }, [listaProductos, productosFiltrados]);

  return (
    <div className="ml-10 mr-10 flex items-center justify-center">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripción</th>
            <th>Valor ($)</th>
            <th>Cantidad</th>
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
    cantidad: productos.cantidad,
    estado: productos.estado
  });

  const actualizarProducto = async () => {
    if(infoNuevoProducto.cantidad >= 1){
      infoNuevoProducto.estado = "Disponible"
    }else{
      infoNuevoProducto.estado = "No disponible"
    }
    await editarProducto(
      productos._id,
      {        
        idProducto: infoNuevoProducto.idProducto,
        nombreProducto: infoNuevoProducto.nombreProducto,
        valorUnitario: infoNuevoProducto.valorUnitario,
        cantidad: infoNuevoProducto.cantidad,
        estado: infoNuevoProducto.estado
      },
      (response) => {
        toast.success('Producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error modificando el producto');
      }
    );
  };


  const deleteProducto = async () => {
    await eliminarProducto(
      productos._id,
      (response) => {
        toast.success('Producto eliminado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error eliminando el producto');
      }
    );
    setOpenDialog(false);
  };

  
  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              //className="Input"
              type="number"
              disabled="true"
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
            <input
              className="Input"
              type="number"
              value={infoNuevoProducto.cantidad}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  cantidad: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              //className="Input"
              disabled="true"
              type="text"
              value={infoNuevoProducto.estado}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  estado: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
            <td> {productos.idProducto} </td>
            <td> {productos.nombreProducto} </td>
            <td> {productos.valorUnitario} </td>
            <td> {productos.cantidad} </td>
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
                onClick={() => deleteProducto()}
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
