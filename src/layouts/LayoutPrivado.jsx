import React from 'react'
import Sidebar from 'components/SideBar.jsx'
import SidebarResponsive from 'components/SidebarResponsive';

const LayoutPrivado = ({children}) => {
    return (
        <div className='flex flex-col lg:flex-row flex-nowrap h-screen w-screnn'>
            <Sidebar/>
            <SidebarResponsive />
            <main className="flex w-full bg-gray-100 ">{children}</main>
        </div>
    )
}

export default LayoutPrivado