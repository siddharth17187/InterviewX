import axios from "axios";

const API = "http://localhost:8080/api/admin";

function getToken() {
  return localStorage.getItem("token");
}

export function getAllUsers() {
  return axios.get(`${API}/users`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}

export function deleteUser(id: string) {
  return axios.delete(`${API}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
}