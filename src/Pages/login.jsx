import './Styles/Login.css';
import imagenLogin from 'media/login.svg';
import GoogleLogin from 'react-google-login'
import googlelogo from 'media/googlelogin.svg'
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const {isAuthenticated} = useAuth0();

    const { loginWithRedirect } = useAuth0();
    return(
      
        <div id="loginbody" className="bg-indigo-500">
            
           <div className="cen">
               <div className="fondo">
                   <span className="p-2 font-sick font-semibold text-6xl flex justify-center">T-SOLUTIONS</span>
                   <img className="imagenLogo"src={imagenLogin} alt="Logo"/>
               </div>
               <form>
                   <div>
                       <button 
                       onClick={() => loginWithRedirect()}
                       >
                       <span className="p-0 font-semibold text-4xl flex justify-center">Iniciar Sesion</span>

                       </button>
                       <span className="p-0 text-sm flex justify-center">Ir a la tienda tecnológica</span>
                   </div>
                    <GoogleLogin 
                        clientId="" 
                        buttonText="iniciar sesión con google"
                        render = {
                            renderProps => (
                                
                               // <Link to="/admin/dashboard">
                               isAuthenticated ? 
                               <Link to="/admin/dashboard ">
                                    <button 
                                    
                                    id="botongoogle" className="transform hover:scale-110 shadow-md items-center justify-center flex text-black text-sm rounded-lg p-1 m-3"
                                    >
                                        <img className="pl-1 w-1/6" src={googlelogo} alt="LogoGoogle"/>
                                        <span className="pl-2 pr-2">Iniciar sesión con Google</span>
                                    </button>
                                 
                               
                                    </Link>: <> no hay nada </>
                            //    </Link>
                            )
                        }
                    />
               </form>
           </div>
        </div>
    );
}

export default Login;