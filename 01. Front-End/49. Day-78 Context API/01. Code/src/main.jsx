
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./components/Index.css"
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <ToastContainer position='top-center' />
  </>
)