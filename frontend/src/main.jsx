import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StrictMode } from 'react'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SignUpPage /> }/>
          <Route path='/signup' element={ <SignUpPage /> }/>
          <Route path='/login' element={ <LoginPage /> }/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
