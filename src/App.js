import React from 'react';
import './App.css';
// import Setup from "./components/setup.js";
import GridHook from "./hooks/gridHook.js"


function App() {
  return (
    <div className="App">
      <h2>Conway's Game of Life</h2>
      <GridHook />
    </div>
  );
}

export default App;
