// Task 1
// App.jsx (Root Component)

// Imports react with useState, Gallery file, and the App css
import { useState } from 'react'
import Gallery from './Gallery'; 
import './App.css'; 

// Uses global state variable set to initial value, sets up the app structure
const App = () => {
  const [globalState, setGlobalAppState] = useState("valuesfirst value");

  return (
    <div className="app-container">
      <header>
        <h1>{globalState}</h1>
      </header>

      <Gallery />
    </div>
  );
};

export default App
