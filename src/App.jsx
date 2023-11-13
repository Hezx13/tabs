import { useState } from 'react'
import AppRouter from './AppRouter'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppRouter></AppRouter>
    </ThemeProvider>
  )
}

export default App
