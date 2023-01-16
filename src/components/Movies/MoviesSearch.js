import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as MoviesAPI from '../../serverApi/serverAPI';
import css from './MovieSearch.module.css';

const MoviesSearch = () => {
  const [inputMovies, setInputMovies] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams('');
  const productName = searchParams.get('name') ?? '';
  const location = useLocation();

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setInputMovies(name);
  };

  useEffect(() => {
    if (productName) {
      MoviesAPI.fetchMoviesByName(productName).then(res =>
        setSearchMovies(res.results)
      );
    }
  }, []);

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
        onChange={e => updateQueryString(e.target.value)}
        value={productName}
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
