import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as MoviesAPI from '../../serverApi/serverAPI';
import css from './MovieReviews.module.css';

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.fetchMovieReviewsById(movieId).then(res =>
      setReviews(res.results)
    );
  }, [movieId]);

  return (
    <ul className={css.reviewsList}>
      {reviews !== [] ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>Movie don`t has reviews</p>
      )}
    </ul>
  );
};
