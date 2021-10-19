import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {Dialog, Tooltip} from "@material-ui/core";
import "./Styles/Tablas.css";
import { nanoid } from "nanoid";
import {NavBarFull} from 'components/Navbar';
import {obtenerclientes} from 'utils/api';


const Clientes = () => {

  const [clientes, setclientes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [clientesFiltrados, setclientesFiltrados] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
      if (ejecutarConsulta){
          obtenerclientes(setclientes,setEjecutarConsulta);
      }
      setclientesFiltrados(clientes);

  }, [clientes,ejecutarConsulta]);

  useEffect(()=>{
    setclientesFiltrados(
      clientes.filter((elemento) =>{
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
      
    );
  }, [clientes,busqueda]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start ">
      <NavBarFull titulo="Listado de Clientes" subtitulo={`clientes: ${clientes.length}`}/>
      <div className="mb-2 flex items-center justify-center w-full h-44">
        <label className="text-base font-semibold mr-5 text-black">Buscar:</label>
        <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <input 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} 
            type="text" 
            className="p-2 ml-4 mr-5 w-96 h-10 rounded-lg border shadow-md" 
            placeholder="Buscar por ..."></input>
        <Link to="/admin/clientes/gestionCliente">
          <button type="button" className="bg-indigo-500 text-white transform hover:scale-110 hover:bg-indigo-600 float-left flex items-center p-2 rounded-lg border shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>Agregar clientes
          </button>
        </Link>
      </div>
      <div className="overflow-y-scroll">
        <Tablaclientes 
          listaclientes={clientesFiltrados} 
          setEjecutarConsulta={setEjecutarConsulta}/>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

const Tablaclientes = ({ listaclientes, setEjecutarConsulta }) => {
  return (
    <div className="ml-10 mr-10 flex items-center justify-center">
      <table className="table">
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody >
          {listaclientes.map((clientes) => {
            return <FilaCliente key ={nanoid()} clientes={clientes} setEjecutarConsulta={setEjecutarConsulta} />
          })}
        </tbody>
      </table>
    </div >
  );
};

const FilaCliente = ({clientes, setEjecutarConsulta}) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoEditarCliente, setInfoEditarCliente] = useState({
    estado: clientes.estado,
    rol: clientes.rol,
  });

  const actualizarclientes = async () => {

    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/clientes/editar/${clientes._id}`,
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoEditarCliente }
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Cliente modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el Cliente');
        console.error(error);
      });
  }
  
  const eliminarCliente = async () => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/clientes/${clientes._id}`,
      headers: { 'Content-Type': 'application/json' },
      data: {id: clientes._id}
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Cliente eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el Cliente');
      });
    setOpenDialog(false);
  };
  return (
    <tr>
      {edit ? (
        <>
          <td>{clientes.cedula}</td>
          <td> {clientes.nombre} </td>
          <td> {clientes.apellido} </td>
          <td> {clientes.correo} </td>
          <td> {clientes.tel} </td>
          {/* <td>
            <select 
            style={{margin: '0rem'}} 
            className="Input" 
            type="text" 
            value={infoEditarCliente.estado}
            onChange={(e) => setInfoEditarCliente({ ...infoEditarCliente, estado: e.target.value})}>
              <option disabled value={0}>Seleccione un estado</option>
              <option >Autorizado</option>
              <option >Pendiente</option>
              <option >No autorizado</option>
            </select>
          </td>
          <td>
            <select 
            style={{margin: '0rem'}} 
            className="Input" 
            type="text" 
            value={infoEditarCliente.rol}
            onChange={(e) => setInfoEditarCliente({ ...infoEditarCliente, rol: e.target.value})}>
              <option disabled >Seleccione un rol</option>
              <option>Administrador</option>
              <option>Vendedor</option>
            </select> </td> */}
        </>
      ) :
        (
          <>
            <td> {clientes.cedula} </td>
            <td> {clientes.nombre} </td>
            <td> {clientes.apellido} </td>
            <td> {clientes.correo} </td>
            <td> {clientes.tel} </td>
          </>
        )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i onClick={() => actualizarclientes()} className="fas fa-check p-2 hover:bg-blue-600 rounded-full" />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i onClick={() => setEdit(!edit)} className="fas fa-times p-2 hover:bg-blue-600 rounded-full" />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Cliente" arrow>
                <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt p-2 hover:bg-blue-600 rounded-full"/>
              </Tooltip>
              <Tooltip title="Elminar Cliente" arrow>
                <i onClick={() => setOpenDialog(true)} className="fas fa-trash-alt p-2 hover:bg-blue-600 rounded-full"/>
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Está seguro de querer eliminar el cliente?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button onClick={() => eliminarCliente()} className="mx-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md shadow-md">
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


export default Clientes;