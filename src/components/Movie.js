import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, poster_path, title, release_date }) {
  return (
    <div key={id} className="movie__info">
      <Link to={`/movie/${id}`} className="movie__info__text">
        <img src={poster_path} alt={title} className="movie__img" />
        <div>
          <h2>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</h2>
          <span>{release_date.split("-")[0]}</span>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
