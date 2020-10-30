import React, { Component } from "react";
// import "./App.css";
import { Link } from "@reach/router";
import {
  FaFilm,
  FaImages,
  FaGamepad,
  FaMusic,
  FaLaptopCode,
  FaWrench,
} from "react-icons/fa";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <div className="container">
            <div className="header">
              <h6>Welcome to your</h6>
              <h1>Digital Home Library</h1>
            </div>

            <div className="row">
              <div className="col-md-4">
                <Link
                  to="movies"
                  className="bg-light text-dark btn btn-secondary"
                >
                  <span>
                    <p>
                      <FaFilm style={{ fontSize: "28px" }} /> Movies
                    </p>
                  </span>
                </Link>
              </div>
              <div className="col-md-4">
                <a className="bg-light text-dark btn btn-secondary" href="...">
                  <span>
                    <p>
                      <FaImages style={{ fontSize: "28px" }} /> Pictures
                    </p>
                  </span>
                </a>
              </div>
              <div className="col-md-4">
                <a className="bg-light text-dark btn btn-secondary" href="...">
                  <span>
                    <p>
                      <FaGamepad style={{ fontSize: "28px" }} /> Games
                    </p>
                  </span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <a className="bg-light text-dark btn btn-secondary" href="...">
                  <span>
                    <p>
                      <FaMusic style={{ fontSize: "28px" }} /> Games
                    </p>
                  </span>
                </a>
              </div>
              <div className="col-md-4">
                <a className="bg-light text-dark btn btn-secondary" href="...">
                  <span>
                    <p>
                      <FaLaptopCode style={{ fontSize: "28px" }} /> Games
                    </p>
                  </span>
                </a>
              </div>
              <div className="col-md-4">
                <a className="bg-light text-dark btn btn-secondary" href="...">
                  <span>
                    <p>
                      <FaWrench style={{ fontSize: "28px" }} /> Games
                    </p>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
