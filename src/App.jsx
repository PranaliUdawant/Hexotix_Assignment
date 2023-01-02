import React from 'react'
import Navbar from './component/Navbar'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import DashBoard from './pages/DashBoard'
export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      {/* <Register /> */}
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  </>
}
