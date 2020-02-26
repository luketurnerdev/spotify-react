import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Typography, Grid} from '@material-ui/core'

const PlaylistCard = (props) => {
  const {playlistTitle, trackAmount} = props;
  return (
    <div>
      <Typography variant="h5">
          Title: {playlistTitle}
      </Typography>
      <Typography variant="h6">
          {trackAmount} tracks
      </Typography>
    </div>
    )
}

export default PlaylistCard;