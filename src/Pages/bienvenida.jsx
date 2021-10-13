import React from 'react'
import { Dashobard } from './Dashobard'
import { NavBarFull } from 'components/Navbar';

const Bienvenida = () => {

    return (
        <div className=" flex h-full w-full flex-col items-center justify-start  shadow-md">
            <NavBarFull titulo="T-SOLUTIONS"/>
            <div className="m-6 ml-30 mr-30 h-62 grid grid-cols-3 ">
                <Dashobard nombre="Faber Hoyos"/>
                <Dashobard nombre="Manuel Guzman"/>
                <Dashobard nombre="Nicolas Jimenez"/>
            </div>
            <div className="m-6 ml-30 mr-30 h-62 grid grid-cols-3 ">
                <Dashobard nombre="Yineth Contreras"/>
                <Dashobard nombre="Marcela Reyes"/>
                <Dashobard nombre="Juan Osorio"/>
            </div>
        </div> 
    )
}

export default Bienvenida