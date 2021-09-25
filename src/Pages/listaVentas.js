import './Styles/listaVentas.css';
import{Link} from "react-router-dom";

function ListVentas(){
    return (
        <div className="listVentas">
            <div className="body">
                <h1>T-SOLUTIONS</h1>
                <p>Lista de ventas</p>
                <button className="btnAtras"><Link to='/'>Atras</Link></button>
            </div>
        </div>
    );
}
export default ListVentas;