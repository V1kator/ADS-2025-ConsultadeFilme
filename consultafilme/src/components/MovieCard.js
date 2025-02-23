import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path ? (
          <img 
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
            alt={movie.title} 
          />
        ) : (
          <div className="no-image">Imagem Indisponível</div>
        )}
      </Link>
      <h3>{movie.title}</h3>
      <p>📅 {movie.release_date}</p>
      <Link to={`/movie/${movie.id}`} className="details-button">Ver Detalhes</Link>
    </div>
  );
}

export default MovieCard;
