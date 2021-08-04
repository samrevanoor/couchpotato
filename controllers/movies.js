const Movie = require("../models/movie");
const ObjectId = require("mongodb").ObjectId;

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

function favesDelete(req, res, next) {
  Movie.findByIdAndDelete(req.params.id)
    .then(function (movie) {
      return Movie.find({ list: "faves" });
    })
    .then(function (faves) {
      const newFaves = [faves];
      return newFaves;
    })
    .then(function (faves) {
      res.status(200).json(faves);
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
}

function watchlistDelete(req, res, next) {
  Movie.findByIdAndDelete(req.params.id)
    .then(function (movie) {
      return Movie.find({ list: "watchlist" });
    })
    .then(function (watchlist) {
      const newWatchlist = [watchlist];
      return newWatchlist;
    })
    .then(function (watchlist) {
      res.status(200).json(watchlist);
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
}

function watchlistUpdate(req, res, next) {
  Movie.findById(req.params.id)
    .then(function (movie) {
      movie.list = "faves";
      return movie.save();
    })
    .then(function (movie) {
      const user = movie.user;
      console.log(movie);
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
      console.log("newWatchList ", newWatchlist);
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
};
