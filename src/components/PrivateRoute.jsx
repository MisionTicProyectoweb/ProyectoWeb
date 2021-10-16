import React from 'react'
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import loafing from "media/loadingfin.png"
export const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading,getAccessTokenSilently  } = useAuth0();
  
    useEffect(() => {
    const FetchAuth0Token= async ()=>{
//si se quiere hacer validaciones cn el token 
    /*   if(localStorage.getItem('token')){
        //validar fecha de aspiracion del token
      }
else{ */
      const accessToken = await getAccessTokenSilently({
       audience:'api-autenticacion-almacen-mintic',
      
      });
        console.log(accessToken);
        localStorage.setItem('token',accessToken);
    
    }
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

