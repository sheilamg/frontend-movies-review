import React from "react";
import "./movies.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

/*This component owns to home*/
const Movies = () => {
  const images = [
    "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
    </Slide>
  );
};

export default Movies;
