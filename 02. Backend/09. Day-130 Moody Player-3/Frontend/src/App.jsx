
import FacialExpression from './components/FacialExpression';
import "../src/App.css"
import MoodSongs from './components/MoodSongs';

function App() {
  return (
    <div className="app">
      {/* <h2>Face Emotion Recognition</h2> */}
      <FacialExpression />
      <MoodSongs/>
    </div>
  );
}

export default App;
