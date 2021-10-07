import React from 'react'
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';
//import 'Pages/Styles/Login.css';
import useActiveRoute from 'hooks/useActiveRoute';

const Sidebar = () => {

    return (
        <nav className='hidden lg:flex lg:w-72 border border-indigo-500 h-full flex-col bg-indigo-500 w-52'>
            <Link to='/admin'>
                <img className='w-40 ml-9 mt-6 mb-10' src={logo} alt="imagen" />
            </Link>
            <div className='my-6'>
                <Ruta icono='fas fa-users-cog' ruta='/admin/Dashboard' nombre='DashBoard' />
                <Ruta icono='fas fa-cart-plus' ruta='/admin/listaproductos' nombre='Productos'/>
                <Ruta icono='fas fa-clipboard-list' ruta='/admin/listaventas' nombre='Ventas' />
                <Ruta icono='fas fa-users' ruta='/admin/listausuarios' nombre='Usuarios' />
            </div>
            <div className='mt-40'>
                <Ruta icono='fas fa-sign-out-alt' ruta='/inicio' nombre='Salir' />
            </div>
        </nav>
    );
};
const Ruta = ({ icono, ruta, nombre }) => {
    const isActive = useActiveRoute(ruta);
    return (
        <Link to={ruta}>
            <button
                className={`p-1 my-4 text-base bg-${isActive ? 'indigo' : 'bg-indigo-600'
                    }-700 w-full flex items-center px-3 py-3 mt-2 text-sm font-semibold text-white dark-mode:hover:text-white dark-mode:text-white hover:bg-indigo-300 focus:shadow-outlin`}
            >
                <i className={`${icono} w-8`} />
                {nombre}
            </button>
        </Link>
    );
};

export default Sidebar;
