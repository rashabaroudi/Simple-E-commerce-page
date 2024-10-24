
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  ProductContextProvider from './context/ProductContext.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <ProductContextProvider>
      <Navbar/>
      <App />
    </ProductContextProvider>
    
    </HashRouter>
)
