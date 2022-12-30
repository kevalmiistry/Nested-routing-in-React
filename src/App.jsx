import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Main from './Components/Main/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route index path="/account" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
