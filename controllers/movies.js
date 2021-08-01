const Movie = require("../models/movie");

async function createFave(req, res, next) {
  req.body.list = "faves";
  const movie = new Movie(req.body);
  try {
    await movie.save();
    console.log("Movie", movie);
    res.json(movie);
  } catch (err) {
    console.log("Error", err);
  }
}

async function createWatchlist(req, res, next) {
  req.body.list = "watchlist";
  const movie = new Movie(req.body);
  try {
    await movie.save();
    console.log("Movie", movie);
    res.json(movie);
  } catch (err) {
    console.log("Error", err);
  }
}

function favesIndex(req, res, next) {
  Movie.find({ list: "faves" })
    .then(function (movies) {
      console.log("Index", movies);
      res.json(movies);
    })
    .catch(function (err) {
      console.log("error!", err);
      next(err);
    });
}

function watchlistIndex(req, res, next) {
  Movie.find({ list: "watchlist" })
    .then(function (movies) {
      console.log("Index", movies);
      res.json(movies);
    })
    .catch(function (err) {
      console.log("error!", err);
      next(err);
    });
}

module.exports = {
  createFave,
  createWatchlist,
  favesIndex,
  watchlistIndex,
};
