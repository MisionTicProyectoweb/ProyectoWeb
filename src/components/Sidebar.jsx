import "Pages/Styles/SideBarAdmin.css"
import iconoAdmin from "media/iconoAdmin.png"
import iconoVentas from "media/ventas.png"
import iconoProductos from "media/caja.png"
import iconoUsuarios from "media/usuarios.png"


const SidebarAdmin = () => {
    return (
        <ul className="contenedorSideBar">
            <li>
                <div className="contenedorImagen">
                <img src={iconoAdmin} alt="Icono Administrador" />
                </div>
                <span>Nombre del Administrador</span>
            </li>
            <li>
                <div className="contenedorImagen">
                <img src={iconoVentas} alt="Icono ventas" />
                </div>
                <span>Gestion Ventas</span>
            </li>
            <li>
                <div className="contenedorImagen">
                <img src={iconoProductos} alt="Icono caja con productos" />
                </div>
                <span>Gestion productos</span>
            </li>
            <li>
                <div className="contenedorImagen">
                <img src={iconoUsuarios} alt="Icono usuarios" />
                </div>
                <span>Gestion usuarios</span>
            </li>
        </ul>
    );
}

export default SidebarAdmin;