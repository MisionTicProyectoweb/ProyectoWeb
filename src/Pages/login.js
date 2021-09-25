import './Styles/Login.css';
import './App';
import {Link } from 'react-router-dom';

function Login() {
    return(
        <div className="Login">
            <div className="body">
                <h1>T-SOLUTIONS</h1>
                <ul>
                    <li>Faber Alberto Hoyos Ordosgoitia</li>
                    <li>Manuel José Guzman Guzman</li>
                    <li>Yineth</li>
                    <li>Nicolas</li>
                </ul>
                <form>
                    <input type="text" name="Usuario" placeholder="Usuario"></input>
                </form>
                <button className="btnGestionVentas">Ir a Gestion Ventas</button>
            </div>
        </div>
    );
}

export default Login;