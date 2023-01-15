import { lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieCast } from './Movies/MovieCast';
import { MovieReviews } from './Movies/MovieReviews';

const MoviesSearch = lazy(() => import('./Movies/MoviesSearch'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Outlet />}>
            <Route index element={<MoviesSearch />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
