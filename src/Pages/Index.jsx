import './Styles/Login.css';
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
    );
}

export default Login;