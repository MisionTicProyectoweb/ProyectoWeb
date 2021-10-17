import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import loafing from "media/loadingfin.png"
import {obtenerdatosUsuario} from 'utils/api';
import {useUser} from 'Contex/UserContext';
export const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading,getAccessTokenSilently  } = useAuth0();
  const {setUserData}=useUser({});
    useEffect(() => {
    const FetchAuth0Token= async ()=>{
//si se quiere hacer validaciones cn el token 
    /*   if(localStorage.getItem('token')){
        //validar fecha de aspiracion del token
      }
else{ */
  // 1.PEDIR TOKEN A AUTH0
      const accessToken = await getAccessTokenSilently({
       audience:'api-autenticacion-almacen-mintic',
      
      });
      //2.RESIVIR TOKEN DE AUTH0
        console.log(accessToken);
        localStorage.setItem('token',accessToken);
   
        //obtener usuarios con peticion de error o bien
           //3. ENVIARLE EL TOKEN AL BACKEN 
    await obtenerdatosUsuario((response)=>{
        console.log('response',response);
          setUserData(response.data);
      console.log("ressss",setUserData(response.data));
        },(error)=>{
          console.log('error',error);
         }
      )
    };
    if(isAuthenticated){

      FetchAuth0Token();
    }

    }
, [isAuthenticated, getAccessTokenSilently]); 


console.log(isLoading);
    if(isLoading) return(
        <div className="">
            <div  className="p-10 flex justify-center text-green-300"><img src={loafing}  /> </div>
            <div className="p-10 flex justify-center text-indigo-600 text-4xl">
            Loading...  
            </div>   
      </div>
    )
    return isAuthenticated ? <>{children}</> : <div className="p-10 flex justify-center text-indigo-600 text-4xl">No estas autenticado </div>
    }

