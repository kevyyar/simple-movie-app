import { useState, useEffect } from "react";
import FilterMovie from "../Filter";
import Movie from "./Movie";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=9f2f265a8eed301d4c77b20cc1efbd04&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIE_API}`;

const MovieList = () => {
  console.log(process.env);
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //   fetch API Data
  const getMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const movies = await res.json();
      // update the State
      setMovies(movies.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  //   fetch API Data
  const getConfig = async () => {
    setLoading(true);
    try {
      const res = await fetch(CONFIG_URL);
      const config = await res.json();
      // update the State
      setConfig(config);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  //   call on API
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getConfig();
  }, []);

  console.log(movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetchin data...</p>;

  return (
    <div>
      <FilterMovie filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        {movies
          .filter((movie) => movie.title.toLowerCase().includes(filter))
          .map((movie) => (
            <Movie key={movie.id} movie={movie} config={config} />
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
