import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import * as MoviesAPI from '../../serverApi/serverAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    MoviesAPI.fetchMoviesById(movieId).then(res => setMovieDetail(res));
  }, [movieId]);

  if (!movieDetail) {
    return null;
  }
  return (
    <>
      <button onClick={() => navigate('/')}>Back</button>
      <div className={css.movieDetails}>
        <div className={css.moviePoster}>
          {movieDetail.poster_path !== null ? (
            <img
              src={`${MoviesAPI.IMG_URL}${movieDetail.poster_path}`}
              alt="Movie Poster"
              width="200px"
              heigth="100px"
            />
          ) : (
            <p>No Poster</p>
          )}
        </div>
        <div>
          <h3>
            {movieDetail.original_title}({movieDetail.release_date})
          </h3>
          <p>User score {(movieDetail.vote_average * 10).toFixed()}%</p>
          <div>
            <h4>Overviw</h4>
            <p>{movieDetail.overview}</p>
          </div>
          <div>
            <h4>Genres</h4>
            <ul>
              {movieDetail.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={css.movieInfo}>
        <h3>Additional informations</h3>
        <Link to="cast">Cast</Link>
        {'  '}
        <Link to="reviews">Rewievs</Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
