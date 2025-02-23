import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>📅 {movie.release_date}</p>
      <p>{movie.overview}</p>
      <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
    </div>
  );
}

export default MovieCard;
