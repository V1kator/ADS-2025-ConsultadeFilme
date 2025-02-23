import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <SearchBar setMovies={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
