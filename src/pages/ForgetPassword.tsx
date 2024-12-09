import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const handelSubmit = () => {
    navigate("/change-password");
  };
  return (
    <>
      <div className="flex items-center justify-center py-48 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
            {" "}
            Reset Password
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email{" "}
              </label>
              <input
                className="w-full px-4 py-2 mt-1 border border-black rounded-lg focus:outline-none "
                type="email"
                id="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-gray-900"
              onClick={handelSubmit}
            >
              {" "}
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
