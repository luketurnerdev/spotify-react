import React, {Component} from 'react';
import PlaylistCard from "./../Components/PlaylistCard";

import {Typography, Grid} from '@material-ui/core'

const Playlists = () => {

  const testPlaylistObject = [
    {title: "First one", trackAmount: 5},
    {title: "Second one", trackAmount: 8},
    {title: "Third one", trackAmount: 4},
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
        {testPlaylistObject.map(playlist => {
          return  <PlaylistCard
            playlistTitle={playlist.title}
            trackAmount={playlist.trackAmount}
          />
        })}
        </Grid>
      </div>

    </div>
    )
}

export default Playlists;