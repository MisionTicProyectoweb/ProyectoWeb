import React from 'react'
import { Dashobard } from './Dashobard'

const Bienvenida = () => {

    return (

      
         <div className=" flex h-full w-full flex-col items-center justify-start  shadow-md">
                <div id="barraNavegador" className="  bg-indigo-500 mb-16 flex items-center justify-center w-full h-20  ">
                <nav className="flex text-white ">
                    <div className="mr-10">
                        <ul className="flex">
                            <li className="ml-1 mr-4 text-5xl font-semibold ">T-Solutions</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="mb-3 mt-0 ml-30 mr-30 h-64 grid grid-cols-3 ">
                <Dashobard nombre="Faber Hoyos"/>
                <Dashobard nombre="Manuel Guzman"/>
                <Dashobard nombre="Nicolas Jimenez"/>
            </div>
            <div className=" ml-30 mr-30 h-64 grid grid-cols-3 ">
         
            <Dashobard nombre="Yineth Contreras"/>
            <Dashobard nombre="Marcela Reyes"/>
            <Dashobard nombre="Juan Osorio"/>

            </div>
        </div> 
    )
}

export default Bienvenida