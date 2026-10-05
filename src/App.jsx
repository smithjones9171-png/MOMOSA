import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MoMoLogin from './Pages/MoMoLogin'
import { Routes, Route } from "react-router-dom";
import OTPVerify from './Pages/Otppage'
import PINEntry from './Pages/PINEntry'

function App() {
  

  return (
    <>
     <div>
      <Routes>
        <Route path='/' element={  <MoMoLogin/>}/>
        <Route path='/otppage' element={  <OTPVerify/>}/>
        <Route path='/pincode' element={  <PINEntry/>}/>
      </Routes>
      
     </div>
    </>
  )
}

export default App
