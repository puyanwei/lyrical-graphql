import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import getSongByIdQuery from "../queries/getSongByIdQuery";

const SongDetail = ({ data: { song } }) =>
  song ? (
    <div>
      <br />
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
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
