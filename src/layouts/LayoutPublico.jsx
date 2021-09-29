//import Footer from 'Components/Footer'
//import Navbar from 'Components/Navbar'
import React from 'react'

const LayoutPublico = ({children}) => {
    return (
        /*El h-screen se usa para tomar todo el alto de la pantalla*/
        <div className="flex flex-col justify-center items-center h-screen bg-purple-600 ">
            <main>{children}</main>
        </div>
    )
}

export default LayoutPublico
