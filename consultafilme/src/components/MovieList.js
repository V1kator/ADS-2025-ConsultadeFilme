import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div>
      {movies.length === 0 ? (
        <p>Nenhum filme encontrado.</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
