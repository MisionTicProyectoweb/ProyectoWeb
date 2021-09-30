import IconoAdminis from "media/iconoAdmin.png"
import IconoVent from "media/ventas.png"
import IconoProd from "media/caja.png"
import IconoUsuarios from "media/usuarios.png"
import { Link } from "react-router-dom"


const SideBarAdmin=()=>{
    return(
        <div className="flex flex-col w-72 border bg-purple-500 pt-5 pb-5 items-center">
        <ul className="flex flex-col justify-between h-full ">
            <li className="flex flex-col items-center ">
                <img className="w-20 cursor-pointer" src={IconoAdminis} alt="Icono administrador" />
                <span className="p-1 text-gray-900 font-semibold ">Nombre del administrador</span>
            </li>
            <li className="flex flex-col items-center ">
              <img className="w-20 cursor-pointer" src={IconoVent} alt="Logo de ventas" />
                <span className="p-1 text-gray-900 font-semibold">Gestion de Ventas</span>
            </li>
            <li className="flex flex-col items-center ">
                <img className="w-20 cursor-pointer" src={IconoProd} alt="Logo de productos" />
                <span className="p-1 text-gray-900 font-semibold">Gestion de Productos</span>
            </li>
                <Link to="/bienvenida/usuarios">
            <li className="flex flex-col items-center ">
                <img className="w-20 cursor-pointer" src={IconoUsuarios} alt="Logo de usuarios" />
                <span className="p-1 text-gray-900 font-semibold">Gestion de Usuarios</span>
            </li>
                </Link>
        </ul>
    </div>
    );

}

export default SideBarAdmin;