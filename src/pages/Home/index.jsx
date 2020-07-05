import React from 'react';
import axios from 'axios';
import {
    BrowswerRouter,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

  const receiveSpotifyData = (req, res) => {
      axios.get(`${process.env.REACT_APP_BACKEND_API}/auth/storeUserData`)
      .then(resp => {
          console.log(resp.data)
          console.log(resp.headers)
          res.redirect('/');
      })
      .catch(err => {
          console.log(err);
      })
    // res.headesr in axios call
  }
  export default function Home() {
      return(
          <button onClick={receiveSpotifyData}>button</button>
      )
  }