/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "/api/movies/";

function addMovieToFaves(movie) {
  return fetch(BASE_URL + "faves", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(movie),
  })
    .then((res) => {
      console.log("Response:", res);
      if (res.ok) return res.json();
      throw new Error("can't save movie");
    })
    .catch((err) => {
      console.log("Err", err);
    })
}

function addMovieToWatchlist(movie) {
  return fetch(BASE_URL + "watchlist", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(movie),
  })
    .then((res) => {
      console.log("Response:", res);
      if (res.ok) return res.json();
      throw new Error("can't save movie");
    })
    .catch((err) => {
      console.log("Err", err);
    })
}

export default {
  addMovieToFaves,
  addMovieToWatchlist
};
