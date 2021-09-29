import React from 'react'
import Productos from "media/productos.png"
import Usuarios from "media/usuarios.png"
import IconoAdminis from "media/iconoAdmin.png"
import Ventas from "media/ventas.png"

const SidebarVendedor = () => {
    return (
        <div className="w-80 border bg-purple-500 flex flex-col justify-between h-full">
            <div className="w-20 ml-6 mt-6">
                <img src={IconoAdminis} alt="Logo de usuario" />
                <span className="ml-30 mt-20">Administrador</span>
            </div>
            <div className="w-20 ml-6 mt-6">
                <img src={Ventas} alt="Logo de ventas"/>
                <span className="ml-22 mt-12">Ventas</span>
                </div>
                <div className="w-20 ml-6 mt-6">
                <img src={Usuarios} alt="Logo de usuarios"/>
                <span className="ml-22 mt-12">Usuarios</span>
                </div>
                <div className="w-20 ml-6 mt-6">
                <img src={Productos} alt="Logo de productos"/>
                <span className="ml-22 mt-12">Productos</span>
                </div>
        </div>
    )
}

export default SidebarVendedor
