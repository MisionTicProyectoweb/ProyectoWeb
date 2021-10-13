import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import loafing from "media/loadingfin.png"
export const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading } = useAuth0();

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

