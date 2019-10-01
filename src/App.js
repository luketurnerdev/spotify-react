import React from 'react';
import ReactDOM from 'react-dom';
import TopArtists from "./Components/TopArtists.jsx"
import Login from "./Components/Login.jsx"
import Dashboard from "./Components/Dashboard";
import './App.css';
import axios from 'axios';

function LoggedStatus(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <Dashboard />
  } 
  return <Login />
}

function App(props) {

  return (
    <>
      <LoggedStatus isLoggedIn= {true} />
    </>
  )
}





// ReactDOM.render(<TopArtists/>, document.getElementById('root'));


export default App;
