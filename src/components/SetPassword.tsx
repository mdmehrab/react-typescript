import { ChangeEvent, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../features/auth/authSlice";

const SetPassword = () => {
  const [updatePass, setUpdatePass] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatePass(e.target.value);
  };

  const handlePassChange = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/reset-password`,
        {
          token,
          newPassword: updatePass,
        },
        { withCredentials: true }
      );

      if (res && res.data) {
        alert("password changes successful!");
        setUpdatePass("");

        // Clear cookies
        Cookies.remove("access_token");

        // Reset Redux state
        dispatch(setAccessToken(null));
        dispatch(setUser(null));

        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-4 space-y-4 ">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h2 className="text-2xl font-bold text-gray-700">
          Update Your Password
        </h2>
        {/* <p>{token}</p> */}
        <div className="flex space-x-2">
          <input
            type="text"
            className="h-12 text-xl text-center rounded-lg"
            onChange={handleChange}
          />
        </div>

        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={handlePassChange}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SetPassword;
