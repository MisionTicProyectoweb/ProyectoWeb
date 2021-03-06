
import { Link } from 'react-router-dom';
import logo from 'media/logoTSolutions.png';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

const NavBarFull = ({titulo, subtitulo,subtitulo2}) =>{

    const {user} = useAuth0();
    const estado = ()=>{
        if(user){
            return user.picture
        }else{
        return   <></>
        }
    }
  const nombress = ()=>{
    if(user){
       return user.name
    }else{
     return   <></>
    }
    }
    return(
        <div className=" shadow-md h-16 bg-gray-50 text-black flex items-center w-full mb-2 rounded-b-3xl">
            <div className="flex z-10 text-white justify-end w-3/4">
                <nav className="flex items-center ">
                    <div>
                        <ul className="flex items-center justify-center text-center">
                            <li className="text-black ml-1 mr-4 text-4xl font-semibold">{titulo}</li>
                            <li className="ml-1 mr-4 text-2xl font-semibold text-black ml-10">{subtitulo}</li>
                            <li className="ml-1 mr-4 text-2xl font-semibold ">{subtitulo2}</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className=" flex justify-end items-center m-2 w-1/3 h-full rounded-full  bg-bg-indigo-400">
                <label className="w-max">  {nombress()}</label>
                <img alt ="Foto" src={estado()} className="m-2  h-4/5  rounded-lg  bg-bg-indigo-400   flex-col-reverse" />
            </div>
        </div>      
    )
}

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="bg-indigo-500 ">
            <nav className="flex text-white">
                <ul className='flex w-full justify-between my-1'>
                    <li> <img className='h-12 m-2 ' src={logo} alt="imagen" /></li>
                    
                    { /*<li className="ml-1 mr-4 text-5xl font-semibold">TSolutions</li>*/}
                    <li className='px-2'>
                        <Link to='/login'>
                            <button
                             onClick={() => loginWithRedirect()}
                            className='bg-indigo-400 p-2 text-gray-100 rounded-lg shadow-md hover:bg-indigo-600 m-3'>
                                Iniciar Sesi??n
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export {Navbar, NavBarFull};