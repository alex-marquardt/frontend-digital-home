import React, { Component } from "react";
import "./App.css";
import Movies from "./Movies/Movies";
import Movie from "./Movies/Movie";
import Home from "./Home/Home";

import { Router } from "@reach/router";
import axios from "axios";

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios.get("https://localhost:5001/api/movies").then((res) => {
      this.setState({ movies: res.data });
      console.log(this.state.movies);
    });
  }

  getMovie = (movieId) =>
    this.state.movies.find((movie) => movie.id === parseInt(movieId));

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <div className="container">
            <Router>
              <Home path="/" />
              <Movies path="/movies" movies={this.state.movies} />
              <Movie
                path="/movies/:movieId"
                getMovie={(id) => this.getMovie(id)}
              />
            </Router>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
