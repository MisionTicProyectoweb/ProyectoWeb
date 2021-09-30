import './Styles/Login.css';
import imagenLogin from 'media/login.svg';
import imagenlog from 'media/imglogin.png'
import GoogleLogin from 'react-google-login'
import googlelogo from 'media/googlelogin.svg'
import{Link} from "react-router-dom";

function Login() {
    return(
        <div className="body">
           <div className="cen shadow-md bg-purple-500 ">
               <div className="fondo  ">
                   <span className="p-2  font-extrabold text-gray-700 text-6xl flex justify-center ">T-SOLUTIONS</span>
                   <img className="imagenLogo"src={imagenLogin} alt="Logo"/>
               </div>
               <form>
                   <div>
                       <span className="p-0 font-semibold text-4xl flex justify-center  font-extrabold text-gray-700">ACCEDER</span>
                       <span className="p-0 text-sm flex justify-center font-extrabold text-gray-700 text-2xl ">Ir a la tienda tecnológica</span>
                   </div>
                    <GoogleLogin 
                        clientId="" 
                        buttonText="iniciar sesión con google"
                        render = {
                            renderProps => (
                                <Link to="/bienvenida">
                                    <button className="  items-center justify-center flex bg-white text-black text-sm rounded-lg p-1 m-3 rounded-md  hover:bg-purple-100 shadow-md-col  ">
                                        <img className="pl-1 w-1/6" src={googlelogo} alt="LogoGoogle"/>
                                        <span className="pl-1 pr-1  font-extrabold text-gray-700   ">Continúa con Google</span>
                                    </button>
                                </Link>
                            )
                        }
                    />
               </form>
           </div>
        </div>
    );
}

export default Login;