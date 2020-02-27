import React, {Component} from 'react';
import axios from 'axios';

import {Typography, Grid, Button} from '@material-ui/core'

const spotifyLoginRedirect = () => {
    //  Get request to {backend_url}/auth/login
    // Are you sure? If yes, then...
    axios.get(process.env.REACT_APP_BACKEND_API)
    .then(resp => {
        alert(resp.data);
    })
    .catch(err => {
        alert(err);
    })
}

const Login = () => {
    return (
        <div>
            <Button variant="contained"
            onClick={spotifyLoginRedirect}
            ><h3>Login With Spotify</h3></Button>
        </div>
    )

}

export default Login;