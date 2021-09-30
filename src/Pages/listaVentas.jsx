import './Styles/listaVentas.css';
import{Link} from "react-router-dom";

function ListVentas(ventas,tVentas){
    return (
        <div className="font-sick flex-col" id="body">

            <div id="barraNavegador" className="bg-indigo-500 mb-16 flex items-center justify-center w-full h-20 shadow-md">
                <nav className="flex text-white">
                    <div className="mr-10">
                        <ul className="flex">
                            <li className="ml-1 mr-4 text-5xl font-semibold">Listado Ventas</li>
                        </ul>
                    </div>
                    <div className="font-sick">   
                        <ul className="flex mt-1.5">
                            <li className="ml-3 mr-4 text-2xl">Ventas completadas</li>
                            <li className="ml-3 mr-4 text-2xl">Acumulado de ventas</li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="mb-8 flex items-center justify-center w-full h-20">
                <label className="text-base font-semibold mr-5 text-black">Buscar:</label>                    
                <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <input type="text" className="p-2 ml-4 w-96 h-10 rounded-lg border shadow-md" placeholder="Buscar por ..."></input>
                <select name="select" className="font-semibold text-center ml-4 border h-10 rounded-lg shadow-md">
                    <option value="value1" selected>Id</option>
                    <option value="value2">Cc Cliente</option>
                    <option value="value3">ID vendedor</option>
                </select>
                <Link to="/ventas">
                    <button type="button" className="bg-indigo-500 text-white  transform hover:scale-110  rounded-lg p-1 hover:bg-indigo-600   float-left ml-20 flex items-center p-2 rounded-lg border shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                        Insertar
                    </button>
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <table className="border-2 font-semibold">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha</th>
                            <th>C.C Cliente</th>
                            <th>ID Vendedor</th> 
                            <th>Valor</th>
                        </tr>
                    </thead>
                </table>
            </div>
    
        </div>
    );
}
export default ListVentas;