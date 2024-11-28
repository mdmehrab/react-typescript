import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles: "USER",
    mobileNumber: "",
    gender: "male",
    country: "",
  });

  
  const navigate = useNavigate();

  const [_error, setError] = useState<string | null>(null);
  const [_success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/register`,
        formData
      );

      setError(null);
      setFormData({
        username: "",
        email: "",
        password: "",
        roles: "USER",
        mobileNumber: "",
        gender: "male",
        country: "",
      });

      if (response) {
        toast.success("User registered successfully!");
        // navigate("/login")
      }
    } catch (error) {
      setSuccess(null);
      // setError("Failed to register user. Please try again.");
      toast.error("Failed to register user. Please try again.");
    }
  };

  const handleNavigate = () =>{
    navigate('/login')
  }


  return (
    <div className="w-full bg-white p-8">
      <div className="flex">
        <div>
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
            alt="Register illustration"
          />
        </div>

        <div className="w-full max-w-md mx-auto mt-14">
          <p className="text-lg font-semibold mb-4">
            Sign up and start learning
          </p>
          <div className="mb-4">
            <input
              placeholder="Full name"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-4 border border-black  placeholder-black font-bold text-xs"
              required
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border  border-black  placeholder-black font-bold text-xs"
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-black  placeholder-black font-bold text-xs"
              required
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Phone Number"
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-black  placeholder-black font-bold text-xs"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-bold text-xs">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-black  placeholder-black text-xs bg-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              placeholder="Country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-black  placeholder-black font-bold text-xs "
              required
            />
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="bg-purple-500 font-bold text-white p-3  w-full"
            >
              Sign up
            </button>
            <div className="mt-6 flex justify-center">
              <p className="text-xs ">
                By signing up, you agree to our{" "}
                <button className="text-purple-900  underline">
                  Terms of Use
                </button>{" "}
                and{" "}
                <button className="text-purple-900 underline">
                  Privacy Policy
                </button>
                .
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <p className="text-sm text-gray-800">
                Already have an account?{" "}
                <button
                  onClick={handleNavigate}
                  className="text-purple-900 font-bold underline text-[15px]"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

  

      <ToastContainer />
    </div>
  );
};

export default Register;
