import SidebarAdmin from 'components/SideBarAdmin.jsx'
import React from 'react'
import Sidebar from 'components/SidebarVendedor'

const LayoutPrivado = ({children}) => {
    return (
        <div className="flex h-screen w-full">
            <Sidebar/>
            <main className="flex w-full bg-gray-100 w-full">{children}</main>
        </div>
    )
}

export default LayoutPrivado