
import { createRoot } from 'react-dom/client'
import "./components/Index.css"
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { store } from './store/Store.jsx'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <BrowserRouter>
        <App />
        </BrowserRouter>
   </Provider>
)
