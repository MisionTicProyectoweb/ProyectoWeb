import React from "react";

import Index from 'Pages/Index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
import ListVentas from 'Pages/listaVentas';
import Usuarios from 'Pages/listaUsuarios';
import ListProductos from 'Pages/listaProductos';
import Bienvenida from 'Pages/bienvenida';
import TSolutions from 'Pages/TSolutions';
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
                    <Route path="/TSolutions">
                        <LayoutPublico>
                            <TSolutions />
                        </LayoutPublico>
                    </Route>
                    <Route path="/listaventas">
                        <LayoutPrivado>
                           <ListVentas/>
                        </LayoutPrivado>
                    </Route>
                    <Route path="/listaproductos">
                        <LayoutPrivado>
                           <ListProductos/>
                        </LayoutPrivado>
                    </Route>
                    <Route path="/ventas">
                        <LayoutPrivado>
                           <GestionVentas/>
                        </LayoutPrivado>
                    </Route>
                    <Route path="/productos">
                        <LayoutPrivado>                   
                            <GestionProductos/>
                        </LayoutPrivado>
                    </Route>
                    <Route path="/listausuarios">
                        <LayoutPrivado>
                            <Usuarios/>
                        </LayoutPrivado>
                    </Route>
                    <Route path={["/usuarios", "/usuarios/modificaciones"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/usuarios/modificaciones">
                                    <ModificacionUsuarios />
                                </Route>
                                <Route path="/usuarios">
                                <GestionUsuarios/>
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
                    <Route path={["/bienvenida"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/">
                                    <Bienvenida/>
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
                    <Route path="/">
                        <Index/>
                    </Route>
               </Switch>
           </Router>
       </div>
    );
}
