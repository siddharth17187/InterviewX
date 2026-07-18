import api from "./api";

export function getAllUsers() {
  return api.get("/admin/users");
}

export function deleteUser(id: string) {
  return api.delete(`/admin/users/${id}`);
}