/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "/api/movies/";

async function getFaves() {
  const response = await fetch(BASE_URL + "faves");
  const result = await response.json();
  return result;
}

async function getWatchlist() {
  const response = await fetch(BASE_URL + "watchlist");
  const result = await response.json();
  return result;
}

export default {
  getFaves,
  getWatchlist
}