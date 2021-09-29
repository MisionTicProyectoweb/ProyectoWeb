import gestionVentas from './Pages/gestionVentas';
import React from 'react';
import Login from './Pages/login';
import{
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/gestionVentas' component={gestionVentas}/>
            </Switch> 
            <Switch>
            <Login path ="/"/>
            </Switch>
        </BrowserRouter>
    );
}