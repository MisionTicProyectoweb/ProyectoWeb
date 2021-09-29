import React from 'react'
import IconoAdminis from "media/iconoAdmin.png"

const SidebarVendedor = () => {
    return (
        <div className="w-72 border bg-purple-500 flex flex-col justify-between h-full">
            <div className="w-12 ml-4 mt-4">
                <span className="ml-22 mt-12">Admin</span>
                <img src={IconoAdminis} alt="Logo de usuario" />
             
            </div>
        </div>
    )
}

export default SidebarVendedor
