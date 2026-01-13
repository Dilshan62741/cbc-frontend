import { useState } from 'react'
import LoginPage from './pages/login'
import SignUpPage from './pages/singnUp'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   
    <div >
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
       {/* <Header/> */}
      <Routes path = "/*">
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path = "/admin/*" element = {<AdminPage/>}/>
        <Route path = "/test" element = {<TestPage/>}></Route>
        <Route path = "/*" element = {<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
