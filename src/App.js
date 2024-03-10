import {useState,useEffect} from 'react';

import './App.css';

import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

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
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
// the useEffect hook will fetch the data from the API URL
  useEffect(() => {
     searchMovies('Avengers');
  }, []);

  return (
    <div className="app">
      <h1>AminLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

  {movies?.length > 0
    ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )}
      
    </div>
  );
}

export default App;
