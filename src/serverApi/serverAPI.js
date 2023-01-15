const API_KEY = 'de11c2e93680363833c2d3315836f9fa';
export const BASE_URL = 'https://api.themoviedb.org';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export async function fetchHomeTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert(`Error!!!  ${error}`);
  }
}

export async function fetchMoviesById(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/3//movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert(`Error!!!  ${error}`);
  }
}

export async function fetchMovieCreaditsById(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/3//movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert(`Error!!!  ${error}`);
  }
}

export async function fetchMovieReviewsById(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/3//movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert(`Error!!!  ${error}`);
  }
}

export async function fetchMoviesByName(name) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert(`Error!!!  ${error}`);
  }
}
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-reviews
// export const URL_FOR_FETCH_BY_NAME =
//   'https://api.themoviedb.org/3/search/movie';

// export function fetchMovies(inputtedName) {
//   return fetch(
//     `${URL_FOR_FETCH_BY_NAME}?api_key=${API_KEY}&query=${inputtedName}`
//   ).then(response => response.json());
// }
