import {useEffect} from 'react';

import './App.css';

import SearchIcon from './search.svg';

//2a6f81ba

const API_URL = 'http://www.omdbapi.com?apikey=2a6f81ba';

const movie1 = {
  "Title": "Avengers: Infinity War",
  "Year": "2018",
  "imdbID": "tt4154756",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
}
const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
     searchMovies('Avengers');
  }, []);

  return (
    <div className="app">
      <h1>AminLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="Avengers"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={Poster!=='N/A'? movie1.Poster: 'http//via.placeholder.com/400'} alt={movie1.Title} />
            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
