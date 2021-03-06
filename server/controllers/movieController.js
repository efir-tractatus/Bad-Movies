const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    var genre_id = req.query.id;
    apiHelpers
      .discoverByGenre(genre_id)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  getGenres: (req, res) => {
    apiHelpers
      .genres()
      .then((response) => {
        res.status(200).send(response.data.genres);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  saveMovie: (req, res) => {
    var movieObj = req.body;
    movieModel
      .save(movieObj)
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  deleteMovie: (req, res) => {},
};
