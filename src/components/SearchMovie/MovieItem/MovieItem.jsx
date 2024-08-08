import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map((mg) => mg.genre.name)
    : [];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-64 object-cover"
        src={movie.image}
        alt={movie.title}
      />
      <div className="px-6 py-4">
        <Link to={`/movie/${movie.id}`}>
          <h3 className="font-bold text-xl mb-2 text-blue-600 hover:text-blue-800">
            {movie.title}
          </h3>
        </Link>
        <p className="text-gray-700 text-base mb-2">{movie.description}</p>
        <p className="text-gray-600 text-sm">
          Release Date: {movie.release_date}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {genreNames.length > 0 ? (
          genreNames.map((genre, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {genre}
            </span>
          ))
        ) : (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            No genres available
          </span>
        )}
      </div>
      <div className="px-6 pb-4">
        <Link to={`/movie/${movie.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
