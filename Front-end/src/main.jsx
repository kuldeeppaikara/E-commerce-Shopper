import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/Context.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </ShopContextProvider>
  </StrictMode>
);
