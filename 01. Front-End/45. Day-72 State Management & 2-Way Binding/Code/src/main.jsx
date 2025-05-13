import React from 'react';
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Json_rendering from './Json_rendering.jsx'
import Use_State_Hook from './Use_State_Hook.jsx';

function CombinedApp() {
  return (
   <>
   {/* <App /> */}
      {/* <Json_rendering /> */}
      <Use_State_Hook/>
   </>
  );
}

createRoot(document.getElementById('root')).render(
    <CombinedApp/>
)
