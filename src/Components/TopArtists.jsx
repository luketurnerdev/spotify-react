import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class TopArtists extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      artists : ["cool guy", "ok guy", "bad dude"]
    }
  }

  componentDidMount() {
    // Hit the spotify backend
    axios.get('http://localhost:8888/users_data/top_arists')
    .then(resp => {
      console.log(resp.data);
    })
    .catch (err => {
      console.log(err);
    });
  }
  render() {
    let artistList = this.state.artists;
    let items = [];

    for (const [index, value] of artistList.entries() ) {
      items.push(<li key={index}>{value}</li>)
    }

    return (
      <>
        <h1> Top Artists</h1>
        <ul>
          {items}
        </ul>
      </>
    )

  }
}

export default TopArtists;