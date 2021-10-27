import './Styles/listaVentas.css';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import{Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { NavBarFull } from 'components/Navbar';
import {obtenerVentas} from 'utils/api';
import { eliminarventa } from 'utils/api';
import { editarventa } from 'utils/api';

const ListVentas = () => {

    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    
    useEffect(() => {
        if (ejecutarConsulta){
            obtenerVentas(setVentas,setEjecutarConsulta);
            setEjecutarConsulta(false);
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

            <div className="z-10 overflow-y-scroll h-96 w-10/12">
                <TablaVentas listaventas = {ventas} filtro={document.getElementById('filtro')}
                
                setEjecutarConsulta={setEjecutarConsulta}
                />
                <ToastContainer position="bottom-center" autoClose={5000} />
            </div>
        </div>
        
    );
}

const TablaVentas = ({listaventas,filtro,setEjecutarConsulta}) => {
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
                       
                             <FilaVentas
                                key={nanoid()}
                                ventas={ventas}
                                setEjecutarConsulta={setEjecutarConsulta}
                            />
                           /*  <td > {ventas.idVentas} </td>
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
                            </td> */
                        
                    );
                })}
                </tbody>
            </table>
    </div>
    )
}
const FilaVentas = ({ ventas, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
      id: ventas.idVentas,
      fecha: ventas.fecha,
      ccCliente: ventas.ccCliente,
      idVendedor: ventas.idVendedor,
      valor: ventas.valor,
    
    });
  
     const actualizarProducto = async () => {
      if(infoNuevoProducto.cantidad >= 1){
        infoNuevoProducto.estado = "Disponible"
      }else{
        infoNuevoProducto.estado = "No disponible"
      }
      await editarventa(
        ventas._id,
        {        
          fecha: infoNuevoProducto.fecha,
          ccCliente: infoNuevoProducto.ccCliente,
          idVendedor: infoNuevoProducto.idVendedor,
          valor: infoNuevoProducto.valor
        },
        (response) => { 
          toast.success('Venta modificada con éxito');
          setEdit(false);
          setEjecutarConsulta(true);
        },
        (error) => {
          toast.error('Error modificando la venta'); 
        }
      );
    }; 
  
  
    const deleteProducto = async () => {
      await eliminarventa(
        ventas._id,
        (response) => { 
          toast.success('Venta eliminada con éxito');
          setEjecutarConsulta(true);
        },
        (error) => { 
          toast.error('Error eliminando la venta');
        }
      );
      setOpenDialog(false);
    };
  
    
    return (
      <tr>
        {edit ? (
                <> <td>
                {ventas.idVentas}
                </td>
            <td>
              <input
                //className="Input"
                className="Input"
                type="date"
                
                value={infoNuevoProducto.fecha}
                onChange={(e) =>
                  setInfoNuevoProducto({
                    ...infoNuevoProducto,
                    fecha: e.target.value,
                  })
                }
              />
            </td>
            <td>
              <input
                className="Input"
                type="text"
                value={infoNuevoProducto.ccCliente}
                onChange={(e) =>
                  setInfoNuevoProducto({
                    ...infoNuevoProducto,
                    ccCliente: e.target.value,
                  })
                }
              />
            </td>
            <td>
              <input
                className="Input"
                type="number"
                value={infoNuevoProducto.idVendedor}
                onChange={(e) =>
                  setInfoNuevoProducto({
                    ...infoNuevoProducto,
                    idVendedor: e.target.value,
                  })
                }
              />
            </td>
            <td>
              <input
                className="Input"
                type="number"
                value={infoNuevoProducto.valor}
                onChange={(e) =>
                  setInfoNuevoProducto({
                    ...infoNuevoProducto,
                    valor: e.target.value,
                  })
                }
              />
            </td>
        
        
          </>
        ) : (
          <>
           
              <td> {ventas.idVentas} </td>
              <td> {ventas.fecha} </td>
              <td> {ventas.ccCliente} </td>
              <td> {ventas.idVendedor} </td>
              <td> {ventas.valor} </td>

          </>
        )}
        <td>
          <div className="flex w-full justify-around">
            {edit ? (
              <>
                <Tooltip title="Confirmar Edición" arrow>
                  <i
                    onClick={() => actualizarProducto()}
                    className="fas fa-check p-2 text-gray-700 hover:text-green-500 hover:bg-gray-300 rounded-full"
                  />
                </Tooltip>
                <Tooltip title="Cancelar Edición" arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-times p-2 text-gray-700 hover:text-red-500 hover:bg-gray-300 rounded-full"
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Editar Venta" arrow>
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-pencil-alt p-2 text-gray-700 hover:text-green-500 hover:bg-gray-300 rounded-full"
                  />
                </Tooltip>
                <Tooltip title="Eliminar Venta" arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    className="fas fa-trash-alt p-2 text-gray-700 hover:text-red-500 hover:bg-gray-300  rounded-full"
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="p-8 flex flex-col">
              <h1 className="text-gray-800 text-xl font-bold">
                ¿Está seguro de querer eliminar la venta?
              </h1>
              <div className="flex w-full items-center justify-center my-4">
                <button
                  onClick={() => deleteProducto()}
                  className="mx-2 px-4 py-2 bg-green-400 text-white hover:bg-green-600 rounded-md shadow-md"
                >
                  Sí
                </button>
                <button
                  onClick={() => setOpenDialog(false)}
                  className="mx-2 px-4 py-2 bg-red-400 text-white hover:bg-red-600 rounded-md shadow-md"
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        </td>
      </tr>
    );
  };
  
export default ListVentas;
