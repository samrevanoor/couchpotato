const Movie = require("../models/movie");

async function create(req, res, next) {
  const movie = new Movie(req.body)
  try {
      await movie.save();
      console.log("Movie", movie);
      res.json(movie);
  } catch (err) {
    console.log("Error", err);
  }
}


module.exports = {
  create,
};
