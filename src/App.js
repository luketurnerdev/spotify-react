import React from 'react';
import Routes from "./Components/Routes";
import UserContext from "./UserContext";
import Cookies from 'js-cookie';
import './App.css';
import axios from 'axios';

function App() {
  

  return (
    <>
        <UserContext.Provider value = {{
          userID: Cookies.get('userID'),
          accessToken: Cookies.get('accessToken'),
        }}>
         <Routes/>
        </UserContext.Provider>
        
    </>
  )
}


export default App;
