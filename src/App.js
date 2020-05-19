import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'; 
import About from './Component/About Me/About';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
    </div>
  );
}

export default App;
