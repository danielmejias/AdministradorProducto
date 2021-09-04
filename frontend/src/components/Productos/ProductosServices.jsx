import axios from "axios";

const apiroot = "http://localhost:9999/";

// export const getUsers = async () => {
//   return await axios.get(`${apiroot}api/users`);
// };

export const createProductos = async (producto) => {
  return await axios.post(`${apiroot}api/productos`, producto);
};

// export const getUser = async (id) => {
//   return await axios.get(`${apiroot}api/users/${id}`);
// };

// export const editUser = async (id, user) => {
//   return await axios.put(`${apiroot}api/users/${id}`, user);
// };

// export const deleteUser = async (id, user) => {
//   return await axios.delete(`${apiroot}api/users/${id}`);
// };
