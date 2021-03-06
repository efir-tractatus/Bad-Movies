import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    
    var moviesList = this.props.movies.map((movie) => {
      var year = movie.release_date === undefined ? undefined : movie.release_date.slice(0, 4)
      return (
        <li className="movie_item">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <div className="movie_description">
            <h2>{movie.title}</h2>
            <section className="movie_details">
              <div className="movie_year">
                <span className="title">Year</span>
                <span>{year}</span>
              </div>
              <div className="movie_rating">
                <span className="title">Rating</span>
                <span>{movie.popularity}</span>
              </div>
            </section>
          </div>
        </li>
      );
    });

    return (
      <ul className="movies">

        {moviesList}

      </ul>
    );
  }
}

export default Movies;

