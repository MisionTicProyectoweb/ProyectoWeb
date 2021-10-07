import React, { useEffect, useState, useRef } from "react";
import{Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './Styles/tablaproducto.css';
const productosBackend  = [
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },{
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
    {
        id: 101,
        descripcion: "computador portatil",
        valor: "$ 1.205.000",
        estado: "Disponible"
    },
  ];

const ListProductos = () => {
    const [productos, setProductos] = useState([]); //
    useEffect(() => {
        //Obtener productos desde el backend
        setProductos(productosBackend);
      }, []);
      return(
          <div className="flex h-full w-full flex-col items-center justify-start">
              <div id="barraNavegador" className="bg-indigo-500 mb-16 flex items-center justify-center w-full h-20">
              <nav className="flex text-white">
                  <div className="mr-10">
                      <ul className="flex">
                          <li className="ml-1 mr-4 text-5xl font-semibold">Listado Productos</li>
                      </ul>
                  </div>
                  <div className="font-sick">   
                      <ul className="flex mt-1.5">
                          <li className="ml-3 mr-4 text-2xl">Total: {productosBackend.length}</li>
                      </ul>
                  </div>
              </nav>
          </div>
  
          <div className="mb-8 flex items-center justify-center w-full h-20">
              <label className="text-base font-semibold mr-5 text-black">Buscar:</label>                    
              <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <input type="text" id="txtBuscar" className="p-2 ml-4 w-96 h-10 rounded-lg border shadow-md" placeholder="Buscar por ..."></input>
              <select name="select" className="font-semibold text-center ml-4 border h-10 rounded-lg shadow-md">
                  <option value="value1" selected>Id</option>
                  <option value="value2">Descripcion</option>
                  <option value="value3">Estado</option>
              </select>
              <Link to="/admin/productos/gestionproductos">
                  <button type="button" className="bg-indigo-500 text-white transform hover:scale-110  rounded-lg p-1 hover:bg-indigo-600   float-left ml-20 flex items-center p-2 rounded-lg border shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                      </svg>
                      Insertar
                  </button>
              </Link>
          </div>  
          
            <div className="overflow-y-scroll h-96">
                <TablaProductos listaproductos={productos} />
                <ToastContainer position="bottom-center" autoClose={5000} />
            </div>
        </div>
    );}

const TablaProductos = ({listaproductos}) => {
    return (
        <div className="flex items-center justify-center">
            <table className="border-2">
                <thead className="border-2 font-semibold">
                    <tr>
                        <th>Id</th>
                        <th>Descripción</th>
                        <th>Valor</th>
                        <th>Estado</th> 
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody className="border-2">{listaproductos.map((productos) => {                    
                    return (
                        <tr className="ml-20" className="bg-aqua  border-2 text-center justify-center">
                            <td  > {productos.id} </td>
                            <td> {productos.descripcion} </td>
                            <td> {productos.valor} </td>
                            <td> {productos.estado} </td>
                            <td className="flex justify-center">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:bg-gray-300 rounded-full h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:bg-gray-300 rounded-full h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

export default ListProductos
