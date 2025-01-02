// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import { AuthContext } from './context/AuthContext'
import HomePage from './pages/HomePage'
import { useContext } from 'react'

function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUpPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={ isAuthenticated ? <HomePage /> : <Navigate to='/login'/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App