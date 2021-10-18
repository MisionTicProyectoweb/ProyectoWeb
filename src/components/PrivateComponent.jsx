//import { useUser } from 'Contex/UserContext.js';
import { useUser } from 'Contex/UserContext';
import React from 'react'
//resive una lista de roles y el children 
//
 const PrivateComponent = ({roleslist,children}) => {
const {userData}= useUser();
console.log("userdata en el prievate",userData.rol);
/* const {userData} = useUser();
console.log("estas es la cvgtrhtryhyhgfgthgtrs ", userData); */
    if(roleslist.includes(userData.rol)){
        return children;
    }else{
        return<> </>;
    }
}
export default  PrivateComponent;