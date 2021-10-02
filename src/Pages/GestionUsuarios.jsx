import React from 'react'
import { Link } from 'react-router-dom'
import ModificacionUsuarios from './ModificacionUsuarios'

const GestionUsuarios = () => {
    return (
        <div className="h-full w-full flex flex-col">
           <div>
           <navbar className="bg-indigo-500 mb-16 flex justify-between w-full h-20 p-5 rounded-br-3xl rounded-bl-3xl ">
               <h1 className="text-white font-bold text-5xl">Gestion de usuarios</h1>
               <Link to="/usuarios/modificaciones">
               <button className="bg-indigo-500 text-white transform hover:scale-110  hover:bg-indigo-600   float-left ml-20 flex items-center p-2 rounded-lg border shadow-md">Modificar</button>
               </Link>
           </navbar>
           </div>
           <div className="flex flex-col pt-20 items-center">
               <h2 className="text-2xl font-extrabold text-gray-700 pb-4">Listado de usuarios</h2>
           <table cellPadding="8" >
                <thead > 
                    <tr>
                        <th >Usuario</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td >Administrador X</td>
                        <td>Administrador</td>
                        <td>Autorizado</td>
                    </tr>
                    <tr>
                        <td>Fidel Castro</td>
                        <td>Vendedor</td>
                        <td>Autorizado</td>
                    </tr>
                </tbody>
           </table>
           </div>
        </div>
    )
}

export default GestionUsuarios
