import './Styles/gestionVentas.css';
import{Link} from "react-router-dom";

function GestVentas() {
    return(
        <div className="gestVentas">
            <div className="body">
                <h1>T-SOLUTIONS</h1>
                <p>Gestion de ventas</p>
                <button className="btnAtras"><Link to='/'>Atras</Link></button>
            </div>
        </div>
    );
}

export default GestVentas;