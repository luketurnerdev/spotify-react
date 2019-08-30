import React from 'react';
import logo from './logo.svg';
import Login from "./Components/Login"
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src="./img/spotify.png" alt="spotify-logo"></img>
        <h1>Spotify App</h1>
        <Login />
      </header>
    </div>

    </>
  );
}

export default App;
