import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = `?api_key=${process.env.REACT_APP_MOVIE_API}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "original";
const POSTER_SIZE = "w342";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovie = async () => {
    setLoading(true);
    try {
      const res = await fetch(BASE_URL + id + API_KEY);
      const newMovie = await res.json();
      console.log(newMovie);
      // update the State
      setMovie(newMovie);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) return <p>Loading Data...</p>;
  if (error) return <p>Error loading data...</p>;
  if (!movie.title) return null;

  return (
    <div>
      <img
        className="backdrop"
        src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
        alt={movie.title + " Backdrop"}
      />
      <div className="detail-details">
        <img
          className="detail-poster"
          src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
          alt={movie.title + " Poster"}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
