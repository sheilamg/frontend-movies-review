import React from 'react';
import { Link } from 'react-router-dom';
import './movieItem.css'

const MovieItem = ({ movie }) => {
    const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map(mg => mg.genre.name)
    : [];  

  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
      {console.log(movie.title)}
      <h3>{movie.title}</h3>
      </Link>
      <p>{movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreNames.length > 0 ? genreNames.join(', ') : 'No genres available'}</p>
      
      <div className='div-image'>
      <img src={movie.image} alt={movie.title} style={{ width: '100px' }} />
      <Link to={`/movie/${movie.id}`}>
        <button className='button-details'>View Details</button>
      </Link>
      </div>
    </div>
  );
};

export default MovieItem;
