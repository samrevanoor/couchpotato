import React, { Component } from "react";
import "../FavesPage/FavesPage.css";
import { getFaves } from "../../utils/movieDisplay";
import MovieCard from "../../components/MovieCard/MovieCard";

class FavesPage extends Component {
  state = {
    faves: [],
  };

  async componentDidMount() {
    const result = await getFaves();
    this.setState({
      faves: result,
    });
    console.log(this.state);
  }

  render() {
    const { faves } = this.state;
    return (
      <div className="FavesPage-body">
        my faves
        <div>
          <div>
            {faves.map((fave, index) => {
              return (
                <div key={index}>
                  <MovieCard
                    title={fave.title}
                    image={fave.image}
                    genre={fave.genre}
                    year={fave.year}
                  />
                </div>
              );
            })}
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default FavesPage;
