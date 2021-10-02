//import Footer from '/Components/Footer'
//import Navbar from '/Components/Navbar'
import React from 'react'
import Sidebar from 'components/SidebarVendedor'
const LayoutPublico = ({children}) => {
    return (
        
        <div className="flex h-screen">
            <Sidebar/>
            <main className="w-screen">{children}</main>
        </div>
    )
}

export default LayoutPublico
