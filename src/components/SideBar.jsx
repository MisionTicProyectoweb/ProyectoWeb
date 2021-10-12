import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';
//import 'Pages/Styles/Login.css';
import useActiveRoute from 'hooks/useActiveRoute';


let estado,setEstado;
const Sidebar = (navegar) => {
    [estado, setEstado] = useState(true);
    return(
        <div className="hidden lg:flex h-screen flex flex-col items-center justify-center bg-indigo-500">
            <div>{btnHide()}</div>
            <div className="h-full">{estado===false ? hide():show()}</div>
        </div>        

    );
};

const Ruta = ({ icono, ruta, nombre }) => {
    const isActive = useActiveRoute(ruta);
    return (
        <Link to={ruta}>
            <button
                className={`my-4 text-base bg-${isActive ? 'indigo' : 'bg-indigo-600'
                    }-700 w-full flex items-center py-3 text-sm font-semibold text-white dark-mode:hover:text-white dark-mode:text-white hover:bg-indigo-300 focus:shadow-outlin`}>
                <i className={`${icono} w-8`} />
                {nombre}
            </button>
        </Link>
    );
};

const show = () => {
    return(
    <div className="flex flex-col items-center justify-center bg-indigo-500">
    <nav className='hidden lg:flex lg:w-56 border border-indigo-500 h-full flex-col bg-indigo-500 w-52'>
        <Link to='/admin'>
            <img className='w-40 ml-9 mt-6 mb-10' src={logo} alt="imagen" />
        </Link>
        <div className='my-6 '>
            <Ruta icono='fas fa-users-cog' ruta='/admin/dashboard' nombre='DashBoard' />
            <Ruta icono='fas fa-cart-plus' ruta='/admin/productos' nombre='Productos'/>
            <Ruta icono='fas fa-clipboard-list' ruta='/admin/ventas' nombre='Ventas' />
            <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
        </div>
    </nav>
    <div className="w-full bottom-0">
        <Ruta icono='fas fa-sign-out-alt' ruta='/inicio' nombre='Salir' />
    </div>
    </div>);
};

const hide = () => {
    return(
    <div className="mt-48 flex-col bg-indigo-500 items-center">
        <nav className='flex items-center lg:flex lg:w-14 border border-indigo-500 h-full flex-col bg-indigo-500'>
            <div>
                <Ruta icono='fas fa-users-cog' ruta='/admin/dashboard'/>
                <Ruta icono='fas fa-cart-plus' ruta='/admin/productos'/>
                <Ruta icono='fas fa-clipboard-list' ruta='/admin/ventas'/>
                <Ruta icono='fas fa-users' ruta='/admin/usuarios'/>
            </div>
        </nav>
        <div className="w-full flex items-center justify-center">
            <Ruta icono='fas fa-sign-out-alt' ruta='/inicio'/>
        </div>
    </div>);
};

const btnHide = () =>{
    return(
        <div className="w-full">
        <button className="bg-indigo-500 text-white flex w-full items-center h-14"
        onClick={() => {
            setEstado(!estado);
        }}>
        <i className={`mx-2 fas fa-${ estado ? 'chevron-left' : 'bars'} hover:text-black cursor-pointer h-15 w-full`}/> 
        </button></div>
    );
};


export default Sidebar;
