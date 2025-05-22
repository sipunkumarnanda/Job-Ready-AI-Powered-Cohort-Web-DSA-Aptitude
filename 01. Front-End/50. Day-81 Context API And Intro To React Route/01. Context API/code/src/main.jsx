
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./components/Index.css"
import {ToastContainer} from "react-toastify"
import Wrapper from './components/Wrapper.jsx';

createRoot(document.getElementById('root')).render(
<Wrapper>
  {/* <h1>Hello</h1> */}
  <App/>
  <ToastContainer position='top-center' />
</Wrapper>
)

//  <>
//   <App/>
//   <ToastContainer position='top-center' />
//   </>