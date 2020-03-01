import React from "react";
import { Link } from "react-router";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import getSongsQuery from "../queries/getSongsQuery";

const SongList = ({ data: { songs, loading } }) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <br />
          <ul className="collection">
            {songs.map(({ title, id }) => (
              <li className="collection-item" key={id}>
                {title}
              </li>
            ))}
          </ul>
          <Link to="/songs/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default graphql(getSongsQuery)(SongList);
