import React, { useState, useRef, useEffect } from "react";
import "./Styles/Tablas.css";
import {nanoid} from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavBarFull} from 'components/Navbar';
import {obtenerclientes} from 'utils/api';
import {obtenerProductos/* , editarProducto */} from 'utils/api';
import { Dialog, Tooltip } from "@material-ui/core";
import axios from "axios";
import { getToken } from "utils/api";
import {obtenerVentas} from 'utils/api';
import {obtenerUsuarios} from 'utils/api';
import { useAuth0 } from "@auth0/auth0-react";

const baseURL = "https://tranquil-spire-34546.herokuapp.com"
//const baseURL = "http://localhost:5000"


const GestVentas = () => {
  const [clientes,setClientes] = useState([]);
  const [productos,setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [infoProducto, setInfoProducto] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const [ventasBack, setVentasBack] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const {user} = useAuth0();

  useEffect(() => {
      if (ejecutarConsulta){
          obtenerUsuarios(setUsuarios,setEjecutarConsulta);
      }
  }, [ejecutarConsulta]);

  useEffect(() => {
    if (ejecutarConsulta){
        obtenerVentas(setVentasBack,setEjecutarConsulta);
    }
}, [ejecutarConsulta]);

  useEffect(() => {
    if (ejecutarConsulta){
        obtenerclientes(setClientes,setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    if (ejecutarConsulta) {
      obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          return error;
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

  return (
    <div className="font-sick flex-col" id="body">
      <NavBarFull titulo="Gestion de Ventas"/>
      <div className="p-1 flex flex-col items-center justify-center">
        <h2 className="top-0 text-2xl font-extrabold text-gray-700">Registrar Venta</h2>
        <FormularioCliente
          clientes={clientes}
          setCliente={setCliente}
        />
        <FormularioVentas
          listaVentas={ventas}
          setVentas={setVentas}
          productos={productos}
        />
      </div>
      <div>
        <TablaVentas listaVentas={ventas} setVentas={setVentas} productos={productos} ventasBack={ventasBack}/>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
              onClick={() => {
                obtenerVentas(setVentasBack,setEjecutarConsulta);
                RegisCompra(setVentas,ventas,cliente,ventasBack,usuarios,user,productos,infoProducto,setInfoProducto);
              }
              }
              type="submit"
              className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span>Registrar Venta</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
          </button>
          <ToastContainer position="bottom-right" margin={2} theme="colored" autoClose={3000}/>
      </div>
    </div>
  );
};

const FormularioCliente = ({clientes,setCliente}) => {

  const form = useRef(null);

    
  const [busqueda, setBusqueda] = useState('');
  const [cliente, getCliente] = useState([]);

  
  useEffect(()=>{
    getCliente(clientes.find((elemento) => {
      if (busqueda.length > 9) {
        if(elemento.cedula === busqueda){
          return elemento.valueOf(busqueda);
        }
      }
    }));
  },[busqueda, clientes]);
  
  const submitCliente = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const cliente = {};
      fd.forEach((value, key) => {
        cliente[key] = value;
    });
    if(cliente.nombreCliente === ""){
      toast.error("Agrega un cliente valido");
      setCliente([]);
    }else{
      toast.success("Información de cliente agregada");
      setCliente([cliente]);
    }
  }

  return(
    <div className="flex flex-col items-center justify-center">
      <form id="reset" ref={form} onSubmit={submitCliente} className="flex flex-col justify-center">
        <div className="grid grid-cols-4 border rounded-lg">
          <label htmlFor="idcliente">
            Código Cliente
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="idcliente"
              id="idClient"
              onChange={(e) => setBusqueda(e.target.value)}
              type="number"
              maxLength="10"
              min={0}
              placeholder=""
            />
          </label>
          <label htmlFor="nombreCliente">
            Nombre Cliente
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="nombreCliente"
              value={cliente === undefined ? "" : cliente.nombre}
              type="text"
              placeholder="Nombre"
              required
              readOnly
            />
          </label>
          <label htmlFor="nombreCliente">
            Apellido Cliente
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="apellidoCliente"
              type="text"
              value={cliente === undefined ? "" : cliente.apellido}
              placeholder="Apellido"
              readOnly
            />
          </label>
          <label htmlFor="fechaVenta">
            Fecha Venta
            <input
              className="bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="fechaVenta"
              value={obtenerFecha()}
              required
              readonly
            />
          </label>
          <button
            type="submit"
            className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Agregar cliente</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

const FormularioVentas = ({listaVentas, setVentas, productos}) => {

  const form = useRef(null);

  const [producto, getProducto] = useState([]);
  const [busquedaPro, setBusquedaPro] = useState('');

  useEffect(()=>{
    getProducto(productos.find((elemento) => {
      if (busquedaPro.length > 2) {
        if(elemento.idProducto === busquedaPro){
          return elemento.valueOf(busquedaPro);
        }
      }
    }));
  },[busquedaPro, productos]);


  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    let cant = parseFloat(producto.cantidad);
    let inCant = parseFloat(document.getElementById('cantidad').value);
    let valor = parseFloat(document.getElementById('valorU').value);

    let inId = parseInt(document.getElementById('idProduct').value);
    let id = listaVentas.map((elemento) => {
      if(parseInt(elemento.idProducto) === inId){
        return true;
      }else{
        return false
      }
    });

    fd.append('valorTotal', valor*inCant);

    
    if (id.includes(true)){  

      toast.info("Ya agregaste este producto, mejor editalo");

    }
    else{       
      const nuevaVenta = {};
      fd.forEach((value, key) => {
        nuevaVenta[key] = value;
      });

      if( cant < inCant){
        toast.error("No se ha podido registrar la venta... Cantidad no disponible");
      }else{
        setVentas([...listaVentas, nuevaVenta]);
        document.getElementById('idProduct').innerHTML = "";
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form id="reset" ref={form} onSubmit={submitForm} className="flex flex-col justify-center">
        <div className="grid grid-cols-4 border rounded-lg m-2">
          <label htmlFor="idProducto">
            Código Producto
            <input
              className="bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="idProducto"
              type="number"
              id="idProduct"
              onChange={(e) => setBusquedaPro(e.target.value)}
              min={0}
              required
              placeholder=""
            />
          </label>
          <label htmlFor="nombreProducto">
            Descripción
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="nombreProducto"
              value={producto === undefined ? "Descripción" : producto.nombreProducto}
              type="text"
              placeholder=""
              readonly
            />
          </label>
          <label htmlFor="cantidad">
            Cantidad ({`Max. ${producto === undefined ? "" : producto.cantidad}`})
            <input
              className=" bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="cantidad"
              type="number"
              id="cantidad"
              min={0}
              required
            />
          </label>
          <label htmlFor="valorUnitario">
            Valor Unitario
            <input
              className="bg-gray-50 border border-gray-200 m-1 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              name="valorUnitario"
              value={producto === undefined ? 0 : producto.valorUnitario}
              id="valorU"
              min={0}
              type="number"
              readonly
            />
          </label>
          <button
            type="submit"
            className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Agregar producto</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

const TablaVentas = ({ listaVentas, setVentas, productos}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-10/12 border rounded-lg top-0 h-48 overflow-y-scroll flex flex-col items-center">
        <div className="h-full text-center w-full">
          <h2 className="text-2xl font-extrabold text-gray-700">Detalle</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Código Producto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Valor Unitario</th>
                <th>Valor Total</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>{
              listaVentas.map((venta)=>{
                return (
                  <FilaVenta
                    key={nanoid()}
                    ventas={venta}
                    listaventas={listaVentas}
                    setVentas={setVentas}
                    productos={productos}
                  />
                );
              })
            }</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const FilaVenta = ({ventas, setVentas, listaventas,productos}) => {

  const [edit, setEdit] =useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoVenta, setInfoVenta] = useState({
    idProducto: ventas.idProducto,
    nombreProducto: ventas.nombreProducto,
    cantidad: ventas.cantidad,
    valorUnitario: ventas.valorUnitario,
    valorTotal: ventas.valorTotal
  });

  const EditarVenta = () => {
    const producto = productos.find((e) => e.idProducto === infoVenta.idProducto);
    const ind = listaventas.findIndex((e) =>  e.idProducto === infoVenta.idProducto);
    const cant = parseInt(document.getElementById('cant').value);

    if (producto.cantidad >= cant){
      const valor = parseInt(document.getElementById('valor').value);
      listaventas[ind].cantidad = cant;
      listaventas[ind].valorTotal = cant * valor;
      setVentas([...listaventas])
      setEdit(false);
    }else{
      toast.error("Cantidad no disponible");
    }
  }

  const EliminarVenta = () => {
    const ind = listaventas.findIndex((e) =>  e.idProducto === infoVenta.idProducto);
    listaventas.splice(ind,1)
    setVentas([...listaventas])
    setEdit(false);
  }

  return(
    <tr>{
      edit ? (
        <>
          <td>
            <input
              onChange={(e) =>
                  setInfoVenta({
                    ...infoVenta,
                    idProducto: e.target.value,
                  })
              }
              className="w-max"
              disabled="true"
              type="text"
              value={infoVenta.idProducto}
            />
          </td>
          <td>
            <input
              onChange={(e) =>
                  setInfoVenta({
                    ...infoVenta,
                    nombreProducto: e.target.value,
                  })
              }
              disabled="true"
              className="w-max"
              type="text"
              value={infoVenta.nombreProducto}
            />
          </td>
          <td>
            <input
              onChange={(e) =>
                setInfoVenta({
                  ...infoVenta,
                  cantidad: e.target.value,
                })
              }
              className="Input"
              id="cant"
              type="number"
              value={infoVenta.cantidad}
            />
          </td>
          <td>
            <input
              onChange={(e) =>
                setInfoVenta({
                  ...infoVenta,
                  valorUnitario: e.target.value,
                })
              }
              disabled="true"
              className="w-max"
              id="valor"
              type="number"
              value={infoVenta.valorUnitario}
            />
          </td>
          <td>
            <input
              onChange={(e) =>
                setInfoVenta({
                  ...infoVenta,
                  valorTotal: e.target.value,
                })
              }
              disabled="true"
              className="w-max"
              type="number"
              value={infoVenta.valorTotal}
            />
          </td>
        </>
      ):(<>
          <td>{infoVenta.idProducto}</td>
          <td>{infoVenta.nombreProducto}</td>
          <td>{infoVenta.cantidad}</td>
          <td>{infoVenta.valorUnitario}</td>
          <td>{infoVenta.valorTotal}</td>
        </>)
    }<td>
    <div className="flex w-full justify-around">
      {edit ? (
        <>
          <Tooltip title="Confirmar Edición" arrow>
            <i
              onClick={() => {
                EditarVenta();
              }}
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
          <Tooltip title="Editar Producto" arrow>
            <i
              onClick={() => setEdit(!edit)}
              className="fas fa-pencil-alt p-2 text-gray-700 hover:text-green-500 hover:bg-gray-300 rounded-full"
            />
          </Tooltip>
          <Tooltip title="Eliminar Producto" arrow>
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
          ¿Está seguro de querer eliminar el producto?
        </h1>
        <div className="flex w-full items-center justify-center my-4">
          <button
            onClick={() => EliminarVenta()}
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

}

const RegisCompra = async (setVentas,
                            ventas,
                            cliente,
                            ventasBack, 
                            idVendedor, 
                            user, productos, 
                            infoProducto,
                            setInfoProducto) => {

  /* const actualizarProducto = async (v) => {

    const canti = parseInt(v.cantidad)

    let producto = productos.find((e)=> e.idProducto === v.idProducto )

    let can = parseInt(producto.cantidad);

    if((can-canti) >= 1){

      v.estado = "Disponible"

    }else{

      v.estado = "No disponible"
    }

    setInfoProducto([{
      _id: producto._id,
      idProducto: v.idProducto,
      nombreProducto: v.nombreProducto,
      valorUnitario: v.valorUnitario,
      cantidad: can-canti,
      estado: v.estado
    }])

    const info = infoProducto.find((e)=> e.idProducto === v.idProducto)

    await editarProducto(
      producto._id,
      {
        idProducto: info.idProducto,
        nombreProducto: info.nombreProducto,
        valorUnitario: info.valorUnitario,
        cantidad: info.cantidad,
        estado: info.estado
      },
      (response) => {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
      },
      (error) => {
        toast.error('Error modificando el producto');
        console.error(error);
      }
    );
  }; */

  if (ventas.length === 0){
    toast.error("Agrega uno más productos");
  }else{
    if(cliente.length === 0){
      toast.error("Agrega un cliente");
    }else{
      const idVentas = idVenta(ventasBack);
      const vendedor = idVendedor.find(e => e.nickname === user.nickname);
      const fecha = cliente.map(e => e.fechaVenta);
      const ccCliente = cliente.map(e => e.idcliente);
      let total = 0;
      ventas.forEach(e => {
        total += parseFloat(e.valorTotal);
        return total;
      });
      const options = {
        method: "POST",
        url: `${baseURL}/ventas/nuevo/`,
        headers: { "Content-Type": "application/json",
            Authorization: getToken() },
        data: {
          idVentas: idVentas,
          idVendedor: vendedor.ccUsuario,
          fecha: fecha[0],
          ccCliente: ccCliente[0],
          valor: total,
          arrayProductos: ventas
        },
      };
  
      await axios
        .request(options)
        .then(function (response) {
          toast.success("Se ha agregado el venta con éxito");
          setVentas([]);
          /* ventas.forEach((v) => {
            actualizarProducto(v)

          }) */
        })
        .catch(function (error) {
          toast.error("Error creando la venta");
        });
    }
  }
}

const idVenta = (ventas) => {
  let mayor = 0;
  ventas.forEach(venta => {
    if (venta.idVentas > mayor){
      mayor = venta.idVentas;
    }
  })
  let id = parseInt(mayor, 10);
  return id + 1;
}

const obtenerFecha = () => {
    const dia = new Date();
    let dd = dia.getDate();
    if (dd < 10 ){
      dd = "0" +dd;
    }
    let mm = 1 + dia.getMonth();
    if (mm < 10){
      mm = "0" + mm;
    }
    let aaaa = dia.getFullYear();
    return (aaaa + "/" + mm + "/" +dd);
}
export default GestVentas;

