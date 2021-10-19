import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { obtenerProductos,editarProducto,eliminarProducto} from "utils/api/productos";
import { Link } from "react-router-dom";
import "./Styles/Tablas.css";
import "react-toastify/dist/ReactToastify.css";
import { NavBarFull } from "components/Navbar";

const ListProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(
        (response) => {
          console.log('La respuesta que se recibio fue:', response);
          setProductos(response.data);
          setProductosFiltrados(response.data);
        },
        (error) => {
          console.error('Se genero un error:', error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  

  useEffect(() => {
    setProductosFiltrados(
      productos.filter((elemento) => {
        console.log(JSON.stringify(elemento));
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  },[productos, busqueda]);



  return (
    <div className="flex w-full flex-col items-center h-full ">
      <NavBarFull titulo="Listado de productos" subtitulo={"productos: "+ productos.length}/>
      <div className="flex items-center justify-center w-full h-44">
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

     <div className="overflow-y-scroll h-1/2 ">
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
    <div className="flex justify-center">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Valor ($)</th>
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
    _id: productos._id,
    nombreProducto: productos.nombreProducto,
    marca: productos.marca,
    valorUnitario: productos.valorUnitario,
    estado: productos.estado,
  });

  const actualizarProducto = async () => {
    //enviar la info al backend
    await editarProducto(
      productos._id,
      {        
        nombreProducto: infoNuevoProducto.nombreProducto,
        marca: infoNuevoProducto.marca,
        valorUnitario: infoNuevoProducto.valorUnitario,
        estado: infoNuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error modificando el producto');
        console.error(error);
      }
    );
  };


  const deleteProducto = async () => {
    await eliminarProducto(
      productos._id,
      (response) => {
        console.log(response.data);
        toast.success('Producto eliminado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error eliminando el producto');
      }
    );
    setOpenDialog(false);
  };

  
  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoProducto._id.slice(18)}</td>
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
              type="text"
              value={infoNuevoProducto.marca}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  marca: e.target.value,
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
          
            <td> {productos._id.slice(18)} </td>
            <td> {productos.nombreProducto} </td>
            <td> {productos.marca} </td>
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
