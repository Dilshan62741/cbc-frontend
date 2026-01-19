import { useState } from 'react'
import LoginPage from './pages/login'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import AdminPage from './pages/admin/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import CustomerPage from './pages/customerPage'
import RegisterPage from './pages/registerPage'
function App() {
  

  return (
    <BrowserRouter>
   
    <div >
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
       <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path = "/admin/*" element = {<AdminPage/>}/>
        <Route path = "/test" element = {<TestPage/>}></Route>
        <Route path = "/customer" element = {<CustomerPage/>}></Route>
        {/* <Route path = "/*" element = {<h1>404 Not Found</h1>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
