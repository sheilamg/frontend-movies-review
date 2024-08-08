import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import StaticStarRating from "../../components/Star/StaticStarRating";
import useEditReview from "../../hooks/useEditReview";

const UserProfile = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("AuthToken"))
  );

  const { id } = useParams();

  //const userId = items.user.id;
  let userId = "";

  id !== items.user.id && items.role == "admin"
    ? (userId = id)
    : (userId = items.user.id);
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p className="text-lg mb-2">User Name: {user.username}</p>
      <p className="text-lg mb-4">Email: {user.email}</p>

      {console.log(user.review)}
      {user.review.length > 0 ? (
        user.review.map((value, index) => (
          <div key={index} className="border p-4 mb-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Review {value.id}</h2>

            {isEditing ? (
              <div>
                <h2 className="text-lg font-medium mb-2">
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={editedReview.title}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </h2>
                <p>
                  Description:
                  <textarea
                    name="description"
                    value={editedReview.description}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </p>
                <p>
                  Calification:
                  <input
                    type="number"
                    name="rate"
                    value={editedReview.rate}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </p>
                <button
                  onClick={handleSave}
                  disabled={editing}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2 disabled:bg-gray-300"
                >
                  {editing ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p className="text-lg font-medium mb-2">Title: {value.title}</p>
                <p className="mb-2">Description: {value.description}</p>
                <div className="mb-2">
                  Calification: <StaticStarRating rating={value.rate} />
                </div>
                <button
                  onClick={() => handleEdit(value)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteReview(value)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-gray-500">
          It seems like you don't have any review yet..
        </div>
      )}
    </div>
  );
};

export default UserProfile;
