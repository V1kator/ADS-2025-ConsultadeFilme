import React, { useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function SearchBar({ setMovies }) {
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    if (!query) return;
    
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite o nome do filme..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Buscar</button>
    </div>
  );
}

export default SearchBar;
