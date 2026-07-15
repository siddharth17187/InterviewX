import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { googleLogin } from "../../services/authService";

export default function GoogleButton() {
  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {

          if (!credentialResponse.credential) {
            toast.error("Google Login Failed");
            return;
          }

          try {

            const response = await googleLogin(
              credentialResponse.credential
            );

            const loginData = response.data.data;

            localStorage.setItem(
              "token",
              loginData.token
            );

            localStorage.setItem(
              "user",
              JSON.stringify(loginData)
            );

            toast.success("Login Successful");

            window.location.href = "/dashboard";

          } catch (error) {

            console.error(error);

            toast.error("Google Login Failed");

          }

        }}
        onError={() => {
          toast.error("Google Login Failed");
        }}
        width="100%"
      />
    </div>
  );
}