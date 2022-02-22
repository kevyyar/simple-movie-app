import { useState } from "react";
import PropTypes from "prop-types";

const FilterMovie = ({ filter, setFilter }) => {
  return (
    <label>
      Filter:
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
};

FilterMovie.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterMovie;
