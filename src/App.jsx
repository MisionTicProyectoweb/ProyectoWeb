import React from "react";
import Login from "Pages/login";
import GestionVentas from "Pages/GestionVentas";
import GestionProductos from "Pages/GestionProductos";
import GestionUsuarios from "Pages/GestionUsuarios";
import ListVentas from "Pages/listaVentas";
import Usuarios from "Pages/listaUsuarios";
import ListProductos from "Pages/listaProductos";
import Bienvenida from "Pages/bienvenida";
import Inicio from "Pages/inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutPrivado from "layouts/LayoutPrivado";
import LayoutPublico from "layouts/LayoutPublico";



export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* aqui va la administracion, y se desprenden paginas
                   como vendedor, usuario, dashboard, ventas  y productos 
                   */}

          <Route
            path={[
              "/admin",
              "/admin/dashboard",
              "/admin/productos",
              "/admin/productos/gestionproductos",
              "/admin/ventas",
              "/admin/ventas/gestionVentas",
              "/admin/usuarios",
              "/admin/usuarios/modificaciones",
              "/admin/usuarios/gestionusuario",
            ]}
          >
            <LayoutPrivado>
              <Switch>
                <Route path="/admin/productos/gestionproductos">
                  <GestionProductos />
                </Route>
                <Route path="/admin/productos">
                  <ListProductos />
                </Route>
                <Route path="/admin/ventas/gestionVentas">
                  <GestionVentas />
                </Route>
                <Route path="/admin/ventas">
                  <ListVentas />
                </Route>
                <Route path="/admin/usuarios/gestionusuario">
                  <GestionUsuarios />
                </Route>
                <Route path="/admin/usuarios">
                  <Usuarios />
                </Route>
                <Route path="/admin/dashboard">
                  <Bienvenida />
                </Route>
              </Switch>
            </LayoutPrivado>
          </Route>

          {/* aca va la parte publica, es decir el login y el inicio para 
                    llegar al loguin
                    */}
 
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
