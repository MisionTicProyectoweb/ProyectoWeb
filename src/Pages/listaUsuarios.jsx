import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {Dialog, Tooltip} from "@material-ui/core";
import { nanoid } from "nanoid";

const usuariosBackend = [
  {
    cedula: 1006618199,
    nombre: "Faber",
    apellido: "Hoyos",
    correo: "faberhoyos01@gmail.com",
    estadoUsuario: "Autorizado",
    rol: "Administrador",
  },
  {
    cedula: 1007409899,
    nombre: "Manuel",
    apellido: "Guzman",
    correo: "manuelguma25@gmail.com",
    estadoUsuario: "Autorizado",
    rol: "Administrador",
  },
  {
    cedula: 1007141358,
    nombre: "Yineth",
    apellido: "Contreras",
    correo: "yinethpao170@gmail.com",
    estadoUsuario: "Autorizado",
    rol: "Administrador",
  },

  {
    cedula: 1015455974,
    nombre: "Nicolas",
    apellido: "Jimenez",
    correo: "nicolasjimenez.d11@gmail.com",
    estadoUsuario: "Autorizado",
    rol: "Administrador",
  },
  {
    cedula: 1057579801,
    nombre: "Marcela",
    apellido: "Reyes",
    correo: "marcereyesq@gmail.com",
    estadoUsuario: "Autorizado",
    rol: "Administrador",
  },
  {
    cedula: 15389042,
    nombre: "Juan",
    apellido: "Osorio",
    correo: "jfelipe_o@hotmail.com",
    estadoUsuario: "Autorizado",
    rol: "Administrador",
  },
];

const Usuarios = () => {
  // Estados
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]); //pata obtener informacion desde el backend
  //const [textoBoton, setTextoBoton] = useState("Crear usuarios");

  useEffect(() => {
    //Obtener productos desde el backend
    setUsuarios(usuariosBackend);
  }, []);

  /* useEffect(() => {
    {
      mostrarTabla
        ? setTextoBoton("Crear usuarios")
        : setTextoBoton("Mostrar usuarios");
    }
  }, [mostrarTabla]); */
  return (
    <div className="flex h-full w-full flex-col items-center justify-start ">
      <div id="barraNavegador" className="bg-indigo-500 mb-16 flex items-center justify-center w-full h-20">
        <nav className="flex text-white">
          <div className="mr-10">
            <ul className="flex">
              <li className="ml-1 mr-4 text-5xl font-semibold my-4">Listado Usuarios</li>
            </ul>
          </div>
          <div className="font-sick">
            <ul className="flex mt-1.5">
              <li className="ml-3 mr-4 text-2xl my-4">Número de Usuarios: 6</li>
            </ul>
          </div>
        </nav>
        {/* <button
            onClick={() => {
              setMostrarTabla(!mostrarTabla);
            }}
            className="text-white bg-purple-500 p-3 rounded-full my-6 hover:bg-purple-700 w-auto"
          >
            {textoBoton}
          </button> */}
      </div>
      <div className="mb-2 flex items-center justify-center w-full h-20">
        <label className="text-base font-semibold mr-5 text-black">Buscar:</label>
        <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <input type="text" className="p-2 ml-4 w-96 h-10 rounded-lg border shadow-md" placeholder="Buscar por ..."></input>
        <select name="select" className="font-semibold text-center ml-4 border h-10 rounded-lg shadow-md">
          <option value="value1" selected>Cedula</option>
          <option value="value2">Nombre</option>
          <option value="value3">Apellido</option>
          <option value="value3">Correo</option>
        </select>
        <Link to="/admin/usuarios/gestionusuario">
          <button type="button" className="bg-indigo-500 text-white transform hover:scale-110 hover:bg-indigo-600   float-left ml-20 flex items-center p-2 rounded-lg border shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>Agregar Usuarios
          </button>
        </Link>
      </div>
      {/* <div className="p-10">
          {mostrarTabla ? (
            <TablaUsuarios listaUsuarios={usuarios} />
          ) : (
            <FormularioUsuarios
              setMostrarTabla={setMostrarTabla}
              listaUsuarios={Usuarios}
              setUsuarios={setUsuarios}
            />
          )}
          <ToastContainer position="bottom-center" autoClose={5000} />
        </div> */}
      <div className="overflow-y-scroll h-96 ">
        <TablaUsuarios listaUsuarios={usuarios} />
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

//componentes para mostar formulario o tabla
const TablaUsuarios = ({ listaUsuarios }) => {
  return (
    <div className=" p-10  justify-center ">
      <table className="table">
        <thead >
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody >
          {listaUsuarios.map((usuarios) => {
            return <FilaUsuario key ={nanoid()} usuarios={usuarios} />
          })}
        </tbody>
      </table>
    </div >
  );
};

const FilaUsuario = ({usuarios}) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input className="Input" type="text" defaultValue={usuarios.cedula} />
          </td>
          <td>
            <input className="Input" type="text" defaultValue={usuarios.nombre} />
          </td>
          <td>
            <input className="Input" type="text" defaultValue={usuarios.apellido} />
          </td>
          <td>
            <input className="Input" type="text" defaultValue={usuarios.correo} />
          </td>
          <td>
            <select className="Input" type="text" defaultValue={usuarios.estadoUsuario}>
              <option disabled value={0}>Seleccione un estado</option>
              <option >Autorizado</option>
              <option >Pendiente</option>
              <option >No autorizado</option>
            </select>
          </td>
          <td>
            <select className="Input" type="text" defaultValue={usuarios.rol}>
              <option disabled >Seleccione un rol</option>
              <option>Administrador</option>
              <option>Vendedor</option>
            </select>
          </td>
        </>
      ) :
        (
          <>
            <td> {usuarios.cedula} </td>
            <td> {usuarios.nombre} </td>
            <td> {usuarios.apellido} </td>
            <td> {usuarios.correo} </td>
            <td> {usuarios.estadoUsuario} </td>
            <td> {usuarios.rol} </td>
          </>
        )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i onClick={() => setEdit(!edit)} className="fas fa-check p-2 hover:bg-blue-600 rounded-full" />
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


export default Usuarios;