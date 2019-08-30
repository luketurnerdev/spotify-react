import React, {Component} from 'react';

class Login extends Component {
  state = {
    logged_in: false
  }


  render() {
    return (
      <button>
        <a href="http://google.com" target="_blank">
        Login with Spotify
        </a>
      </button>
    )
  }
}

export default Login;
