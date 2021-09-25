import gestionVentas from './gestionVentas';
import React from 'react';
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
        </BrowserRouter>
    );
}