import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyProvider } from './context/MyContext'
// style
import './style/global.css'
// pages
import { Home, Login } from './pages'

export default function App() {
        
  return (
    <MyProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </MyProvider>
  )
}
