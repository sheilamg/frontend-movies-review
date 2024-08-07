import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar/SearchBar';
import MovieList from './MovieList/MovieList';
import { useFetch } from '../../hooks/useFetch';

export const SearchMovie = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const {data: movies, load, error} = useFetch('http://localhost:3002/movies')
  
  
    useEffect(() => {
        setFilteredMovies(
          movies.filter((movie) => {
            const titleMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
            const releaseDateMatch = movie.release_date.toString().includes(searchTerm.toLowerCase());
            const genreMatch = movie.moviesGenre.some(mg => 
              mg.genre.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            return titleMatch || releaseDateMatch || genreMatch;
          })
        );
      }, [searchTerm, movies]);

    if(load) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
  
    return (
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MovieList movies={filteredMovies} />
      </div>
    );
  };
