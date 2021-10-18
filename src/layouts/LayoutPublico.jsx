import React from 'react'
import {Navbar} from 'components/Navbar';
import Footer from 'components/Footer';

const LayoutPublico = ({children}) => {
    return (
       
        /*El h-screen se usa para tomar todo el alto de la pantalla*/
        <div className="h-screen bg-gray-100">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
  
    )
}

export default LayoutPublico
