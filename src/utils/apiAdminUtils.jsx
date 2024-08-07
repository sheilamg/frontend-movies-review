export const fetchRoles = async (id_rol) => {
  try {
    const response = await fetch(`http://localhost:3002/roles/${id_rol}`);
    if (!response.ok) {
      throw new Error("Failed to fetch the role");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

export const refetchUsers = async (setLoading, setData) => {
  setLoading(true);
  try {
    const response = await fetch("http://localhost:3002/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};
