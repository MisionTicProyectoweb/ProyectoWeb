import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import{Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


import imagenLogin from 'media/login.svg';
import Bienvenido from './listaVentas';


function TSolutions() {
    return (
        <div class="h-full w-full">
                <span className="pt-5 font-sick font-semibold text-6xl flex justify-center">T-SOLUTIONS</span>
                <nav className="flex text-white">
                    <ul className='flex justify-between my-10'>
                    <li> <img className='m-5 p-5 h-80 w-screen' src={imagenLogin} alt="Logo" />
                        </li>
                    <li className='m-5 text-1xl font-semibold text-gray-700 text-left'>                             
                        <div className='col-10 mt-2'>
                            <div className='row'>
                                <p>Contamos con un equipo interdisciplinario joven pero altamente capacitado y  experiencia, que está a la vanguardia de lo que está pasando en la tecnología para acompañar a nuestros clientes en la constante evolución tecnológica.</p><br />
                                <h3 className='text-2xl'>Misión: </h3>
                                <p>T Solutions es una empresa dedicada a la distribución, comercialización y venta de equipos y partes de computo, portátiles y todo lo referente con productos tecnológicos. Brindamos asesoría e instalación de redes, ensamble de computadores, reparación y actualización de portátiles y equipos de mesa. </p><br />

                                <h3 className='text-2xl'>Visión:</h3>
                                <p>Seremos la principal empresa en importación y distribución de tecnología ampliaremos nuestra infraestructura a nivel nacional para ofrecer una mejor cobertura y mejorar el servicio al cliente posicionándonos en el mercado como la empresa más reconocida en el sector tecnológico</p>
                                </div>
                        </div>

                        </li>
                    </ul>
                </nav>

           

        </div>
    );
}

export default TSolutions
