import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { resetPassword } from "../../services/authService";

export default function ResetPasswordForm() {

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {

      await resetPassword({
        email,
        newPassword,
      });

      toast.success("Password Reset Successful");

      navigate("/login");

    } catch (error: any) {

      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Reset Failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
    >
      <h1 className="mb-2 text-center text-3xl font-bold">
        Reset Password
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Enter your new password.
      </p>

      <Input
        label="New Password"
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit">
        Reset Password
      </Button>

    </form>
  );
}