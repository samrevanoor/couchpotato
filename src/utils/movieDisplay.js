const BASE_URL = "/api/movies/";

export async function getFaves() {
  const response = await fetch(BASE_URL + "faves");
  const result = await response.json();
  console.log("result", result);
  return result;
}
