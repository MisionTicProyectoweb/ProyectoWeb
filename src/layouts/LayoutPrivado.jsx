import SidebarVendedor from 'Components/SidebarVendedor'
import React from 'react'

const LayoutPrivado = ({children}) => {
    return (
<div className='flex w-screen h-screen border-t-0'>
      <div className='flex flex-nowrap h-full w-full'>
        <SidebarVendedor />
        <main className='flex w-full  overflow-y-scroll items-center justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
}

export default LayoutPrivado
