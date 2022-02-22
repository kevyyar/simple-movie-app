import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie, config }) => {
  return (
    <div>
      {config.images?.base_url && (
        <Link to={`/movie-details/${movie.id}`}>
          <img
            src={
              config.images.base_url +
              config.images.poster_sizes[3] +
              movie.poster_path
            }
            alt={movie.title + " Poster"}
          />
        </Link>
      )}
      <h3>{movie.title}</h3>
    </div>
  );
};

Movie.propTypes = {
  //   movie: PropTypes.object.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
  config: PropTypes.shape({
    images: PropTypes.shape({
      base_url: PropTypes.string,
    }),
  }),
};

export default Movie;
