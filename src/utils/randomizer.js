const BASE_URL = "https://api.themoviedb.org/3/";

module.exports = {
  search,
};

function search(req, res) {
  fetch(`${BASE_URL}movie/550?apikey=${process.env.API_KEY}`)
    .then(function (response) {
      res.json(response);
    })
    .then(function (response) {
      if (response.ok) 
      console.log(response.json())
      return response.json();
    })
    .catch(function (err) {
      console.error(err);
      if (err.response) {
        return res.status(err.response.status).json(err.response.data);
      }
    });
}