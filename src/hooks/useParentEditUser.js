import { useState } from "react";
import { fetchRoles } from "../utils/apiAdminUtils";


export const useParentEditUser = (editUser, refetchUsers, setLoading, setData) => {
  const [isEditing, setIsEditing] = useState("");
  const [user, setUser] = useState({ username: "", email: "", role: 0 });

  const handleEdit = (id_user, users) => {
    setIsEditing(id_user);
    const currentUser = users.find((user) => user.id === id_user);
    setUser({
      username: currentUser.username,
      email: currentUser.email,
      role: currentUser.role,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id_user = formData.get("id");
    let id_rol = user.role.id ? parseInt(user.role.id) : parseInt(user.role);

    try {
      const this_rol = await fetchRoles(id_rol);
      const success = await editUser({ ...user, role: this_rol }, id_user);
      if (success) {
        setIsEditing("");
        await refetchUsers(setLoading, setData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { isEditing, user, handleEdit, handleInput, handleSubmit, setIsEditing };
};