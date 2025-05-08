
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Xy from './xy.jsx'

import { x, y } from './App.jsx'
console.log(x,y);

// createRoot(document.getElementById('root')).render(<App />)

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Xy />
  </>
);