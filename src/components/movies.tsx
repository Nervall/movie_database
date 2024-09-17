import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiRequest } from '../utils/api';
import './movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { search } = useParams();

  const handleSearch = async (searchValue: string) => {
    if (searchValue.trim().toLowerCase()) {
        try {
            const movies = await apiRequest(searchValue, 'SEARCH');
            if (movies.Response === 'True') {
            setMovies(movies.Search);
            } else {
            setError('No movies found');
            }
        } catch (err) {
            setError('Failed to fetch movies');
        } finally {
            setLoading(false);
        }
    }
  };

  useEffect(() => {
    if (search) {
        setLoading(true);
        setError('');
        handleSearch(search)
    }
  }, []);

  return (
    <div className='movies-wrapper'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies.length > 0 && 
            <ul>
                {movies.map((movie: any) => (
                    <li key={movie.imdbID}>
                        <Link to={"/movie/" + movie.imdbID} className='movies-button'>
                            <img src={movie.Poster} alt={movie.Title} />
                            <div className='movies-information'>
                                <h3>{movie.Title} ({movie.Year})</h3>
                                <p>{`Year: ${movie.Year}`}</p>
                                <p>{`Type: ${movie.Type}`}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        }
    </div>
  )
};

export default Movies;
