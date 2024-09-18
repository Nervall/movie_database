import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { MovieDetailsType } from '../utils/types';
import { apiRequest } from '../utils/api';
import NoImg from '../assets/no-img.png';
import './movieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null,
  );

  const getMovie = async (imdbID: string) => {
    try {
      const movie = await apiRequest(imdbID, 'ID');
      if (movie) {
        setMovieDetails(movie);
      } else {
        setError('No movies found');
      }
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError('');
      getMovie(id);
    }
  }, []);

  return (
    <div className="movieDetails-wrapper">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movieDetails && (
        <div className="movieDetails-information-wrapper">
          <img
            src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : NoImg}
            alt={movieDetails.Title}
            className="movie-poster"
          />
          <div className="movieDetails-information">
            <h2>
              {movieDetails.Title} ({movieDetails.Year})
            </h2>
            <p>
              <strong>Plot:</strong> {movieDetails.Plot}
            </p>
            <p>
              <strong>Actors:</strong> {movieDetails.Actors}
            </p>
            <p>
              <strong>Genre:</strong> {movieDetails.Genre}
            </p>
            <p>
              <strong>Released:</strong> {movieDetails.Released}
            </p>
            <p>
              <strong>Runtime:</strong> {movieDetails.Runtime}
            </p>
            <p>
              <strong>Director:</strong> {movieDetails.Director || 'N/A'}
            </p>
            <p>
              <strong>Writer:</strong> {movieDetails.Writer || 'N/A'}
            </p>
            <p>
              <strong>Language:</strong> {movieDetails.Language}
            </p>
            <p>
              <strong>Country:</strong> {movieDetails.Country}
            </p>
            <p>
              <strong>Awards:</strong> {movieDetails.Awards}
            </p>
            <p>
              <strong>IMDb Rating:</strong> {movieDetails.imdbRating} (
              {movieDetails.imdbVotes} votes)
            </p>
            {movieDetails.totalSeasons && (
              <p>
                <strong>Total Seasons:</strong> {movieDetails.totalSeasons}
              </p>
            )}
            <p>
              <strong>Rated:</strong> {movieDetails.Rated}
            </p>
            <p>
              <strong>Type:</strong> {movieDetails.Type}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
