import React from 'react'
import IconoVendedores from "media/iconoVendedor.png"
import IconoVent from "media/ventas.png"


const SidebarVendedor = () => {
    return (
        <div className="flex flex-col w-72 border bg-purple-500 pt-5 pb-5 items-center">
            <ul className="flex flex-col h-full ">
                <li className="flex flex-col items-center ">
                    <img className="w-20 cursor-pointer" src={IconoVendedores} alt="Icono del vendedor" />
                    <span className="p-1 text-gray-900 font-semibold ">Nombre del vendedor</span>
                </li>
                <li className="flex flex-col justify-center items-center p-14">
                  <img className="w-20 cursor-pointer" src={IconoVent} alt="Logo de ventas" />
                    <span className="p-1 text-gray-900 font-semibold">Gestion de Ventas</span>
                </li>
            </ul>
        </div>
    )
}

export default SidebarVendedor
