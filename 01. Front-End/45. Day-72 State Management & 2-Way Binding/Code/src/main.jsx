import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Json_rendering from './Json_rendering.jsx'

function CombinedApp() {
  return (
   <>
   <App />
      <Json_rendering />
   </>
  );
}

createRoot(document.getElementById('root')).render(
    <CombinedApp/>
)
