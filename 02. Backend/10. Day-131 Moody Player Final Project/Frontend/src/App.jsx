
import FacialExpression from './components/FacialExpression';
import "../src/App.css"
import MoodSongs from './components/MoodSongs';
import { useState } from 'react';

function App() {

  const [songs, setSongs] =  useState([])


  return (
    <div className="app">
      {/* <h2>Face Emotion Recognition</h2> */}
      <FacialExpression setSongs={setSongs} />
      <MoodSongs songs={songs}/>
    </div>
  );
}

export default App;
