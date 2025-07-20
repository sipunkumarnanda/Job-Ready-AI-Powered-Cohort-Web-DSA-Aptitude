
// src/App.jsx

import React from 'react';
import FacialExpression from './components/FacialExpression';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Face Emotion Recognition
      </h2>
      <FacialExpression />
    </div>
  );
}

export default App;
