import './App.css'
import { Outlet } from 'react-router-dom'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './theme/theme'
import { CssBaseline } from '@mui/material'


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
