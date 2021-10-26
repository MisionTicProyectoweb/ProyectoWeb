import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';
import useActiveRoute from 'hooks/useActiveRoute';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from './PrivateComponent';

const Sidebar = (navegar) => {

    const [state, setEstado] = useState(true);
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-indigo-500">
            <div className="bg-indigo-500">
                <div className="text-white my-4 w-1/3"
                    onClick={() => {
                        setEstado(!state);
                    }}>
                    <i className={`p-3 fas fa-${state ? 'chevron-left' : 'bars'} hover:text-black `} />
                </div>
            </div>
            <div className="h-full">{state === false ? hide() : Show()}</div>
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
const Show = () => {
   const { logout } = useAuth0();

   const cerrarsesion=()=>{
    logout({ returnTo: window.location.origin })
localStorage.setItem('token',null);
   }
    return (
        <div className="flex flex-col items-center justify-center bg-indigo-500">
            <nav className='hidden lg:flex lg:w-56 border border-indigo-500 h-full flex-col bg-indigo-500 w-52'>
                <Link to='/admin'>
                    <img className='w-40 ml-9 mt-4 mb-10' src={logo} alt="imagen" />
                </Link>
                <div className='my-6 '>
                    <Ruta icono='fas fa-users-cog' ruta='/admin/dashboard' nombre='DashBoard' />
                    <PrivateComponent roleslist={['Administrador']}>
                        <Ruta icono='fas fa-cart-plus' ruta='/admin/productos' nombre='Productos' />
                    </PrivateComponent>
                    <PrivateComponent roleslist={['Administrador','Vendedor']}>
                        <Ruta icono='fas fa-clipboard-list' ruta='/admin/ventas' nombre='Ventas' />
                    </PrivateComponent>
                    <PrivateComponent roleslist={['Administrador']}>
                        <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
                    </PrivateComponent>
                    <PrivateComponent roleslist={['Administrador']}>
                        <Ruta icono="fas fa-users" ruta="/admin/clientes" nombre='Clientes'/>
                    </PrivateComponent>
                </div>
            </nav>
            <div className="w-full bottom-0">
                <button  className="w-full bottom-0"
                 onClick={()=>cerrarsesion()}
                >
                <Ruta className="w-full  " icono='fas fa-sign-out-alt ' ruta='' nombre='Salir' />
                </button>
            </div>
        </div>);
}

const hide = () => {

    return (
      
        <div className="mt-48 flex-col bg-indigo-500 items-center">
            <nav className='flex items-center lg:flex lg:w-14 border border-indigo-500 h-full flex-col bg-indigo-500'>
                <div>
                    <Ruta icono='fas fa-users-cog' ruta='/admin/dashboard'/>
                    <PrivateComponent roleslist={['Administrador']}>
                        <Ruta icono='fas fa-cart-plus' ruta='/admin/productos'/>
                    </PrivateComponent>
                    <PrivateComponent roleslist={['Administrador','Vendedor']}>
                        <Ruta icono='fas fa-clipboard-list' ruta='/admin/ventas'/>
                    </PrivateComponent>
                    <PrivateComponent roleslist={['Administrador']}>
                        <Ruta icono='fas fa-users' ruta='/admin/usuarios'/>
                    </PrivateComponent>
                    <PrivateComponent roleslist={['Administrador']}>
                        <Ruta icono="fas fa-users" ruta="/admin/clientes"/>
                    </PrivateComponent>
                </div>
            </nav>
            <div className="w-full flex items-center justify-center">
                <Ruta icono='fas fa-sign-out-alt' ruta='/inicio' />
            </div>
        </div>);
}

export {Sidebar};