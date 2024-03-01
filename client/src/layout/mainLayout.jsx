import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './sideBar'
function mainLayout() {
  return (
    <div>
    <SideBar/>
      <Outlet/>
    </div>
  )
}

export default mainLayout
