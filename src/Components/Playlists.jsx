import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Playlists = () => {
    const getUserPlaylists = () => {
        axios({
                "method": 'get',
                url: "localhost:3001/"
            })
            .then(resp => {
                console.log(resp);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            }) 
    }

    const generateNewPlaylist = () => {
        return (
          axios.get("http://localhost:3001/auth/login")
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
            console.log(err);
        })
        )
      }


    return (
        <button onClick={getUserPlaylists}>Clicky</button>
        )
}

export default Playlists;