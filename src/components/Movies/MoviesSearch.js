import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as MoviesAPI from '../../serverApi/serverAPI';
import css from './MovieSearch.module.css';

const MoviesSearch = () => {
  const [inputMovies, setInputMovies] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const savedName = searchParams.get('inputMovies') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!savedName) {
      setSearchMovies([]);

      return;
    }
    MoviesAPI.fetchMoviesByName(savedName).then(resp =>
      setSearchMovies(resp.results)
    );
  }, [savedName]);

  const onSubmit = () => {
    if (!inputMovies.trim() || savedName === inputMovies.trim()) {
      setInputMovies('');
      return;
    }
    setSearchParams({ inputMovies: inputMovies.trim() });
    setInputMovies('');
  };

  return (
    <div>
      <input
        placeholder="Enter movie name"
        onChange={e => setInputMovies(e.target.value)}
        value={inputMovies}
      ></input>
      <button onClick={onSubmit}>search</button>
      {searchMovies && (
        <ul className={css.searchList}>
          {searchMovies.map(searchMovie => {
            return (
              <li key={searchMovie.id}>
                <Link
                  to={`/movies/${searchMovie.id}`}
                  state={{ from: location }}
                >
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
