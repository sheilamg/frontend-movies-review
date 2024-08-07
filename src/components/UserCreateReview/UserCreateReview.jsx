import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./userCreateReview.css";
import StarRating from "../StarRating/StarRating";
import { useFetch } from "../../hooks/useFetch";

const UserCreateReview = () => {
  const navigate = useNavigate()  

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))  
  const userIdCaptured = items.user.id  

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [valuetitle, setTitle] = useState("")

  //id de la movie
  const { id } = useParams();
  const parceMovieId = parseInt(id)
  

  //check if the user has a previous review and redirect
  const {data: reviews, load, error} = useFetch(`http://localhost:3002/reviews`)

  useEffect(() => {
    // check 
    const userReview = reviews.find(
      (review) => review.user.id === userIdCaptured && review.movie.id === parceMovieId
    );

    if (userReview) {
        alert('you already write a review! edit!')
        navigate(`/reviews/${userReview.id}`);
        // const userWantsToEdit = window.confirm(
        //     "You have already reviewed this movie. Would you like to edit your review?"
        //   );
        //   if (userWantsToEdit) {
        //     //redirect to user profile edit review
        //     navigate(`/reviews/${userReview.id}`);
        //   } else {
        //     navigate(`/movie/${parceMovieId}`);
        //   }
    }
  }, [reviews, userIdCaptured, parceMovieId, navigate]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      title: valuetitle,
      description: reviewText,
      rate: rating,
      user: userIdCaptured,
      movie: parceMovieId
    };

    try {
      const response = await fetch("http://localhost:3002/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Review submitted successfully:", result);
      alert('Thanks for adding a new review!')
      navigate(`/movie/${parceMovieId}`)


    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };


  if(load) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  return (
    <>
      <label className="label-review">Make your review</label>
      
      <StarRating totalStars={5} onRatingChange={(rating) => setRating(rating)}/>
      {console.log(rating)}
       
      
      <form className="textarea-div" onSubmit={handleSubmit}>
        <label htmlFor="text">Title</label>
        <input type="text" value={valuetitle} onChange={(event) => setTitle(event.target.value)} placeholder="introduce your review.." required />
        <textarea
          cols={50}
          rows={10}
          minLength={20}
          maxLength={60}
          required
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        ></textarea>

        <input type="submit" className="review-button" value="Submit Review" />
      </form>
    </>
  );
};

export default UserCreateReview;

///minLength 200 - maxLength 600