import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function PopularMovie() {
  const endpoint = "movie/popular";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero endpoint={endpoint} />
      <Movies movies={movies} title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;