import React from "react";
import Playlists from "../pages/Playlists";
import Login from "../pages/Login"
import Home from "../pages/Home/index"
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
                          <li>
                              <Link to="/login">Login</Link>
                          </li>
                      </ul>
                  </nav>

                  <Switch>
                      <Route path="/playlists">
                        <Playlists/>
                      </Route>
                      <Route path="/user">
                        <h1>User component</h1>
                      </Route>
                      <Route path="/login">
                        <Login/>
                      </Route>
                      <Route path="/">
                        <Home />
                      </Route>
                  </Switch>
              </div>
          </Router>
      )
  }