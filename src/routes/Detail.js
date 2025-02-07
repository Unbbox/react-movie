import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const json = await (await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)).json();

      console.log(json);
      setMovie(json);
      setLoading(false);
    };

    getMovie();
  }, [id]);

  return (
    <div className="detail-container">
      {loading ? (
        <div className="skeleton-wrapper">
          <div className="skeleton-xBtn"></div>
          <div className="skeleton-image"></div>
          <div>
            <div className="skeleton-title"></div>
            <div className="skeleton-overview"></div>
          </div>
          <p className="skeleton-gerne"></p>
        </div>
      ) : (
        <div className="wrapper">
          <div>
            <img src={movie.poster_path} alt="" className="detail__img" />
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <button className="btn-close" style={{ backgroundColor: "#222", padding: "10px 15px" }}>
                ❌
              </button>
            </Link>
          </div>
          <div className="description">
            <h2>
              {movie.title} ({movie.release_date})
            </h2>
            <p>{movie.overview}</p>
            <div className="gernes">
              {movie.genres.map((g) => (
                <span>{g.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
