import React from "react";
import { Link } from "react-router-dom";
import StaticMovies from "../../components/StaticMovies/StaticMovies";

const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
        Hang in there
      </h1>
      <Link to={`/search-movie`}>
        <button>Search Movies</button>
      </Link>
      <StaticMovies />
    </>
  );
};

export default Home;
