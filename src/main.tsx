import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { buttonTheme } from './theme/components/Button.ts'

const colors = {
  brandBlack: '#131316',
  brandOrange: '#FF5403',
  brandWhite: '#ffffff',
}


const theme = extendTheme({
  colors,
  components: {
    Button: buttonTheme
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
