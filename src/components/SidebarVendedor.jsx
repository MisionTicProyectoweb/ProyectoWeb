import React from 'react'
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';
import 'Pages/Styles/Login.css';

const SidebarVendedor = () => {

    return (
        <div className='bg-indigo-500 flex flex-col justify-between text-white shadow-md'>
          <nav id="sidebar"className='w-52 flex justify-center'>
            <ul className='w-full'>
              <li> <img className='w-40 ml-9 mt-6 mb-20' src={logo} alt="imagen" /></li>
              <li className='py-2'>
                <Link to='/bienvenida'>
                  <button type="button" className="w-full flex items-center block px-3 py-3 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    <span className="pl-2">DashBoard</span>
                    {/* <span className="tooltip">DashBoard</span> */}
                  </button> 
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/listaproductos'>
                  <button type="button" className="w-full flex items-center block px-3 py-3 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="pl-2">Productos</span>
                    {/* <span className="tooltip">Productos</span> */}
                  </button> 
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/listaventas'>
                  <button type="button" className="items-center w-full flex block px-3 py-3 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="pl-2">Ventas</span>
                    {/* <span className="tooltip">Ventas</span> */}
                  </button>
                </Link>
              </li>
              <li className='py-2'>
                <Link to='/listausuarios'>
                  <button type="button" className="w-full flex items-center block px-3 py-3 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="pl-2">Usuarios</span>
                    {/* <span className="tooltip">Usuarios</span> */}
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="bottom w-full">
                  <Link to='/TSolutions'>
                      <button type="button" className=" mx-2 w-full flex items-center block px-3 py-3 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="pl-2">Salir</span>
                        {/* <span className="tooltip">Salir</span> */}
                      </button>
                  </Link>
          </div>
        </div>
    )
}

export default SidebarVendedor
