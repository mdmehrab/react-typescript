import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setAccessToken, setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginCredentials, setLoginCredetials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginCredetials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      // Make the login request
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        loginCredentials,
        { withCredentials: true }
      );

      if (response && response?.data) {
        // Set the access token in a cookie
        toast.success(response?.data?.message);

        const accessToken = Cookies.get("access_token");

        if (accessToken) {
          dispatch(setAccessToken(accessToken));
        }

        // Fetch the user profile data
        const profileResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/profile`,
          { withCredentials: true }
        );

        if (profileResponse && profileResponse?.data) {
          // Dispatch the user data to Redux
          dispatch(setUser(profileResponse.data));
        }
      }

      // Reset login credentials after successful login
      setLoginCredetials({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full bg-white p-8">
        <div className="flex">
          <div>
            <img
              src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
              alt="Login illustration"
            />
          </div>
          <div className="w-full max-w-md mx-auto mt-14">
            <div className="font-bold text-3xl ">
              <p className="justify-center flex">Log in to your Udemy</p>
              <p className="justify-center flex">account</p>
            </div>

            <div className="mb-4 mt-6">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={loginCredentials.email}
                onChange={handleLoginChange}
                className="w-full p-4 border border-black placeholder-black font-bold text-xs"
                required
              />
            </div>

            <div className="mb-4">
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={loginCredentials.password}
                onChange={handleLoginChange}
                className="w-full p-4 border border-black placeholder-black font-bold text-xs"
                required
              />
            </div>

            <button
              className="bg-purple-500 font-bold text-white p-3 w-full"
              onClick={handleLoginSubmit}
            >
              Log in
            </button>

            <div className="flex justify-center mt-4 gap-1">
              or
              <button className="text-purple-900 underline font-bold underline-offset-4">
                Forgot Password?
              </button>
            </div>

            <div className="mt-6 flex justify-center">
              <span className="text-gray-600">Other login options</span>
            </div>

            <div className="flex space-x-4 mt-4 justify-center">
              <button className="border border-black p-3 hover:bg-gray-200">
                <FcGoogle size={24} />
              </button>
              <button className="border border-black p-3 hover:bg-gray-200">
                <BiLogoFacebookCircle size={24} />
              </button>
              <button className="border border-black p-3 hover:bg-gray-200">
                <FaApple size={24} />
              </button>
            </div>

            <div className="bg-gray-100 mt-10 py-2">
              <p className="flex justify-center border border-b-gray-400 py-3 ">
                Don't have an account?{" "}
                <button className="text-purple-800 font-bold underline underline-offset-4">
                  Sign up
                </button>
              </p>
              <span className="flex justify-center mt-2 pb-2 text-purple-900 font-bold underline underline-offset-4">
                <button>Log in with your organization</button>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            className="text-red-500 text-[14px] "
            onClick={handleForgetPassword}
          >
            Forget Password?
          </button>
        </div>
        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
