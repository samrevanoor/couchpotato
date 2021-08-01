const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: String,
    genre: [String],
    year: Number,
    plot: String,
    image: String,
    imdbID: String,
    list: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);
