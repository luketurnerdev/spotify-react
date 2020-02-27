import React, {Component} from 'react';
import axios from 'axios';

import {Typography, Grid, Button} from '@material-ui/core'

const spotifyLoginRedirect = () => {
    //  Get request to {backend_url}/auth/login
    alert(process.env.REACT_APP_BACKEND_API)
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