import React, { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import Pagination from "../../Pagination/Pagination";

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {currentMovies.map((movie) => (
          <div
            key={movie.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8"
          >
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(movies.length / moviesPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default MovieList;
