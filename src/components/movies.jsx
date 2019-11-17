import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MtButton from "../components/button/MtButton";
import MtTable from "../components/Table/MtTable";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log(movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;

    return (
      <div>
        <p>showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <MtButton
                    mtext="Delete"
                    action={() => this.handleDelete(movie)}
                  ></MtButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MtTable
          rowCount={count}
          columnCount={Object.keys(this.state.movies[0]).length}
          source={this.state.movies}
        ></MtTable>
      </div>
    );
  }
}

export default Movies;
