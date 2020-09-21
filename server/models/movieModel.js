const mongoDb = require('../../db/mongodb');

module.exports = {
  save: function (data) {
    var object = {
      adult: data.adult,
      backdrop_path: data.backdrop_path,
      genre_ids: data.genre_ids,
      id: data.id,
      original_language: data.original_language,
      originla_title: data.originla_title,
      overview: data.overview,
      popularity: data.popularity,
      poster_path: data.poster_path,
      release_date: data.release_date,
      title: data.title,
      video: data.video,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    };
    return mongoDb.Movie.findOneAndUpdate({ id: data.id }, object, {
      upsert: true,
    });
  },

  retrieve: function (genre_id) {
    return mongoDb.Movie.findAll();
  },

  delete: function (movie_id) {
    return mongoDb.Movie.deleteOne();
  },
};
