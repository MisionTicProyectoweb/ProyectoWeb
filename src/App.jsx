import React from 'react';
import Index from 'Pages/Index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
import Bienvenida from 'Pages/Bienvenida';
import LayoutPublico from 'layouts/LayoutPublico';
import ModificacionUsuarios from 'Pages/ModificacionUsuarios';


export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={["/bienvenida","/bienvenida/usuarios", "/bienvenida/productos", "/bienvenida/usuarios/modificaciones"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/bienvenida/ventas">
                                    <GestionVentas />
                                </Route>
                                <Route path="/bienvenida/productos">
                                    <GestionProductos />
                                </Route>
                                <Route path="/bienvenida/usuarios/modificaciones">
                                    <ModificacionUsuarios />
                                </Route>
                                <Route path="/bienvenida/usuarios">
                                    <GestionUsuarios />
                                </Route>
                                <Route path="/bienvenida">
                                    <Bienvenida />
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
                    <Route path={["/"]}>
                        <LayoutPublico>
                            <Switch>
                                <Route path='/'>
                                    <Index />
                                </Route>
                            </Switch>
                        </LayoutPublico>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}