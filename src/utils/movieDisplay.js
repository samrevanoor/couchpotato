/* eslint-disable import/no-anonymous-default-export */
const BASE_URL = "/api/movies/";

async function getFaves(user) {
  const response = await fetch(`${BASE_URL}faves/${user}`);
  const result = await response.json();
  return result;
}

async function getWatchlist(user) {
  const response = await fetch(`${BASE_URL}watchlist/${user}`);
  const result = await response.json();
  return result;
}

async function filterWatchlist(user, genre){
  const response = await fetch(`${BASE_URL}watchlist/${user}/filter?genre=${genre}`);
  const result = await response.json();
  return result;
}

export default {
  getFaves,
  getWatchlist,
  filterWatchlist
};
