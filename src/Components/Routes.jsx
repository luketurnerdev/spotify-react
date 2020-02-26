import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  export default function Routes() {
      return(
          <Router>
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/playlists">Playlists</Link>
                          </li>
                          <li>
                              <Link to="/user">User</Link>
                          </li>
                      </ul>
                  </nav>

                  <Switch>
                      <Route path="/playlists">
                        <h1>Playlist component</h1>
                      </Route>
                      <Route path="/user">
                        <h1>User component</h1>
                      </Route>
                      <Route path="/">
                        <h1>Home component</h1>
                      </Route>
                  </Switch>
              </div>
          </Router>
      )
  }