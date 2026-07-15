import api from "./api";

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const register = (data: RegisterRequest) => {
  return api.post("/auth/register", data);
};

export const login = (data: LoginRequest) => {
  return api.post("/auth/login", data);
};
export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
}

export const forgotPassword = (
  data: ForgotPasswordRequest
) => {
  return api.post("/auth/forgot-password", data);
};

export const verifyOtp = (
  data: VerifyOtpRequest
) => {
  return api.post("/auth/verify-otp", data);
};

export const resetPassword = (
  data: ResetPasswordRequest
) => {
  return api.post("/auth/reset-password", data);
};
export const googleLogin = (credential: string) => {
  return api.post("/auth/google", {
    credential,
  });
};