//import Footer from '/Components/Footer'
//import Navbar from '/Components/Navbar'
import React from 'react'
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const LayoutPublico = ({children}) => {
    return (
        /*El h-screen se usa para tomar todo el alto de la pantalla*/
        <div className='flex flex-col justify-between w-full'>
            <Navbar/>
            <main className='bg-gray-100 overflow-y-scroll'>{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutPublico
