import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import getSongsQuery from "../queries/getSongsQuery";
import deleteSongMutation from "../queries/deleteSongMutation";

class SongList extends Component {
  handleDelete(id) {
    this.props
      .mutate({
        variables: {
          id
        }
      })
      .then(() => this.props.data.refetch());
  }

  render() {
    const {
      data: { songs, loading }
    } = this.props;
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
                  <Link to={`/songs/${id}`}>{title}</Link>
                  <i
                    className="material-icons"
                    onClick={() => this.handleDelete(id)}
                  >
                    delete
                  </i>
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
  }
}

export default graphql(deleteSongMutation)(
  // prettier-ignore
  graphql(getSongsQuery)(SongList)
);
