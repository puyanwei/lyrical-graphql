import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import SongList from "./pages/SongList";
import SongDetail from "./pages/SongDetail";
import AddSong from "./pages/AddSong";
import "./style/style.css";

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="songs/new" component={AddSong} />
        <Route path="songs/:id" component={SongDetail} />
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
