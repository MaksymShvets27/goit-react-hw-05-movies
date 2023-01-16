import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as MoviesAPI from '../../serverApi/serverAPI';
import css from './Home.module.css';
export const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    MoviesAPI.fetchHomeTrendingMovies().then(res =>
      setTrendingList(res.results)
    );
  }, []);

  return (
    <>
      <ul className={css.trendList}>
        {trendingList.map(trendingMovie => {
          return (
            <li key={trendingMovie.id} className={css.trendListUnit}>
              <Link
                to={`/movies/${trendingMovie.id}`}
                state={{ from: location }}
              >
                {trendingMovie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
