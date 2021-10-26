import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div
      className='lg:hidden'
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        className={`mx-2 fas fa-${
          mostrarNavegacion ? 'times' : 'bars'
        } hover:text-indigo-500 cursor-pointer `}
      />
      {mostrarNavegacion && (
        <ul className='bg-gray-200'>
          <ResponsiveRoute ruta='/admin/Dashboard' nombre='DashBoard' />
          <ResponsiveRoute ruta='/admin/productos' nombre='Productos'/>
          <ResponsiveRoute ruta='/admin/ventas' nombre='Ventas' />
          <ResponsiveRoute ruta='/admin/usuarios' nombre='Usuarios' />
          <ResponsiveRoute ruta='/inicio' nombre='Salir' />
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <li className='text-gray-800 border border-gray-100 p-1 hover:bg-indigo-300 focus:shadow-outlin'>{nombre}</li>
    </Link>
  );
};

export default SidebarResponsive;
