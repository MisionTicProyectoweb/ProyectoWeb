import React from 'react'
import { useEffect } from 'react';
import Sidebar from 'components/SideBar.jsx'
import SidebarResponsive from 'components/SidebarResponsive';
import { PrivateRoute } from 'components/PrivateRoute';
const LayoutPrivado = ({children}) => {
    
    return (
        <PrivateRoute>
        <div className='flex flex-col lg:flex-row flex-nowrap h-screen w-screnn'>
            <Sidebar/>
            <SidebarResponsive />
            <main className="flex w-full bg-gray-100 ">{children}</main>
        </div>
    
    </PrivateRoute>);
}

export default LayoutPrivado