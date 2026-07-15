import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { verifyOtp } from "../../services/authService";

export default function VerifyOtpForm() {

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      await verifyOtp({
        email,
        otp,
      });

      toast.success("OTP Verified");

      navigate("/reset-password", {
        state: { email },
      });

    } catch (error: any) {

      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Invalid OTP"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
    >

      <h1 className="mb-2 text-center text-3xl font-bold">
        Verify OTP
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Enter the OTP sent to your email.
      </p>

      <Input
        label="OTP"
        type="text"
        placeholder="Enter 6-digit OTP"
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value)
        }
      />

      <Button type="submit">
        Verify OTP
      </Button>

    </form>
  );
}