import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './../containers/Home';
import Detail from './../containers/Detail';
import Error404 from './../error';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/post/:id'}>
            <Detail />
          </Route>
          <Route path={'*'}>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    );
  }
}
