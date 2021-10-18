import React, { useState } from 'react'
import Sidebar from 'components/SideBar.jsx'
import SidebarResponsive from 'components/SidebarResponsive';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import loafing from "media/loadingfin.png"
import {obtenerdatosUsuario} from 'utils/api';
import {useUser} from 'Contex/UserContext';

const LayoutPrivado = ({children}) => {
    const {isAuthenticated, isLoading,getAccessTokenSilently,logout  } = useAuth0();
    const {setUserData}=useUser();
    const [loadingUserInfromation,setloadingUserInfromation]= useState(false);
    useEffect(() => {
      const FetchAuth0Token= async ()=>{
  //si se quiere hacer validaciones cn el token 
      /*   if(localStorage.getItem('token')){
          //validar fecha de aspiracion del token
        }
  else{ */
    // 1.PEDIR TOKEN A AUTH0
    setloadingUserInfromation(true);
        const accessToken = await getAccessTokenSilently({
         audience:'api-autenticacion-almacen-mintic',
        
        });
        //2.RESIVIR TOKEN DE AUTH0
          console.log(accessToken);
          localStorage.setItem('token',accessToken);
     
          //obtener usuarios con peticion de error o bien
             //3. ENVIARLE EL TOKEN AL BACKEN 
      await obtenerdatosUsuario(
        (response)=>{
            console.log('response',response);
            setUserData(response.data);
            setloadingUserInfromation(false);
       // console.log("ressss",setUserData(response.data));
          },(error)=>{
            console.log('error',error);
            setloadingUserInfromation(false);
            logout({returnTo:'http://localhost:3000'});
          }
        );
      };
      if(isAuthenticated){
  
        FetchAuth0Token();
      }
  
      }
  , [isAuthenticated, getAccessTokenSilently]); 
  console.log(isLoading || loadingUserInfromation);
    if(isLoading) return(
        <div className="">
            <div  className="p-10 flex justify-center text-green-300"><img src={loafing}  /> </div>
            <div className="p-10 flex justify-center text-indigo-600 text-4xl">
            Loading...  
            </div>   
      </div>
    )
  
    return (
        //<PrivateRoute>
        <div className='flex flex-col lg:flex-row flex-nowrap h-screen w-screnn'>
            <Sidebar/>
            <SidebarResponsive />
            <main className="flex w-full bg-gray-100 ">{children}</main>
        </div>
    
   //</PrivateRoute>);
    )}

export default LayoutPrivado