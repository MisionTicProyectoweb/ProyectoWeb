//import Footer from '/Components/Footer'
//import Navbar from '/Components/Navbar'
import React from 'react'
import Sidebar from 'components/SidebarVendedor'

const LayoutPublico = ({children}) => {
    return (
        /*El h-screen se usa para tomar todo el alto de la pantalla*/
        <div className="flex h-screen">
            <Sidebar/>
            <main className="bg-gray-100 w-screen">{children}</main>
        </div>
    )
}

export default LayoutPublico
