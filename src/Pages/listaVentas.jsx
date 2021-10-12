import './Styles/listaVentas.css';
import React, { useEffect, useState } from "react";
import{Link} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBarFull } from 'components/Navbar';
import {obtenerVentas} from 'utils/api';

const ListVentas = () => {

    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    useEffect(() => {
        //Obtener ventas desde el backend
        if (ejecutarConsulta){
            obtenerVentas(setVentas,setEjecutarConsulta);
        }
      }, [ejecutarConsulta]);

    return (   
        <div className="flex h-full w-full flex-col items-center justify-start">
            <NavBarFull titulo="Listado de Ventas" subtitulo={`Ventas completadas: ${ventas.length}`}/>
            <div className="mb-8 flex items-center justify-center w-full h-20">
                <label className="text-base font-semibold mr-5 text-black">Buscar:</label>                    
                <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <input type="text" className="p-2 ml-4 w-96 h-10 rounded-lg border shadow-md" placeholder="Buscar por ..."></input>
                <select id="filtro" name="select" className="font-semibold text-center ml-4 border h-10 rounded-lg shadow-md">
                    <option value="idVenta">Id</option>
                    <option value="fecha">Fecha</option>
                    <option value="ccCliente">Cc Cliente</option>
                    <option value="idVendedor">ID vendedor</option>
                </select>
                <Link to="/admin/ventas/gestionVentas">
                    <button type="button" className="bg-indigo-500 text-white transform hover:scale-110 hover:bg-indigo-600   float-left ml-20 flex items-center p-2 rounded-lg border shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                        Insertar
                    </button>
                </Link>
            </div>

            <div className="overflow-y-scroll h-96 w-10/12">
                <TablaVentas listaventas = {ventas} filtro={document.getElementById('filtro')} />
                <ToastContainer position="bottom-center" autoClose={5000} />
            </div>
        </div>
        
    );
}

const TablaVentas = ({listaventas,filtro}) => {
    return (
        <div className="flex items-center justify-center">
            <table className="table">
                <thead className="border-2 font-semibold">
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>C.C Cliente</th>
                        <th>Id vendedor</th> 
                        <th>Valor</th> 
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody className="border-2">{listaventas.map((ventas) => {
                    return (
                        <tr className="border-2 text-center justify-center">
                            <td > {ventas.idVentas} </td>
                            <td > {ventas.fecha} </td>
                            <td > {ventas.ccCliente} </td>
                            <td > {ventas.idVendedor} </td>
                            <td > {ventas.valor} </td>
                            <td className="flex justify-center">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:bg-gray-300 rounded-full h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
    </div>
    )
}
export default ListVentas;
