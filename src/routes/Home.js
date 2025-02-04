import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    // const json = await response.json();
    // 이렇게도 가능
    const json = await (await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`)).json();

    // console.log(json);
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div>
          <h1 className="home_title">Movie</h1>
          <div className="movies">
            {movies.map((movie) => (
              <Movie id={movie.id} key={movie.id} poster_path={movie.backdrop_path} title={movie.title} release_date={movie.release_date} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
