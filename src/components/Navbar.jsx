import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';

const Navbar = () => {
    return (
        <div className="bg-indigo-500 ">
            <nav className="flex text-white">
                <ul className='flex w-full justify-between my-1'>
                    <li> <img className='h-12 m-2 ' src={logo} alt="imagen" /></li>
                    
                    { /*<li className="ml-1 mr-4 text-5xl font-semibold">TSolutions</li>*/}
                    <li className='px-2'>
                        <Link to='/login'>
                            <button className='bg-indigo-400 p-2 text-gray-100 rounded-lg shadow-md hover:bg-indigo-600 m-3'>
                                Iniciar Sesión
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;