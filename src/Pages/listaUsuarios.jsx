import React, { useEffect, useState} from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {Dialog, Tooltip} from "@material-ui/core";
import "./Styles/Tablas.css";
import { nanoid } from "nanoid";
import {NavBarFull} from 'components/Navbar';
import {obtenerUsuarios} from 'utils/api';
import { getToken } from "utils/api";
import PrivateComponent from "components/PrivateComponent";
const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  useEffect(() => {
      //Obtener Usuarios desde el backend
      if (ejecutarConsulta){
          obtenerUsuarios(setUsuarios,setEjecutarConsulta);
      }
      setUsuariosFiltrados(usuarios);
  }, [ejecutarConsulta]);

  useEffect(()=>{
    setUsuariosFiltrados(
      
      usuarios.filter((elemento) =>{
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
      
    );
  }, [busqueda]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start ">
      <NavBarFull titulo="Listado de Usuarios" subtitulo={`Total: ${usuarios.length}`}/>
      <div className="mb-2 flex items-center justify-center w-full h-44">
        <label className="text-base font-semibold mr-5 text-black">Buscar:</label>
        <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <input 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} 
            type="text" 
            className="p-2 ml-4 mr-5 w-96 h-10 rounded-lg border shadow-md" 
            placeholder="Buscar por ..."></input>
        {/* <select id="busPor" name="select" className="font-semibold text-center ml-4 border h-10 rounded-lg shadow-md">
          <option value="ccUsuario" selected>Cedula</option>
          <option value="nombre">Nombre</option>
          <option value="apellido">Apellido</option>
          <option value="correo">Correo</option>
        </select> */}
        <Link to="/admin/usuarios/gestionusuario">
          <button type="button" className="bg-indigo-500 text-white transform hover:scale-110 hover:bg-indigo-600 float-left flex items-center p-2 rounded-lg border shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>Agregar Usuarios
          </button>
        </Link>
      </div>
    {/*   <PrivateComponent roleslist={["admin" ,"Vendedor"]}> 
      </PrivateComponent> */}
      <div className="overflow-y-scroll">
        <TablaUsuarios 
          listaUsuarios={usuariosFiltrados} 
          setEjecutarConsulta={setEjecutarConsulta}/>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

//componentes para mostar formulario o tabla
const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
  return (
    <div className="ml-10 mr-10 flex items-center justify-center">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody >
          {listaUsuarios.map((usuarios) => {
            return <FilaUsuario key ={nanoid()} usuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
          })}
        </tbody>
      </table>
    </div >
  );
};

const FilaUsuario = ({usuarios, setEjecutarConsulta}) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoEditarUsuario, setInfoEditarUsuario] = useState({
    rol: usuarios.rol,
    estado: usuarios.estado,
  });

  const actualizarUsuarios = async () => {

    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/usuarios/editar/${usuarios._id}`,
      headers: { 'Content-Type': 'application/json',
       Authorization: getToken() },
      data: { ...infoEditarUsuario }
    
    };  console.log(getToken);
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Usuario modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el usuario');
        console.error(error);
      });
  }
  
  const eliminarUsuario = async () => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/usuarios/${usuarios._id}`,
      headers: { 'Content-Type': 'application/json',

       Authorization: getToken()
       },
      data: {id: usuarios._id}
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Usuario eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el usuario');
      });
    setOpenDialog(false);
  };
  return (
    <tr>
      {edit ? (
        <>
          <td>{usuarios._id.slice(18)}</td>
          <td> {usuarios.name} </td>
          <td> {usuarios.email} </td>
          <td>
            <select 
            style={{margin: '0rem'}} 
            className="Input" 
            type="text" 
            value={infoEditarUsuario.estado}
            onChange={(e) => setInfoEditarUsuario({ ...infoEditarUsuario, estado: e.target.value})}>
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
            value={infoEditarUsuario.rol}
            onChange={(e) => setInfoEditarUsuario({ ...infoEditarUsuario, rol: e.target.value})}>
              <option disabled >Seleccione un rol</option>
              <option>Administrador</option>
              <option>Vendedor</option>
            </select> </td>
        </>
      ) :
        (
          <>
            <td> {usuarios._id.slice(18)} </td>
            <td> {usuarios.name} </td>
            <td> {usuarios.email} </td>
            <td> {usuarios.estado} </td>
            <td> {usuarios.rol} </td>
            
            
          </>
        )}
      <td>
        <div className="flex w-full justify-around">
          
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i onClick={() => actualizarUsuarios()} className="fas fa-check p-2 hover:bg-blue-600 rounded-full" />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i onClick={() => setEdit(!edit)} className="fas fa-times p-2 hover:bg-blue-600 rounded-full" />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Usuario" arrow>
                <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt p-2 hover:bg-blue-600 rounded-full"/>
              </Tooltip>
              <Tooltip title="Elminar Usuario" arrow>
                <i onClick={() => setOpenDialog(true)} className="fas fa-trash-alt p-2 hover:bg-blue-600 rounded-full"/>
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Está seguro de querer eliminar el usuario?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button onClick={() => eliminarUsuario()} className="mx-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md shadow-md">
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


export default Usuarios;