import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data: { songs, loading } }) => {
  console.log(songs, loading);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {songs.map(({ title }) => (
            <li>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
