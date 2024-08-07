import React from "react";
import "./staticMovies.css";

const StaticMovies = () => {
  const staticMovies = [
    "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
    "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
    "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg",
  ];
  return (
    <>
      <h2>Movies</h2>
      <div className="cards-container">
        <div className="card">
          <img
            className="img-staticMovies"
            src="https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
            alt=""
          />
        </div>

        <div className="card">
          <img
            className="img-staticMovies"
            src="https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg"
            alt=""
          />
        </div>

        <div className="card">
          <img
            className="img-staticMovies"
            src="https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="img-staticMovies"
            src="https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="img-staticMovies"
            src="https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="img-staticMovies"
            src="https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default StaticMovies;
