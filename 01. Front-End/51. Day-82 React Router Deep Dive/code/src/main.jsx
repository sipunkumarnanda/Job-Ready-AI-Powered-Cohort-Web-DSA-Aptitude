
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import "./Components/Index.css"
import Wrapper from './Components/Wrapper.jsx'

createRoot(document.getElementById('root')).render( 
  <Wrapper>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Wrapper>
)
