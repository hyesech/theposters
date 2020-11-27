/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Header from "../Components/Header";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/theposters/" exact component={Home} />
        <Route path="/theposters/movie" exact component={Movie} />
        <Route path="/theposters/tv" exact component={TV} />
        <Route path="/theposters/search" component={Search} />
        <Route path="/theposters/movie/:id" component={Detail} />
        <Route path="/theposters/tv/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
