import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import getSongByIdQuery from "../queries/getSongByIdQuery";
import AddLyricsForm from "../components/AddLyricsForm";

const SongDetail = ({ data: { song }, params: { id } }) =>
  song ? (
    <div>
      <br />
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <AddLyricsForm songId={id} />
    </div>
  ) : (
    <div>Loading...</div>
  );

export default graphql(getSongByIdQuery, {
  options: props => {
    return {
      variables: { id: props.params.id }
    };
  }
})(SongDetail);
