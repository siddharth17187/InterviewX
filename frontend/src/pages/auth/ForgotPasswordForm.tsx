import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { forgotPassword } from "../../services/authService";

export default function ForgotPasswordForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      await forgotPassword({ email });

      toast.success("OTP sent successfully");

      navigate("/verify-otp", {
        state: { email }
      });

    } catch (error: any) {

      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Failed to send OTP"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
    >

      <h1 className="mb-2 text-center text-3xl font-bold">
        Forgot Password
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Enter your registered email.
      </p>

      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <Button type="submit">
        Send OTP
      </Button>

    </form>
  );
}