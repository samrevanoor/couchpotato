const Movie = require("../models/movie");
const ObjectId = require("mongodb").ObjectId;
const genreUtil = require("./utilities/getGenre.js");

async function createFave(req, res, next) {
  req.body.list = "faves";
  const genres = req.body.genreList.replace(/\s*,\s*/g, ",").split(",");
  req.body.genreList = genres;
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.json(movie);
  } catch (err) {
    console.log("Error", err);
  }
}

async function createWatchlist(req, res, next) {
  req.body.list = "watchlist";
  const genres = req.body.genreList.replace(/\s*,\s*/g, ",").split(",");
  req.body.genreList = genres;
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.json(movie);
  } catch (err) {
    console.log("Error", err);
  }
}

function favesIndex(req, res, next) {
  Movie.find({ user: ObjectId(req.params.id), list: "faves" })
    .then(function (movies) {
      res.json(movies);
    })
    .catch(function (err) {
      console.log("error!", err);
      next(err);
    });
}

function watchlistIndex(req, res, next) {
  Movie.find({ user: ObjectId(req.params.id), list: "watchlist" })
    .then(function (movies) {
      res.json(movies);
    })
    .catch(function (err) {
      console.log("error!", err);
      next(err);
    });
}

function watchlistFilter(req, res, next){
  Movie.find({ user: ObjectId(req.params.id), list: "watchlist" })
  .then(function (movies) {
    console.log(movies);
    console.log(req.query.genre);
    const genreNumber = req.query.genre;
    genreUtil.getGenreName(genreNumber);
    movies.forEach(function(movie){
      console.log(movie.genreList);
    });
    res.json(movies);
  })
  .catch(function (err) {
    console.log("error!", err);
    next(err);
  });
}

async function favesDelete(req, res, next) {
  const movie = await Movie.findById(req.params.id);
  const user = movie.user;
  await Movie.findByIdAndDelete(req.params.id);
  const newFaves = await Movie.find({ user: ObjectId(user), list: "faves" });
  const faves = [newFaves];
  try {
    await res.status(200).json(faves);
  }
  catch (err) {
    console.log("Error", err);
  }
}

async function watchlistDelete(req, res, next) {
  const movie = await Movie.findById(req.params.id);
  const user = movie.user;
  await Movie.findByIdAndDelete(req.params.id);
  const newWatchlist = await Movie.find({ user: ObjectId(user), list: "watchlist" });
  const watchlist = [newWatchlist];
  try {
    await res.status(200).json(watchlist);
  }
  catch (err) {
    console.log("Error", err);
  }
}

function watchlistUpdate(req, res, next) {
  Movie.findById(req.params.id)
    .then(function (movie) {
      movie.list = "faves";
      return movie.save();
    })
    .then(function (movie) {
      const user = movie.user;
      return user;
    })
    .then(function (user) {
      const newWatchlist = Movie.find({
        user: ObjectId(user),
        list: "watchlist",
      });
      return newWatchlist;
    })
    .then(function (newWatchlist) {
      res.json(newWatchlist);
    });
}

module.exports = {
  createFave,
  createWatchlist,
  favesIndex,
  watchlistIndex,
  favesDelete,
  watchlistDelete,
  watchlistUpdate,
  watchlistFilter
};
