import React from 'react';

import Index from 'Pages/Index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
import Bienvenida from 'Pages/bienvenida';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
import LayoutPublico from 'layouts/LayoutPublico';


export default function App(){  
    return(
       <div>
           <Router>
               <Switch>
                    <Route path="/ventas">
                        <GestionVentas/>
                    </Route>
                    <Route path="/productos">
                        <GestionProductos/>
                    </Route>
                    <Route path="/usuarios">
                        <GestionUsuarios/>
                    </Route>
                    <Route path={["/bienvenida"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/bienvenida">
                                    <Bienvenida/>
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
                    <Route path="/">
                        <LayoutPublico>
                            <Index/>
                        </LayoutPublico>
                    </Route>
               </Switch>
           </Router>
       </div>
    );
}