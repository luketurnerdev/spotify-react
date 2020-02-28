import React, {Component, useState} from 'react';
import axios from 'axios';

import {Typography, Grid, Button} from '@material-ui/core'

const spotifyLoginRedirect = () => {
    //  Get request to {backend_url}/auth/login
    // Are you sure? If yes, then...
    
    
    axios.get(`${process.env.REACT_APP_BACKEND_API}/auth/login`)
    // .then(resp => {
    //     // let {redirectURL} = resp.data;
    //     console.log(resp.data);
    //     // window.location.href = redirectURL;
    // })
    .then(resp => {
         let {redirectURL} = resp.data;
        // console.log(resp);
        window.location.href = redirectURL;
    })
    .catch(err => {
        alert(err);
        console.log(err);
    })

    
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