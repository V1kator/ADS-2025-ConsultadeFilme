import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import MovieDetails from "./pages/MovieDetails.js";

function App() {
  return (
    <Router>
      <div>
        <h1>🎬 TMDB Movie Search</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
