import React, {useState} from 'react';
import Routes from "./Components/Routes";
import UserContext from "./UserContext";
import Cookies from 'js-cookie';
import './App.css';
import Main from "./Components/Main";
import axios from 'axios';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "d9cca6b8ff4248c9a2161fd2e94bacc0";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  'playlist-modify-public',
  'user-top-read',
  'user-read-email',
  'user-read-private',
  'user-read-birthdate',
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

const LoginButton = () => 
  <a
  className="btn btn--loginApp-link"
  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
  >
    Login to Spotify
  </a>;


function App() {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState('');

  let _token = hash.access_token;

  const getUserData = async (token) => {

    const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    //Return user profile information
    console.log(response.data);
    return response.data;
  }
    if (_token) {
      // Set token
       !token && setToken(_token);
       getUserData(_token);
    }
    

  return (
    <>
        {!token && <LoginButton />}
        {token && <Main token={token} />}
        
    </>
  )
}


export default App;
