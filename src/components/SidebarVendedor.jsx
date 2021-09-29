import React from 'react'
import IconoAdminis from "media/iconoAdmin.png"

const SidebarVendedor = () => {
    return (
        <div className="w-72 border bg-purple-500 flex flex-col justify-between h-full">
            <div>
                <img src={IconoAdminis} alt="Logo de usuario" />
            </div>
        </div>
    )
}

export default SidebarVendedor
