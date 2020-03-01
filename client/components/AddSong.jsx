import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { graphql } from "react-apollo";
import getSongsQuery from "../queries/getSongsQuery";
import addSongMutation from "../queries/addSongMutation";

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: getSongsQuery }]
      })
      .then(() => {
        hashHistory.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/">Back</Link>
        <h3>Add in a new song</h3>
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Song Title:</label>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSongMutation)(AddSong);
