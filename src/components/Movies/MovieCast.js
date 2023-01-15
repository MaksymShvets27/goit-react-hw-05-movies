import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as MoviesAPI from '../../serverApi/serverAPI';
import css from './MovieCast.module.css';

export const MovieCast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.fetchMovieCreaditsById(movieId).then(res => setCredits(res.cast));
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {credits.map(credit => {
        return (
          <li key={credit.id} className={css.castListUnit}>
            {credit.profile_path !== null ? (
              <img
                src={`${MoviesAPI.IMG_URL}${credit.profile_path}`}
                alt="Profile"
                width="100%"
              />
            ) : (
              <p>No Portret</p>
            )}
            <p>{credit.original_name}</p>
            <p>Role: {credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
