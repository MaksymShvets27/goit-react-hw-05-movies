import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as MoviesAPI from '../../serverApi/serverAPI';
import css from './MovieSearch.module.css';

const MoviesSearch = () => {
  const [inputMovies, setInputMovies] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const onSubmit = () => {
    if (inputMovies) {
      MoviesAPI.fetchMoviesByName(inputMovies).then(res =>
        setSearchMovies(res.results)
      );
    }
  };

  return (
    <div>
      <input
        placeholder="Enter movie name"
        onChange={event => setInputMovies(event.target.value)}
      ></input>
      <button onClick={onSubmit}>search</button>
      {searchMovies && (
        <ul className={css.searchList}>
          {searchMovies.map(searchMovie => {
            return (
              <li key={searchMovie.id}>
                <Link to={`/movies/${searchMovie.id}`}>
                  {searchMovie.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MoviesSearch;
