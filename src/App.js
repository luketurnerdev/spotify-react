import React from 'react';
import Routes from "./Components/Routes";
import './App.css';
import axios from 'axios';

const UserContext = React.createContext({
  userID: null,
  accessToken: null,
})

function App(props) {
  
  const [theme, setTheme] = React.useState("red");
  
  const onClickHandler = () => {
    setTheme(theme === "red" ? "blue" : "red")
  }
  return (
    <>
        <Text theme={theme}/>
          <button onClick={onClickHandler}>Theme</button>

        
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
