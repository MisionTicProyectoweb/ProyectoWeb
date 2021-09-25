import './Styles/Login.css';
import{Link} from "react-router-dom";

function Login() {
    return(
        <div className="Login">
            <div className="body">
                <h1>T-SOLUTIONS</h1>
                <ul>
                    <li>Faber Alberto Hoyos Ordosgoitia</li>
                    <li>Manuel José Guzman Guzman</li>
                    <li>Yineth Paola Duarte Contreras</li>
                    <li>Nicolas Mateo Jimenez Daza</li>
                </ul>
                <form>
                    <input type="text" name="Usuario" placeholder="Usuario"></input>
                    <input type="password" name="pass" placeholder="Contraseña"></input>
                </form>
                <button className="btnGestionVentas"><Link to='/gestionVentas'>Ir a Gestion Ventas</Link></button>
                <button className="btnListaVentas"><Link to='/listaVentas'>Ir a lista Ventas</Link></button>
            </div>
        </div>
    );
}

export default Login;