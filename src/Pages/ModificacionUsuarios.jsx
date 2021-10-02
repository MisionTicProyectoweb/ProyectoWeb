import React, {useEffect, useState, useRef} from 'react'

const listadoDeUsuarios=[
    {
        usuario:"Administrador X",
        rol:"Administrador",
        estado:"Autorizado"
    },
    {
        usuario:"Nicolas",
        rol:"Vendedor",
        estado:"Autorizado"
    },
    {
        usuario:"Pepe",
        rol:"",
        estado:"Pendiente"
    }

];


const ModificacionUsuarios = () => {
    return (
        <div className="flex">
            <form  className="flex flex-row">
                <label htmlFor="usuario">
                Usuario
                <input name="usuario" 
                type="text" 

                disabled 
                
                />
                </label>
                <label htmlFor="rol">
                    <select ClassName="bg-gray-100 border border-gray-600 p-2 rounded-lg m-2" 
                        name="rol"
                        >
                        <option disabled>Seleccione un rol</option>
                        <option >Admistrador</option>
                        <option >Vendedor</option>
                    </select>
                </label>
                <label htmlFor="estado">
                    <select ClassName="bg-gray-100 border border-gray-600 p-2 rounded-lg m-2" 
                    name="estado" 
                    
                    >
                        <option disabled>Seleccione un estado </option>
                        <option >Autorizado</option>
                        <option >No autorizado</option>
                        <option >Pendiente</option>
                    </select>
                </label>
                <button
                type="submit"
                className="bg-green-700 text-white p-2 rounded-md hover:bg-green-800 ">
                Guardar cambios    
                </button>
            </form>
        </div>
    )
}

export default ModificacionUsuarios
