import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ModificacionUsuarios = () => {

const Mensaje = () =>{
    toast.success("Usuarios modificados con exito")
}

    return (
        <div className="flex flex-col w-full items-center">
            <navbar className="text-center bg-indigo-500 mb-16 w-full h-20 p-5 rounded-br-3xl rounded-bl-3xl ">
                <h1 className="text-white font-bold text-5xl ">Modificacion de usuarios</h1>
            </navbar>
            <h2 className=" text-2xl font-extrabold text-gray-700 pb-4 justify-center items-center  flex">Usuarios</h2>
            <form className="flex flex-col justify-center items-center ">
                <div>
                    <label htmlFor="usuario1" >
                        Usuario
                        <input className="pl-2" name="usuario1"
                            type="text"
                            disabled
                            placeholder="Administrador X" />
                    </label>
                    <label ClassName=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" htmlFor="rol">
                        <select name="rol">
                            <option disabled>Seleccione un rol</option>
                            <option >Admistrador</option>
                            <option >Vendedor</option>
                        </select>
                    </label>
                    <label htmlFor="estado">
                        <select ClassName="bg-gray-900" name="estado">
                            <option disabled>Seleccione un estado </option>
                            <option >Autorizado</option>
                            <option >No autorizado</option>
                            <option >Pendiente</option>
                        </select>
                    </label>
                </div>
                <div className="p-3">
                    <label htmlFor="usuario2" >
                        Usuario
                        <input className="pl-2" name="usuario2"
                            type="text"
                            disabled
                            placeholder="Fidel Castro" />
                        <label ClassName="bg-gray-100 border border-gray-600 p-2 rounded-lg m-2" htmlFor="rolUsuario2">
                            <select name="rolUsuario2">
                                <option disabled>Seleccione un rol</option>
                                <option >Admistrador</option>
                                <option >Vendedor</option>
                            </select>
                        </label>
                        <label htmlFor="estadoUsuario3">
                            <select ClassName="bg-gray-100 border border-gray-600 p-2 rounded-lg m-2"
                                name="estadoUsuario3">
                                <option disabled>Seleccione un estado </option>
                                <option >Autorizado</option>
                                <option >No autorizado</option>
                                <option >Pendiente</option>
                            </select>
                        </label>
                    </label>
                </div>
                <div className="flex justify-center items-center">

                    <button
                        onClick={Mensaje}
                        type="submit"
                        className="bg-indigo-500 text-white transform hover:scale-110  hover:bg-indigo-600 float-left flex items-center p-2 mt-2 rounded-lg border shadow-md">
                        Guardar cambios
                    </button>
                </div>
            </form>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    )
}

export default ModificacionUsuarios
