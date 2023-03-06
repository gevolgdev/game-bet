import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyProvider } from './context/MyContext'
// style
import './style/global.css'
// pages
import { Home, Login, EasyGame } from './pages'

export default function App() {
        
  return (
    <MyProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/jogo-seguro' element={<EasyGame/>} />
      </Routes>
    </MyProvider>
  )
}
