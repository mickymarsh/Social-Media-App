import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { DarkModeContextProvider } from "./Context/darkModeContext.jsx"; 
import { AuthContextProvider } from "./Context/authContext.jsx"; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      
    </DarkModeContextProvider>
  
  </StrictMode>,
)
