import { ChangeEvent, useState } from "react";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/forgot-password`,
        { email }, // Wrap email in an object
        {
          withCredentials: true,
        }
      );

      console.log(res.data); // Handle success response here
    } catch (err) {
      console.error(err); // Handle error response here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Reset Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="mt-1 w-full px-4 py-2 border border-black rounded-lg focus:outline-none"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
