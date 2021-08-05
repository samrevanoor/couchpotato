/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "/api/movies/";

async function deleteMovieFromFaves(movie) {
  const res = await fetch(`${BASE_URL}faves/${movie}`, {
    method: "DELETE",
  });
  const result = await res.json();
  return result;
}

async function deleteMovieFromWatchlist(movie) {
  const res = await fetch(`${BASE_URL}watchlist/${movie}`, {
    method: "DELETE",
  });
  const result = await res.json();
  return result;
}

async function moveFromWatchlistFromFaves(movie){
  const res = await fetch(`${BASE_URL}watchlist/${movie}`, {
    method: "PUT",
  });
  const result = await res.json();
  return result;
}

export default {
  deleteMovieFromFaves,
  deleteMovieFromWatchlist,
  moveFromWatchlistFromFaves
};
