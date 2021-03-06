import React, { useState } from "react";
import Login from "Pages/login";
import GestionVentas from "Pages/GestionVentas";
import GestionProductos from "Pages/GestionProductos";
import GestionUsuarios from "Pages/GestionUsuarios";
import GestionClientes from "Pages/GestionClientes";
import ListVentas from "Pages/listaVentas";
import Usuarios from "Pages/listaUsuarios";
import ListProductos from "Pages/listaProductos";
import Bienvenida from "Pages/bienvenida";
import Inicio from "Pages/inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutPrivado from "layouts/LayoutPrivado";
import LayoutPublico from "layouts/LayoutPublico";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "Contex/UserContext";
import PrivateRoute from "components/PrivateRoute";
import Clientes from "Pages/clientes";

export default function App() {
  const [userData, setUserData] = useState({});
  return (
 
    <Auth0Provider
    domain="mintic-proyecto.us.auth0.com"
    clientId="c5zCRirAIchHValVZvDGG1GUiwX7D3TA"
    redirectUri='https://mighty-castle-43689.herokuapp.com/admin/dashboard'
    audience="api-autenticacion-almacen-mintic"
    //scope="read:current_user update:current_user_metadata"
        >
 
    <div>
   {/*    contener los datos de usuarios queen toda la app */}
  

   <UserContext.Provider value={{ userData, setUserData }}>
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
              "/admin/clientes",
              "/admin/clientes/gestionCliente",
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
                  <PrivateRoute roleslist={['Administrador']}>
                    <ListProductos />
                  </PrivateRoute>
                </Route>
                <Route path="/admin/ventas/gestionVentas">
                  <PrivateRoute roleslist={['Administrador','Vendedor']}>
                    <GestionVentas />
                  </PrivateRoute>
                </Route>
                <Route path="/admin/ventas">
                  <PrivateRoute roleslist={['Administrador','Vendedor']}>
                    <ListVentas />
                  </PrivateRoute>
                </Route>
                <Route path="/admin/usuarios/gestionusuario">
                  <GestionUsuarios />
                </Route>
                <Route path="/admin/usuarios">
                  <PrivateRoute roleslist={['Administrador','Vendedor']}>
                    <Usuarios />
                  </PrivateRoute> 
                </Route>
                <Route path="/admin/clientes/gestionCliente">
                  <PrivateRoute roleslist={['Administrador','vendedor']}>
                    <GestionClientes />
                  </PrivateRoute>
                </Route>
                <Route path="/admin/clientes">
                  <PrivateRoute roleslist={['Administrador','vendedor']}>
                    <Clientes />
                  </PrivateRoute>
                </Route>
                <Route path="/admin/dashboard">
                  <Bienvenida titulo="T-SOLUTIONS"/>
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
      </UserContext.Provider>
      </div>
      
    </Auth0Provider>
   
  );
}
