import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data: { songs, loading } }) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="collection">
          {songs.map(({ title, id }) => (
            <li className="collection-item" key={id}>
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
