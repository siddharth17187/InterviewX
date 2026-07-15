import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";
import GoogleButton from "../../components/common/GoogleButton";

import { register } from "../../services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!acceptedTerms) {
  alert(
    "Please accept the Terms & Conditions and Privacy Policy."
  );
  return;
}

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register({
        fullName,
        email,
        password,
      });

      alert("Registration Successful!");

      navigate("/login");

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
    >
      <h1 className="mb-2 text-center text-3xl font-bold">
        Create Account 
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Start your InterviewX journey today.
      </p>

      <Input
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
  label="Password"
  placeholder="Create a password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<PasswordInput
  label="Confirm Password"
  placeholder="Confirm password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>

      <div className="mb-6">

  <label className="flex items-start gap-3 text-sm leading-6">

    <input
      type="checkbox"
      checked={acceptedTerms}
      onChange={(e) =>
        setAcceptedTerms(e.target.checked)
      }
      className="mt-1"
    />

    <span>

      I agree to the{" "}

      <Link
        to="/terms"
        
        className="font-semibold text-blue-600 hover:underline"
      >
        Terms & Conditions
      </Link>

      {" "}and{" "}

      <Link
        to="/privacy"
        
        className="font-semibold text-blue-600 hover:underline"
      >
        Privacy Policy
      </Link>

    </span>

  </label>

</div>
      <Button
  type="submit"
  disabled={!acceptedTerms}
>
  Create Account
</Button>
      <div className="my-6 flex items-center">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="mx-4 text-sm text-gray-500">
          OR
        </span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      <GoogleButton />

      <p className="mt-6 text-center text-sm">
        Already have an account?

        <Link
          to="/login"
          className="ml-2 text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}