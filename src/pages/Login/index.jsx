import React, {Component, useState} from 'react';
import axios from 'axios';

import {Typography, Grid, Button} from '@material-ui/core'

const spotifyLoginRedirect = () => {
    //  Get request to {backend_url}/auth/login
    // Are you sure? If yes, then...
    
    let url = "";
    axios.get(`${process.env.REACT_APP_BACKEND_API}/auth/login`)
    .then(resp => {
        // url = resp.data;
        console.log(url);
    })
    .catch(err => {
        // alert(err);
        console.log(err);
    })
    // window.location.href = url;
}

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <Button variant="contained"
            onClick={spotifyLoginRedirect}
            ><h3>Login With Spotify</h3></Button>
        </div>
    )

}

export default Login;