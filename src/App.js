import React from 'react';
import Routes from "./Components/Routes";
import UserContext from "./UserContext";
import Main from "./Main";
import Cookies from 'js-cookie';
import './App.css';
import axios from 'axios';

function App() {
  
  const theme = "light";

  return (
    <>
        <UserContext.Provider value = {{
          userID: Cookies.get('userID'),
          accessToken: Cookies.get('accessToken'),
        }}>
          <div>
            <Main/>
          </div>
        </UserContext.Provider>
        
         <Routes/>
    </>
  )
}

function Text({theme}) {
  return(
    <h1 style = {{
       color: `${theme}`
    }}>{theme}</h1>
  );
  }


export default App;
