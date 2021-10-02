import React from 'react'
import Sidebar from 'components/SidebarVendedor'

const LayoutPrivado = ({children}) => {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <main className="w-screen">{children}</main>
        </div>
    )
}

export default LayoutPrivado