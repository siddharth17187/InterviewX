import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";
import GoogleButton from "../../components/common/GoogleButton";

import { login } from "../../services/authService";
import {
  loginSchema,
  type LoginFormData,
} from "../../utils/loginSchema";

export default function LoginForm() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {

      const response = await login(data);

      localStorage.setItem(
        "token",
        response.data.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.data)
      );

      toast.success("Login Successful!");

      navigate("/dashboard");

    } catch (error: any) {

      toast.error(
        error?.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >

      <h1 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
        Welcome Back 
      </h1>

      <p className="mb-8 text-center text-sm text-gray-500 sm:text-base">
        Login to continue.
      </p>

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email")}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="mb-5 flex justify-end text-sm">
        <Link
          to="/forgot-password"
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>

      <div className="my-6 flex items-center">

        <div className="h-px flex-1 bg-gray-300"></div>

        <span className="mx-3 text-sm text-gray-500">
          OR
        </span>

        <div className="h-px flex-1 bg-gray-300"></div>

      </div>

      <GoogleButton />

      <p className="mt-6 text-center text-sm">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>

      </p>

    </form>

  );
}