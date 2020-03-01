import React, {Component, useContext, useState, useEffect} from 'react';
import UserContext from "./../../UserContext";
import PlaylistCard from "../../Components/PlaylistCard";
import styles from "./styles";
import axios from "axios";

import {Typography, Grid} from '@material-ui/core'

const Playlists = () => {

  
  const userInfo = useContext(UserContext);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylists();
  });
  const testPlaylistObject = [
    {title: "First one", trackAmount: 5},
    {title: "Second one", trackAmount: 8},
    {title: "Third one", trackAmount: 4},
    {title: "Fourth one", trackAmount: 4},
    {title: "Fifth one", trackAmount: 4},
    {title: "Sixth one", trackAmount: 4},
  ]

  async function getUserPlaylists (req, res) {
    // console.log(res)
    let token = userInfo.accessToken || null;
    let userID = userInfo.userID || null;
    let playlists = axios({
        method: 'GET',
        url: `https://api.spotify.com/v1/users/${userID}/playlists`,
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
    .then(resp => {
        // return resp.data.items;
        console.log(resp.data)
        res.json(resp.data.items);
    })
    .catch(err => {
      // IF IT COMES BACK WITH 'invalid token, prompt the re login
        console.log(err);
    })

    return token;
}

  const PlaylistsContainer = () => {
    return(
      <div className="playlistsContainer">
        {/* //Dynamically map here later */}
        <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        {testPlaylistObject.map((playlist, index) => {
          return  (
            <Grid item xs={4} className={styles.playlistGrid}>
            <PlaylistCard
              playlistTitle={playlist.title}
              trackAmount={playlist.trackAmount}
            />
            
        </Grid>
          )
        })}
        </Grid>
      </div>
    )
  }
  
  return (
    <div>
      <Typography variant="h3">token: {userInfo.accessToken}</Typography>
      {/* <h1> Playlists: {userPlaylists[0]}</h1> */}
    
    </div>
    )
}

export default Playlists;