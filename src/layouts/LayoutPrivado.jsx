import SidebarAdmin from 'components/SideBarAdmin.jsx'
import React from 'react'

const LayoutPrivado = ({children}) => {
    return (
<div className='flex w-screen h-screen border-t-0'>
      <div className='flex flex-nowrap h-full w-full '>
        <SidebarAdmin />
        <main className='flex w-full h-full items-center justify-center overflow-y-scroll'>
          {children}
        </main>
      </div>
    </div>
  );
}

export default LayoutPrivado
