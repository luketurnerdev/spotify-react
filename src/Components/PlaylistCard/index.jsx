import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Typography, Grid, Button} from '@material-ui/core'
import styles from "./style";

const deletePlaylist = () => {
  alert('Are you sure?');
}

const DeleteButton = () => {
  return(
    <Button 
    variant="contained" 
    color="secondry"
    onClick={deletePlaylist}
    >
      Delete
    </Button>
  )
}


const PlaylistCard = (props) => {
  const {playlistTitle, trackAmount} = props;
  return (
    <div style = {styles.playlistCard}>
      <Typography variant="h5">
          Title: {playlistTitle}
      </Typography>
      <Typography variant="h6">
          {trackAmount} tracks
      </Typography>
      <DeleteButton/>
    </div>
    )
}

export default PlaylistCard;