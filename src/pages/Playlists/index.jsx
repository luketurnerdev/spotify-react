import React, {Component} from 'react';
import PlaylistCard from "../../Components/PlaylistCard";
import styles from "./styles";

import {Typography, Grid} from '@material-ui/core'

const Playlists = () => {

  const testPlaylistObject = [
    {title: "First one", trackAmount: 5},
    {title: "Second one", trackAmount: 8},
    {title: "Third one", trackAmount: 4},
    {title: "Fourth one", trackAmount: 4},
    {title: "Fifth one", trackAmount: 4},
    {title: "Sixth one", trackAmount: 4},
  ]
  
  return (
    <div>
      <Typography variant="h3">Gday!</Typography>

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

    </div>
    )
}

export default Playlists;