import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import DashBoard from './Components/DashBoard/DashBoard'
import Login from './Components/Login/Login'
import Main from './Components/Main/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="dash" element={<DashBoard />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route index path="/account" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
