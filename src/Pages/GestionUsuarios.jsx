import React from 'react'

const GestionUsuarios = () => {
    return (
        <div className="h-full w-full ">
           <navbar className="flex flex-row justify-between bg-indigo-300 p-7">
               <h1 className="text-gray-900 font-bold text-5xl ">Listado de usuarios</h1>
               <button className="bg-indigo-500 text-white rounded-lg p-1 hover:bg-indigo-600 ">Modificar</button>
           </navbar>
           
        </div>
    )
}

export default GestionUsuarios
