import React from "react";

import Index from 'Pages/Index';
import GestionVentas from 'Pages/GestionVentas';
import GestionProductos from 'Pages/GestionProductos';
import GestionUsuarios from 'Pages/GestionUsuarios';
import ListVentas from 'Pages/listaVentas';
import Usuarios from 'Pages/listaUsuarios';
import ListProductos from 'Pages/listaProductos';
import Bienvenida from 'Pages/bienvenida';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LayoutPrivado from 'layouts/LayoutPrivado';
import LayoutPublico from 'layouts/LayoutPublico';
import Sidebar from 'components/SidebarVendedor';
import ModificacionUsuarios from "Pages/ModificacionUsuarios";


export default function App(){  
    return(
       <div>
           <Router>
               <Switch>
                   
                   {/* aqui va la administracion, y se desprenden paginas
                   como vendedor, usuario, dashboard, ventas  y productos 
                   */}
               <Route path={['/admin','/admin/Dashboard','/admin/listaproductos', '/admin/listaventas','/admin/listausuarios','/admin/Gestionusuario','admin/listausuario/modificaciones','/admin/listaventa/GestionVentas','/admin/listaproducto/Gestionproductos']}>
                        <LayoutPrivado>
                        <Switch>
                                <Route path="/admin/Dashboard">
                                    <Bienvenida/>
                                </Route>
                                <Route path="/admin/listaproductos">                  
                                   <ListProductos/>  
                                          
                                </Route> 
                                <Route path="/admin/listaventas">
                              
                                <ListVentas/>
                               
                                 </Route>
                                 <Route path="/admin/listausuarios">                       
                                      <Usuarios/>                       
                                </Route>
                                <Route path="/admin/listaproducto/Gestionproductos">                
                                     <GestionProductos/>                    
                                </Route>
                               
                              
                                <Route path="/admin/listaventa/GestionVentas">
                                    <GestionVentas/>                          
                                 </Route>
                                
                              
                                
                                <Route path="/admin/Gestionusuario">
                                <GestionUsuarios/>
                                </Route>
                                <Route path="/admin/listausuario/modificaciones">
                                    <ModificacionUsuarios />
                                </Route>
                               
                               {/*  <Route path='/admin'>
                                <Index />
                                </Route> */}
                                <Route path="/admin/productos">
                                               
                                    <GestionProductos/>
                             
                                 </Route>
                        </Switch>
                        </LayoutPrivado>
                    </Route>
                    
                   {/*  <Route path={['/admin','/admin/Dashboard','/admin/listaproductos/Gestionproductos']}>
                    <Route path={['/admin','/admin/Dashboard', '/admin/listaventas', '/admin/productos','/admin/listaproductos/Gestionproductos','/admin/listausuario','/admin/listausuario/Gestionusuario','admin/listausuario/modificaciones','/admin/listaventas/GestionVentas']}>
                        <LayoutPrivado>
                        <Switch>
                        <Route path="/admin/listaproductos/Gestionproductoss">                
                            <GestionProductos/>                    
                        </Route>
                        <Route path="/admin/productos">
                                <LayoutPrivado>                   
                                    <GestionProductos/>
                                </LayoutPrivado>
                                </Route>
                        </Switch>
                        </LayoutPrivado>
                        </Route>
                        </Route> */}
                    {/* aca va la parte publica, es decir el login y el inicio para 
                    llegar al loguin
                    */}
                    
                   {/*  <Route path={["/bienvenida"]}>
                        <LayoutPrivado>
                            <Switch>
                                <Route path="/">
                                    <Bienvenida/>
                                </Route>
                            </Switch>
                        </LayoutPrivado>
                    </Route> */}
                    <Route path="/">
                        <Index/>
                    </Route>
               </Switch>
           </Router>
       </div>
    );
}
