import React, {Component} from 'react';

class Login extends Component {
  state = {
    // logged_in: false
  }


  render() {
    return (
      <button>
        <a href={`http://localhost:8888/auth/login`}>
        Login with Spotify
        </a>
      </button>
    )
  }
}

export default Login;
