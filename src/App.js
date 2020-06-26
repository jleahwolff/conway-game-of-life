import React from 'react';
import './App.css';
// import Setup from "./components/setup.js";
import GridHook from "./hooks/gridHook.js";

import "./css/app.css";


function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <GridHook />
    </div>
  );
}

export default App;
