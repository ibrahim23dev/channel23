import React from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import MainLayout from './layout/mainLayout';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dasboard' element={<MainLayout/>}>
            <Route path=' ' element={<Navigate to='/dasboard/admin'/>}>
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
