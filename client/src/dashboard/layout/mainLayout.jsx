import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './sideBar'
import Header from './header';
function mainLayout() {
  return (
    <div className='min-w-screen min-h-screen bg-slate-100'>
      <SideBar />
      <div className='ml-[250px] w-[calc(100vw-258px)] min-h(vh)'>
        <Header/>
      </div>
      <div className='p-4'>
        <div className='pt-[85px]'>
         <Outlet/>
        </div>
      </div>
      
    </div>
  )
}

export default mainLayout
