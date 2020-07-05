import React from 'react';
import {Button} from '@material-ui/core'
import axios from 'axios';


const Main = props => {
    const {token, userData} = props;

    const testAPICall = async () => {
        console.log('testclick')
        const playlists = await axios({
            method: 'GET',
            url: `https://api.spotify.com/v1/users/${userData.id}/playlists?limit=50`,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        .then(resp => {
            // return resp.data.items;
            console.log(resp.data);
            // res.json(resp.data.items);
            return resp.data;
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <h1>{userData.display_name ? `Logged in as ${userData.display_name}` : 'Welcome'} </h1>
            <Button onClick={testAPICall}>Get Playlists (shown in console)</Button>
            {userData.images && <img src={userData.images[0].url} alt="User profile" style={{height:'100px', width: 'auto'}} />}
        </>
    )
};

export default Main;

