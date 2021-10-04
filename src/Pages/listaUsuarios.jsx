import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import{Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const usuariosBackend  = [
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
    const [textoBoton, setTextoBoton] = useState("Crear usuarios");

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
      <div className="flex h-full w-full flex-col items-center justify-start">
        <div id="barraNavegador" className="bg-indigo-500 mb-16 flex items-center justify-center w-full h-20">
            <nav className="flex text-white">
                <div className="mr-10">
                    <ul className="flex">
                        <li className="ml-1 mr-4 text-5xl font-semibold">Listado Usuarios</li>
                    </ul>
                </div>
                <div className="font-sick">   
                    <ul className="flex mt-1.5">
                        <li className="ml-3 mr-4 text-2xl">Número de Usuarios: 6</li>
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
            <Link to="/usuarios">
                <button type="button" className="bg-indigo-500 text-white transform hover:scale-110  rounded-lg  hover:bg-indigo-600   float-left ml-20 flex items-center p-2  border shadow-md">
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
        <div className="p-10">
            <TablaUsuarios listaUsuarios={usuarios} />
            <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
      </div>
    );
  };

  //componentes para mostar formulario o tabla
const TablaUsuarios = ({ listaUsuarios }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-extrabold text-gray-700">Usuarios</h2>
        <table className="table">
          <thead>
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
          <tbody>
            {listaUsuarios.map((usuarios) => {
              return (
                <tr className="text-center justify-center">
                    <td> {usuarios.cedula} </td>
                    <td> {usuarios.nombre} </td>
                    <td> {usuarios.apellido} </td>
                    <td> {usuarios.correo} </td>
                    <td> {usuarios.estadoUsuario} </td>
                    <td> {usuarios.rol} </td>
                    <td className="flex justify-center">
                        <Link to="/usuarios/modificaciones" className="flex justify-center">
                          <button>
                              <svg xmlns="http://www.w3.org/2000/svg" class="hover:bg-gray-300 rounded-full h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                          </button>
                        </Link>
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
    );
  };

export default Usuarios;