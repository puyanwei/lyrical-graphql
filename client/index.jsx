import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import SongList from "./components/SongList";
import AddSong from "./components/AddSong";
import "./style/style.css";

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="songs/new" component={AddSong} />
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
