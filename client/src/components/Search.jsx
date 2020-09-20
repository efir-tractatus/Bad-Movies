import React from 'react';
import axios from 'axios';
import config from '/home/efir/Documents/Coding/Bad-Movies/config.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    this.getGenres();
  }

  handleSelect(event) {
    var genre_id = event.target.value
    this.props.getMovies(genre_id)
  }

  getGenres() {
    axios.get('/movies/genres').then((response) => {
      this.setState({
        genres: response.data,
      });
    });
  }

  render() {
    var genreList = this.state.genres.map((genre) => {
      return (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      );
    });
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        <select onChange={this.handleSelect}>{genreList}</select>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
