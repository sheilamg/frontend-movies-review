import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const UserCreateCommentOnReview = () => {
    const navigate = useNavigate()  

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))  
    const userIdCaptured = items.user.id  
  
    const [commentText, setCommentText] = useState("");
  
    //id de la review
    const { id , movieId} = useParams();
    const parceReviewId = parseInt(id)
    const parceMovieId = parseInt(movieId)
    
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const reviewData = {
        comment: commentText,
        user: userIdCaptured,
        review: parceReviewId
      };
  
      try {
        const response = await fetch("http://localhost:3002/comments-users", {
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
        console.log("Comment on review submitted successfully:", result);
        alert('Thanks for adding a new comment!')
        navigate(`/movie/${parceMovieId}`)
  
  
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    };
  
  
    return (
      <>
        <label className="label-review">Leave your comment about this review</label>
        
        <form className="textarea-div" onSubmit={handleSubmit}>
          <textarea
            cols={50}
            rows={10}
            required
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          ></textarea>
  
          <input type="submit" value="Submit Comment" />
        </form>
      </>
    );
}
