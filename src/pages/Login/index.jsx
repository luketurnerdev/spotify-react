import React, {useState, useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom';
import axios from 'axios';

import {Typography, Grid, Button} from '@material-ui/core'

const sendUserToSpotifyAuth = url => {
    window.location.href = url;
    }

function myFunction() {
    console.log('fucntion');
}

const Login = props => {
    const [loggedIn, setLoggedIn] = useState(false);
    const {setRedirectURL} = props;

    const spotifyLoginRedirect = () => {  

    axios.get(`${process.env.REACT_APP_BACKEND_API}/auth/login`)
    .then(resp => {
        console.log(resp.data.url);
        sendUserToSpotifyAuth(resp.data);
        myFunction();
        return null;
    })
    .catch(err => {
        alert(err);
        console.log(err);
    })

}
    return (
        <div>
            <Button variant="contained" onClick={spotifyLoginRedirect}>
                <h3>Login With Spotify</h3>
            </Button>
            {/* <h1>{redirectURL || 'noURL'}</h1> */}
        {/* <Redirect to="google.com"/> */}

        </div>
    )

}

export default Login;