import './Styles/Login.css';
import imagenLogin from 'media/login.svg';
import GoogleLogin from 'react-google-login'
import googlelogo from 'media/googlelogin.svg'
//import{Link} from "react-router-dom";

//flex items-center bg-black border-none rounded-bl-3xl shadow-sm box-border m-40px p-20px w-396px

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
                       <span className="p-2 font-semibold text-4xl flex justify-center">ACCEDER</span>
                       <span className="p-2 text-sm flex justify-center">Ir a la tienda tecnologica</span>
                   </div>
                    <GoogleLogin 
                        clientId="" 
                        buttonText="iniciar sesión con google"
                        render = {
                            renderProps => (
                                <button onClick={renderProps.onCLick} className="items-center justify-center flex bg-white text-black text-sm rounded p-1 m-3 rounded-md">
                                    <img className="pl-2 w-lg"src={googlelogo} alt="LogoGoogle"/>
                                    <span className="pl-2 pr-2">Iniciar sesión con Google</span>
                                </button>
                            )
                        }
                    />
               </form>
           </div>
        </div>
    );
}

export default Login;