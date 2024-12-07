import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles: "USER",
    mobileNumber: "",
    gender: "male",
    country: "",
    profileImg: "",
  });

  const [_file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false); // To track if image upload is complete
  const navigate = useNavigate();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setImageUploaded(false); // Reset on new file selection
      setIsUploading(true); // Start uploading
      uploadToCloudinary(file); // Trigger image upload
    }
  };

  const handleForgetPassword = () => {
    navigate("/forget-password");
  };

  // Cloudinary image upload function
  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "udemy_clone"); // Replace with your upload preset
    formData.append("cloud_name", "dcyr3emxz"); // Replace with your cloud name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dcyr3emxz/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total!
            );
            setUploadProgress(percent); // Update upload progress
          },
        }
      );
      setImageUploaded(true); // Mark as uploaded
      setFormData((prevData) => ({
        ...prevData,
        profileImg: response.data.secure_url, // Set image URL
      }));
      setIsUploading(false); // Stop uploading
    } catch (error) {
      toast.error("Image upload failed!");
      setIsUploading(false);
      throw error;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name.trim()]: value,
    }));
  };

  const handleSubmit = async () => {
    if (imageUploaded) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users/register`,
          formData
        );
        if (response.status === 201) {
          toast.success("Registration successful!");
        }
      } catch (error) {
        toast.error("Registration failed!");
      }
    } else {
      toast.error("Please upload a profile image.");
    }
  };

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
              className="w-full p-4 border border-black placeholder-black font-bold text-xs"
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
              className="w-full p-4 border border-black placeholder-black font-bold text-xs"
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-black placeholder-black font-bold text-xs"
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
              className="w-full p-2 border border-black placeholder-black font-bold text-xs"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-bold text-xs">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-black placeholder-black text-xs bg-white"
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
              className="w-full p-2 border border-black placeholder-black font-bold text-xs"
              required
            />
          </div>

          <div>
            <div>Profile Image</div>
            <div className="relative my-4">
              <label
                htmlFor="fileInput"
                className="bg-gray-200 text-black px-4 py-2 rounded cursor-pointer"
              >
                Choose File
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {isUploading ? (
              <div className="mb-4 text-center">
                <p>Uploading... {uploadProgress}%</p>
              </div>
            ) : imageUploaded ? (
              <button
                className="bg-purple-500 font-bold text-white p-3 w-full"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            ) : (
              <p>Upload your profile image to continue.</p>
            )}

            <div className="mt-6 flex justify-center">
              <p className="text-xs ">
                By signing up, you agree to our{" "}
                <button className="text-purple-900 underline">
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
                <button className="text-purple-900 font-bold underline text-[15px]">
                  Log in
                </button>
              </p>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                className="text-red-500 text-[14px] "
                onClick={handleForgetPassword}
              >
                Forget Password?
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
