import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const PopularMovie = () => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  
  const [ movies, SetMovies ] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(URL);
    SetMovies(response.data.results);
  };
  
  return (
    <>
      <Hero />
      <Movies  movies={movies} />
    </>
  );
};

export default PopularMovie;
