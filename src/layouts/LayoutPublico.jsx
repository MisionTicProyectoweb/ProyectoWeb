//import Footer from '/Components/Footer'
//import Navbar from '/Components/Navbar'
import React from 'react'

const LayoutPublico = ({children}) => {
    return (
        /*El h-screen se usa para tomar todo el alto de la pantalla*/
<<<<<<< HEAD
        <div className="flex flex-col justify-center items-center h-screen bg-purple-600 ">
=======
        <div className="flex flex-col justify-between h-screen">
>>>>>>> ac2bfe0488f3470115aba5170fbcf3db028554aa
            <main>{children}</main>
        </div>
    )
}

export default LayoutPublico
