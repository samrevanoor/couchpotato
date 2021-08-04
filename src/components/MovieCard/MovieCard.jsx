import React, { Component } from "react";
import "../MovieCard/MovieCard.css";

class MovieCard extends Component {
  state = {
    showPlot: false,
  };

  shortenTitles(title) {
    if (title.length > 40) {
      return `${title.substr(0, 40)} ...`;
    } else {
      return title;
    }
  }

  shortenGenres(genre) {
    if (genre.length > 3) {
      const shortGenreList = [`${genre[0]}, ${genre[1]}, ${genre[2]} +`];
      return shortGenreList;
    } else {
      return genre;
    }
  }

  shortenPlot(plot) {
    if (plot.length > 350) {
      return `${plot.substr(0, 350)} ...`;
    } else {
      return plot;
    }
  }

  handleShowPlot = () => {
    const { showPlot } = this.state;
    this.setState({ showPlot: !showPlot });
  };

  render() {
    const { image, title, genre, year, plot, imdb, id, location } = this.props;
    const { showPlot } = this.state;
    let altText = `movie poster for ${title}`;
    let imdbLink = `https://www.imdb.com/title/${imdb}/?ref_=fn_al_tt_1`;
    let display;
    if (showPlot) {
      if (!imdb) {
        display = (
          <div className="MovieCard-body">
            <div className="MovieCard-seeMore">
              <span className="MovieCard-title">
                {this.shortenTitles(title)}, {year}
              </span>
              <span className="MovieCard-genre">
                {this.shortenGenres(genre).join(", ")}
              </span>
              {this.shortenPlot(plot)}
              <br /> <br />
              <span className="MovieCard-seeMoreButtons">
                <button onClick={this.handleShowPlot}>see less</button>{" "}
                <button onClick={() => this.props.handleDeleteButtonClick(id)}>
                  delete movie
                </button>
                {location.pathname === "/watchlist" && <br />}
                {location.pathname === "/watchlist" && (
                  <button
                    style={{ marginTop: "5px" }}
                    onClick={() => this.props.handleMoveButtonClick(id)}
                  >
                    move to faves
                  </button>
                )}
              </span>
            </div>
          </div>
        );
      } else {
        display = (
          <div className="MovieCard-body">
            <div className="MovieCard-seeMore">
              <span className="MovieCard-title">
                <a href={imdbLink} rel="noreferrer" target="_blank">
                  {this.shortenTitles(title)}, {year}
                </a>
              </span>
              <span className="MovieCard-genre">
                {this.shortenGenres(genre).join(", ")}
              </span>
              {this.shortenPlot(plot)}
              <br /> <br />
              <span className="MovieCard-seeMoreButtons">
                <button onClick={this.handleShowPlot}>see less</button>{" "}
                <button onClick={() => this.props.handleDeleteButtonClick(id)}>
                  delete movie
                </button>
                {location.pathname === "/watchlist" && <br />}
                {location.pathname === "/watchlist" && (
                  <button
                    style={{ marginTop: "5px" }}
                    onClick={() => this.props.handleMoveButtonClick(id)}
                  >
                    move to faves
                  </button>
                )}
                <a href={imdbLink} rel="noreferrer" target="_blank">
                  <button style={{ marginLeft: "5px" }}>imdb</button>
                </a>
              </span>
            </div>
          </div>
        );
      }
    } else {
      display = (
        <div className="MovieCard-body">
          <img src={image} alt={altText} height="300px" /> <br />
          <button onClick={this.handleShowPlot}>see more</button>
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default MovieCard;
