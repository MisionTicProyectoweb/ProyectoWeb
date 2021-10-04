import React from "react";
import Inicio from "Pages/inicio";
import Login from "Pages/login";
import GestionVentas from "Pages/GestionVentas";
import GestionProductos from "Pages/GestionProductos";
import GestionUsuarios from "Pages/GestionUsuarios";
import ListaVentas from "Pages/listaVentas";
import ListaUsuarios from "Pages/listaUsuarios";
import ListaProductos from "Pages/listaProductos";
import Bienvenida from "Pages/bienvenida";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutPrivado from "layouts/LayoutPrivado";
import LayoutPublico from "layouts/LayoutPublico";
import Sidebar from "components/SidebarVendedor";
import ModificacionUsuarios from "Pages/ModificacionUsuarios";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route
            path={[
              "/bienvenida",
              "/listaventas",
              "/ventas",
              "/listaproductos",
              "/productos",
              "/listausuarios",
              "/usuarios",
            ]}
          >
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
          <Route path={["/login"]}>
            <Route path="/login">
              <Login />
            </Route>
          </Route>
          <Route path={["/"]}>
            <LayoutPublico>
              <Switch>
                <Route path="/">
                  <Inicio />
                </Route>
              </Switch>
            </LayoutPublico>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
