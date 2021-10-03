import React from "react";

import Index from 'Pages/index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
import ListaVentas from 'Pages/listaVentas';
import ListaUsuarios from 'Pages/listaUsuarios';
import ListaProductos from 'Pages/listaProductos';
import Bienvenida from 'Pages/bienvenida';
import Inicio from 'Pages/inicio';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
import LayoutPublico from 'layouts/LayoutPublico';
import Sidebar from 'components/SidebarVendedor';
import ModificacionUsuarios from "Pages/ModificacionUsuarios";


export default function App(){  
    return(
       <div>
           <Router>
                <Switch>
                    <Route path={["/inicio"]}>
                        <LayoutPublico>
                            <Switch>
                                <Route path='/inicio'>
                                    <Inicio />
                                </Route>
                            </Switch>
                        </LayoutPublico>
                    </Route>

                    <Route path={['/bienvenida', '/listaventas', '/ventas', '/listaproductos', '/productos', , '/listausuarios', '/usuarios']}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/bienvenida">
                                    <Bienvenida />
                                </Route>
                                <Route path="/listaventas">
                                    <ListaVentas />
                                </Route>
                                <Route path="/ventas">
                                        <GestionVentas />
                                </Route>
                                <Route path="/listaProductos">
                                    <ListaProductos />
                                </Route>
                                <Route path="/productos">
                                    <GestionProductos />
                                </Route>
                                <Route path="/listausuarios">
                                    <ListaUsuarios />
                                </Route>
                                <Route path="/usuarios">
                                    <GestionUsuarios />
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
                   
                    <Route path={['/']}>
                        <Route path='/'>
                            <Index />
                        </Route>
                    </Route>
               </Switch>
           </Router>
       </div>
    );
}
