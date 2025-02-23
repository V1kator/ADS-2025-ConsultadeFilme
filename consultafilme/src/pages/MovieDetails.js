import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        setMovie(response.data);
      } catch (err) {
        setError("Erro ao buscar detalhes do filme.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>📅 Lançamento: {movie.release_date}</p>
      <p>⭐ Avaliação: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          width="300"
        />
      )}
    </div>
  );
}

export default MovieDetails;
