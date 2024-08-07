import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useEditUser } from "../../hooks/useEditUser";
import { fetchRoles, refetchUsers } from "../../utils/apiAdminUtils";

export const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState("");
  console.log(isEditing);

  const {
    data: users,
    load,
    error,
    setLoading,
    setData,
    setError,
  } = useFetch("http://localhost:3002/users");

  const handelDelete = async (userToDelete) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:3002/users/${userToDelete}`, {
        method: "DELETE",
      });
      await refetchUsers(setLoading, setData);
    } catch (error) {
      console.log(
        "it seems like you are not be able to eliminate this user..",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id_user) => {
    setIsEditing(id_user);
    const currentUser = users.find((user) => user.id === id_user);
    setUser({
      username: currentUser.username,
      email: currentUser.email,
      role: currentUser.role,
    });
  };

  const navigate = useNavigate();
  const { editUser } = useEditUser();
  const [user, setUser] = useState({ username: "", email: "", role: 0 });

  //-----------------------

  //-----------------------

  const handelInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    //obtain id
    const formData = new FormData(e.target);
    const id_user = formData.get("id");
    let id_rol;

    //to capture the rol id..
    user.role.id
      ? (id_rol = parseInt(user.role.id))
      : (id_rol = parseInt(user.role));

    try {
      const this_rol = await fetchRoles(id_rol);

      // Edit the user with the fetched role
      const success = await editUser({ ...user, role: this_rol }, id_user);
      if (success) {
        setIsEditing("");
        await refetchUsers(setLoading, setData);
        //navigate("/admin-profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (users.length < 0) {
    return <h1>no user found</h1>;
  } else {
    return (
      <div className="mt-5">
        {load && <div>Loading..</div>}
        {error && <p>Error: {error}</p>}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                UserName
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Reviews
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, i) => {
              return (
                <tr
                  key={i + 1}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.id}</td>

                  <td className="px-6 py-4">
                    {!(isEditing === item.id) ? (
                      item.username
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handelInput}
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {!(isEditing === item.id) ? (
                      item.email
                    ) : (
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handelInput}
                      />
                    )}
                  </td>
                  {/*<td>{item.password}</td>*/}
                  <td className="px-6 py-4">
                    {" "}
                    <Link to={`/profile/${item.id}`}>
                      <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Go to the Reviews
                      </button>
                    </Link>{" "}
                  </td>
                  <td className="px-6 py-4">
                    {!(isEditing === item.id) ? (
                      item.role.id
                    ) : (
                      <input
                        type="number"
                        className="form-control"
                        id="role"
                        name="role"
                        value={user.role.id}
                        onChange={handelInput}
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {!(isEditing === item.id) ? (
                      <>
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
                        >
                          Editar
                        </button>
                        <Link to={`/user/${item.id}`}>
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                        <button
                          onClick={() => handelDelete(item.id)}
                          className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-red-600 bg-red-600 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-red-600"
                        >
                          Delete Me
                        </button>
                      </>
                    ) : (
                      <form onSubmit={handelSubmit}>
                        <input
                          type="hidden"
                          id="id"
                          name="id"
                          value={item.id}
                          onChange={handelInput}
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-green-600 bg-green-600 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-green-600"
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};
