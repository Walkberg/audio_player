import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import AudioPlayer from "./view/audioPlayer"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AudioPlayer/>
    </div>
  );
}

export default App;
