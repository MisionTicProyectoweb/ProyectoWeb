import React from 'react'
import Sidebar from 'components/SidebarVendedor'

const LayoutPrivado = ({children}) => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <main className="flex w-full bg-gray-100 ">{children}</main>
        </div>
    )
}

export default LayoutPrivado