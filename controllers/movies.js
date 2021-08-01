const Movie = require("../models/movie");

async function create(req, res, next) {
  const movie = new Movie(req.body);
  try {
    await movie.save();
    console.log("Movie", movie);
    res.json(movie);
  } catch (err) {
    console.log("Error", err);
  }
}

function index(req, res, next) {
  Movie.find({})
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
  create,
  index,
};
