import React from 'react'
import Video from "media/videoBienvenida.mp4"

const Bienvenida = () => {
    return (
        <div className="h-full w-full relative ">
            <h1 className="text-gray-800 flex justify-center font-extrabold text-5xl relative z-2">Bienvenido a T-SOLUTIONS</h1>    
            <video className="absolute  object-cover" src={Video} muted autoPlay loop>
            </video>
            <div className="h-full w-full relative  "></div>
        </div>
    )
}

export default Bienvenida
