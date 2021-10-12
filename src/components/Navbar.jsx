
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';


const NavBarFull = ({titulo, subtitulo,subtitulo2}) =>{
    
    return(
        <div className="h-16 bg-indigo-400 text-white flex items-center w-full mb-2 rounded-b-3xl">
            <div className="flex text-white justify-center w-full">
                <nav className="flex items-center ">
                    <div>
                        <ul className="flex items-center justify-center text-center">
                            <li className="ml-1 mr-4 text-4xl font-semibold">{titulo}</li>
                            <li className="ml-1 mr-4 text-2xl font-semibold">{subtitulo}</li>
                            <li className="ml-1 mr-4 text-2xl font-semibold">{subtitulo2}</li>
                        </ul>
                    </div>
                </nav>
            </div> 
        </div>      
    )
}

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

export {Navbar, NavBarFull};