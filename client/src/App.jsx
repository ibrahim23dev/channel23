import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../src/dashboard/layout/mainLayout';
import Adminindex from './dashboard/Pages/Adminindex';
import News from './dashboard/Components/News';
import AddWritter from './dashboard/Components/AddWritter';
import Writters from './dashboard/Components/Writter';
import Profile from './dashboard/Components/profile';
import Login from './dashboard/Pages/login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
          <Route path='/dasboard' element={<MainLayout/>}>
            <Route path='' element={<Navigate to='/dasboard/admin'/>}>
              <Route path='admin' element={<Adminindex/>} />
              <Route path='/dasboard/news' element={<News/>} />
              <Route path='/dasboard/writter/add' element={<AddWritter/>} />
              <Route path='/dasboard/writters' element={<Writters/>} />
              <Route path='/dasboard/profile' element={<Profile/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
