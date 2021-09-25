import './Styles/Login.css';
import './pages';
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
                <button className="btnGestionVentas">Ir a Gestion Ventas</button>
            </div>
        </div>
    );
}

export default Login;