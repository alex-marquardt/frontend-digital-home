import React, { Component } from "react";
import { Link } from "@reach/router";

class Movie extends Component {
  render() {
    const movie = this.props.getMovie(this.props.movieId);

    let content = "Loading";

    if (movie !== undefined) {
      content = (
        <React.Fragment>
          <div className="header">
            <Link to="/">
              <h6>Digital Home Library</h6>
            </Link>
            <h1>{movie.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={"/images/" + movie.title + ".jpg"}
                alt="missing"
              />
            </div>
            <div className="col-md-8">
              Title
              <p>
                <b>{movie.title}</b>
              </p>
              Aldersbegrænsning
              <p>
                <b>{movie.ageLimit}</b>
              </p>
              Afspilningstid
              <p>
                <b>{movie.playTime}</b>
              </p>
              Genres
              <p>
                <b>{movie.genres.map((genre) => genre.name + " ")}</b>
              </p>
              Plot
              <p style={{ textAlign: "justify" }}>
                <b>{movie.plot}</b>
              </p>
              <hr />
              <Link to="/movies">
                <button className="bg-light text-dark btn btn-secondary">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      );
    }

    return <React.Fragment>{content} </React.Fragment>;
  }
}

export default Movie;
