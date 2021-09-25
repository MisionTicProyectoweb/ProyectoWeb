import React from 'react';
import GestVentas from './Pages/gestionVentas';
import Login from './Pages/login';
import ListVentas from './Pages/listaVentas';
import{
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Switch> 
                    <Route path='/listaVentas'>
                        <ListVentas/>
                    </Route>
                    <Route path='/gestionVentas'>
                        <GestVentas/>
                    </Route>
                    <Route path='/'>
                        <Login/>
                    </Route> 
                </Switch>
            </BrowserRouter>
        </div>
    );
}