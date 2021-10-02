import React from "react";

import Index from 'Pages/Index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
import ListVentas from 'Pages/listaVentas';
import Bienvenida from 'Pages/bienvenida';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
import LayoutPublico from 'layouts/LayoutPublico';
import Sidebar from 'components/SidebarVendedor'


export default function App(){  
    return(
       <div>
           <Router>
               <Switch>
                    <Route path="/listaventas">
                        <LayoutPublico>
                           <ListVentas/>
                        </LayoutPublico>
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
                    <Route path="/usuarios">
                        <LayoutPrivado>
                            <GestionUsuarios/>
                        </LayoutPrivado>
                    </Route>
                    <Route path={["/bienvenida"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/">
                                    <ListVentas/>
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
