import React from 'react'

export const Dashobard = (nombre) => {
    return (
        <div className="ml-5 mb-5 my-5 flex flex-col items-center justify-center h-full bg-white border-2 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <label>{nombre.nombre}</label>
        </div>      
    )
}
