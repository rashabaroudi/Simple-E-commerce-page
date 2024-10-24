
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  ProductContextProvider from './context/ProductContext.jsx'

import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
 
    <ProductContextProvider>
      <Navbar/>
      <App />
    </ProductContextProvider>
    
    
)
