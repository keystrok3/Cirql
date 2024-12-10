import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import './index.css'
import App from './App.jsx'
import theme from './theme/theme.js'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
