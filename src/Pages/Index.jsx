import './Styles/Login.css';
<<<<<<< HEAD
import { Link } from "react-router-dom";
import iconoGoogle from "media/google.png"

function Login() {
    return (
        <>
            <h1 className="font-extrabold text-gray-800 text-6xl m-3">T-SOLUTIONS</h1>
            <div className="flex justify-flex col justify-center">
                <Link to="/bienvenida">
                    <button className="bg-white text-gray-800 flex flex-row p-2 rounded-lg m-5 hover:bg-blue-500 shadow-md ">
                        <img className="h-6 w-6 mr-2" src={iconoGoogle}></img>
                        <span>Ingrese con Google</span>
                    </button>
                </Link>
            </div>
        </>
=======
import imagenLogin from 'media/login.svg';
import GoogleLogin from 'react-google-login'
import googlelogo from 'media/googlelogin.svg'
import{Link} from "react-router-dom";

function Login() {
    return(
        <div className="body">
           <div className="cen">
               <div className="fondo">
                   <span className="p-2 font-sick font-semibold text-6xl flex justify-center">T-SOLUTIONS</span>
                   <img className="imagenLogo"src={imagenLogin} alt="Logo"/>
               </div>
               <form>
                   <div>
                       <span className="p-0 font-semibold text-4xl flex justify-center">ACCEDER</span>
                       <span className="p-0 text-sm flex justify-center">Ir a la tienda tecnológica</span>
                   </div>
                    <GoogleLogin 
                        clientId="" 
                        buttonText="iniciar sesión con google"
                        render = {
                            renderProps => (
                                <Link to="/bienvenida">
                                    <button className="items-center justify-center flex bg-white text-black text-sm rounded-lg p-1 m-3 rounded-md">
                                        <img className="pl-1 w-1/6" src={googlelogo} alt="LogoGoogle"/>
                                        <span className="pl-2 pr-2">Iniciar sesión con Google</span>
                                    </button>
                                </Link>
                            )
                        }
                    />
               </form>
           </div>
        </div>
>>>>>>> ac2bfe0488f3470115aba5170fbcf3db028554aa
    );
}

export default Login;