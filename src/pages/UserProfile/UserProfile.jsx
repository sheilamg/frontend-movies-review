import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import StaticStarRating from "../../components/Star/StaticStarRating";
import useEditReview from "../../hooks/useEditReview";

const UserProfile = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("AuthToken"))
  );
  const userId = items.user.id;
  //agregar logica para ver si el id es de user o de admin...
  //si tomamos del token, puede ser de admin o de user
  //desde el lado del admin el id es el que viene del user especifico
  //por lo que habria que usar ---> {id} = useParam().. etc

  const {
    data: user,
    load,
    error,
  } = useFetch(`http://localhost:3002/users/${userId}`);
  const {
    editReview,
    loading: editing,
    error: editError,
  } = useEditReview("http://localhost:3002/reviews");

  //

  //const {data: review} = useFetch(`http://localhost:3002/reviews`)

  const [isEditing, setIsEditing] = useState(false);
  const [editedReview, setEditedReview] = useState({});

  const [ur, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  const handleEdit = (review) => {
    setIsEditing(review.id);
    setEditedReview(review);
  };

  const handleSave = async () => {
    try {
      await editReview(editedReview.id, editedReview);
      setIsEditing(false);
    } catch (error) {
      console.log("Failed to set the review", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReview({
      ...editedReview,
      [name]: value,
    });
  };

  //

  const deleteReview = async (reviewToDelete) => {
    try {
      await fetch(`http://localhost:3002/reviews/${reviewToDelete.id}`, {
        method: "DELETE",
      });
      setUser((prevUser) => ({
        ...prevUser,
        review: prevUser.review.filter(
          (review) => review.id !== reviewToDelete.id
        ),
      }));
    } catch (error) {
      console.log(
        "it seems like you are not be able to eliminate this review..",
        error
      );
    }
  };

  if (load) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User Name: {user.username}</p>

      <p>Email: {user.email}</p>

      {console.log(user.review)}
      {user.review.length > 0 ? (
        user.review.map((value, index) => (
          <div key={index}>
            <h2>Review {value.id}</h2>

            {isEditing ? (
              <div>
                <h2>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={editedReview.title}
                    onChange={handleChange}
                  />
                </h2>
                <p>
                  Description:
                  <textarea
                    name="description"
                    value={editedReview.description}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  Calification:
                  <input
                    type="number"
                    name="rate"
                    value={editedReview.rate}
                    onChange={handleChange}
                  />
                </p>
                <button onClick={handleSave} disabled={editing}>
                  {editing ? "Saving..." : "Save"}
                </button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>Title: {value.title}</p>
                <p>Description: {value.description}</p>
                <div>
                  Calification: <StaticStarRating rating={value.rate} />
                </div>
                <button onClick={() => handleEdit(value)}>Edit</button>
                <button onClick={() => deleteReview(value)}>Delete</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>It seems like you don't have any review yet..</div>
      )}
    </div>
  );
};

export default UserProfile;
