import React, { Component } from "react";
import { graphql } from "react-apollo";
import addLyricToSongMutation from "../queries/addLyricToSongMutation";

class AddLyricsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(23235325);
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    });
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label>Add a lyric</label>
        <input
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSongMutation)(AddLyricsForm);
