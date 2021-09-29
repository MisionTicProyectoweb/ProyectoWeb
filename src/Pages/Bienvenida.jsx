import React from 'react'
import Tecnología from "media/Tecnología.png"

const Bienvenida = () => {
    return (
        <div>
            <h1 className="text-purple-900 flex justify-center font-extrabold">Bienvenido a T-SOLUTIONS</h1>
            <p1>Tienda dedicada a la venta y distribución de productos tecnológicos</p1>
            <div className="w-40 ml-20 mt-20">
            <img src={Tecnología} alt="Logo de tecnología" />
            </div>
        </div>
    )
}

export default Bienvenida
