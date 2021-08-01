const BASE_URL = "https://api.themoviedb.org/3/";

export async function search() {
  const response = await fetch(
    `${BASE_URL}movie/123?api_key=e4431b368f75d889afbc737e5fbed6e9`
  );
  const result = await response.json();
  return result;
}
