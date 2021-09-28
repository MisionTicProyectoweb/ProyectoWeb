import './Styles/gestionVentas.css';
import{Link} from "react-router-dom";
import administrador from "../media/usuarios.png"

function GestVentas() {
    return(
        <div className="gestVentas">
            <div className="body">
                <h1>T-SOLUTIONS</h1>
                <p>Gestion de ventas</p>
                <img src={administrador} alt="Logo de administrador"></img> 
                <button className="btnAtras"><Link to='/'>Atras</Link></button>
            </div>
        </div>
    );
}

export default GestVentas;