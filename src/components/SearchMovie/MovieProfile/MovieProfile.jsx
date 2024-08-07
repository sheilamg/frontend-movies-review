import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import './movieProfile.css'

const MovieProfile = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))
  console.log({items});
  const { id } = useParams();
  
  const {data: movie, load, error} = useFetch(`http://localhost:3002/movies/${id}`)

  const genreNames = movie.moviesGenre
    ? movie.moviesGenre.map(mg => mg.genre.name)
    : []; 

  
  if(load) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>

  
  return (
    <div className='movie-profile'>
      <h1>Movie Profile</h1>

    <div className='movie-info'>
      <div className='movie-details'>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreNames.length > 0 ? genreNames.join(', ') : 'No genres available'}</p>
      </div>
       
      <div className='movie-image'>
        <img src={movie.image} alt={movie.title} style={{ width: '100px' }} />
      </div>
    </div>  
      
    <div className='review-section'>
      
      {movie.review.map((item, index) => (
       <div key={index} className='review'>
        <h2>Review {item.id}</h2>
        <p>User: {item.user.username}</p>
        <p>Title: {item.title}</p>
        <p>Description: {item.description}</p>
        <p>Calification: {item.rate}</p>
        
        {/*<Link to={''}>
        <button>View Comments</button>
        </Link>*/}

        
        
        {console.log(item.comments_user)}
        <div className='comments-section'>
          <h3>Comments of this Review:</h3>
          {(item.comments_user != []) ? (
          
          (item.comments_user).map((value, index) =>
             <div key={index} className='comment'>
             
               <div>Comment from User: {value.user.username}</div>
               <div>{value.comment}</div>
             
             </div>
            )) : 
             <div>There are no comments for the moment...</div>
              
        }</div>
      
        <Link to={`/create-comment-on-review/${item.id}/${movie.id}`} className="button">
          {item.comments_user.length > 0 ? 'Leave a comment on this review!' : 'Would you like to add a new comment?'}
        </Link>

       </div>
       )
      )}
    </div>
      
      {/*valid only when the user is logged, otherwise, redirect to login */}
      
      <Link to={(items === null) ? '/login' : `/create-user-review/${id}`} className="button">
       Add a New Review!
      </Link>
      
      
    </div>
  );
};

export default MovieProfile;