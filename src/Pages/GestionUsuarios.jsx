import React from 'react'
import { Link } from 'react-router-dom'
import ModificacionUsuarios from './ModificacionUsuarios'

const GestionUsuarios = () => {
    return (
        <div className="h-full w-full flex flex-col">
           <div>
           <navbar className="bg-indigo-500 mb-16 flex justify-between w-full h-20 p-5 rounded-br-3xl rounded-bl-3xl ">
               <h1 className="text-white font-bold text-5xl ">Gestion de usuarios</h1>
               <Link to="/bienvenida/usuarios/modificaciones">
               <button className="bg-indigo-500 text-white rounded-lg p-1 hover:bg-indigo-600 ">Modificar</button>
               </Link>
           </navbar>
           </div>
           <div className="flex flex-col pt-32 items-center">
           <table cellPadding="10" >
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td > Administrador X</td>
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
