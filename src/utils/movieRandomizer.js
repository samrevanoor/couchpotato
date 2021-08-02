const BASE_URL = "https://api.themoviedb.org/3/";
const MID_URL =
  "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function search(query) {
  if (query.startYear && query.startYear) {
    const startYear = `${query.startYear}-01-01`;
    const endYear = `${query.endYear}-01-01`;
    const response1 = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}${MID_URL}page=1&release_date.gte=${startYear}&release_date.lte=${endYear}&with_genres=${query.genre}`
    );
    const result1 = await response1.json();
    const totalPages = result1.total_pages;
    const page = randomPage(totalPages);
    const response2 = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}${MID_URL}page=${page}&release_date.gte=${startYear}&release_date.lte=${endYear}&with_genres=${query.genre}`
    );
    const result2 = await response2.json();
    const oneMovie = result2.results[randomMovie()];
    console.log("Result", oneMovie);
    return oneMovie;
  // } else if (!query.genre && !query.startYear && !query.endYear) {
  //   const response1 = await fetch(
  //     `${BASE_URL}discover/movie?api_key=${API_KEY}${MID_URL}page=1`
  //   );
  //   const result1 = await response1.json();
  //   const totalPages = result1.total_pages;
  //   const page = randomPage(totalPages);
  //   const response2 = await fetch(
  //     `${BASE_URL}discover/movie?api_key=${API_KEY}${MID_URL}page=${page}`
  //   );
  //   const result2 = await response2.json();
  //   const oneMovie = result2.results[randomMovie()];
  //   console.log("Result", oneMovie);
  //   return oneMovie;
  } else {
    const response1 = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}${MID_URL}page=1&with_genres=${query.genre}`
    );
    const result1 = await response1.json();
    const totalPages = result1.total_pages;
    const page = randomPage(totalPages);
    const response2 = await fetch(
      `${BASE_URL}discover/movie?api_key=${API_KEY}${MID_URL}page=${page}&with_genres=${query.genre}`
    );
    const result2 = await response2.json();
    const oneMovie = result2.results[randomMovie()];
    console.log("Result", oneMovie);
    return oneMovie;
  }
}

// helper functions

function randomPage(pages) {
  const page = Math.floor(Math.random() * pages) + 1; // not doing the + 1 because I don't want results from the last page
  return page;
}

function randomMovie() {
  const movieIndex = Math.floor(Math.random() * 20) + 1;
  return movieIndex;
}
