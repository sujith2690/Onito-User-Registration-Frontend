import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from './components/ErrorPage'
import Home from './components/pages/home/Home'
import UserRegistration from './components/pages/registration/UserRegistration'
import RegisteredUser from './components/pages/list/RegisteredUser'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<UserRegistration/>} />
          <Route path="/list" element={<RegisteredUser />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App