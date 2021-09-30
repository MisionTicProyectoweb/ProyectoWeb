import React from 'react';
import Index from 'Pages/Index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
import Bienvenida from 'Pages/Bienvenida';
=======
import Bienvenida from 'Pages/bienvenida';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
>>>>>>> ac2bfe0488f3470115aba5170fbcf3db028554aa
import LayoutPublico from 'layouts/LayoutPublico';


export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={["/bienvenida"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/bienvenida">
                                    <Bienvenida />
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route>
<<<<<<< HEAD
                    <Route path={["/"]}>
                        <LayoutPublico>                           
                            <Route path='/'>
                                <Index />
                            </Route>
                        </LayoutPublico>                           
=======
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
>>>>>>> ac2bfe0488f3470115aba5170fbcf3db028554aa
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}