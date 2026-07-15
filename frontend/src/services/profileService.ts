import api from "./api";

export const getProfile = () => {
  return api.get("/profile");
};

export const updateProfile = (data: any) => {
  return api.put("/profile", data);
};

export const uploadProfileImage = (file: File) => {

  const formData = new FormData();

  formData.append("file", file);

  return api.post(
    "/profile/upload-image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};