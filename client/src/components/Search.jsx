import React from 'react';
import axios from 'axios';
import config from '/home/efir/Documents/Coding/Bad-Movies/config.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=' +
          config.API_KEY +
          '&language=en-US'
      )
      .then((response) => {
        this.setState({
          genres: response.data.genres,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    var genreList = this.state.genres.map((genre) => {
      return (
      <option value={genre.name} key={genre.id}>{genre.name}</option>
      )
    })
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          {genreList}
        </select>
        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
