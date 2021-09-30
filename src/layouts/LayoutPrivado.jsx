import SidebarVendedor from 'components/SidebarVendedor'
import React from 'react'

const LayoutPrivado = ({children}) => {
    return (
<<<<<<< HEAD
<div className='flex w-screen h-screen border-t-0'>
      <div className='flex flex-nowrap h-full w-full'>
        <SidebarVendedor />
        <main className='flex w-full  overflow-y-scroll items-center justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
=======
        <div className='flex w-screen h-screen border-t-0'>
            <div className='flex flex-nowrap h-full w-full'>
                <main className='flex w-full  overflow-y-scroll items-center justify-center'>{children}</main>
            </div>
        </div>
    )
>>>>>>> ac2bfe0488f3470115aba5170fbcf3db028554aa
}

export default LayoutPrivado