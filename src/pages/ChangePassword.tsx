import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="mt-4 space-y-4 ">
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h2 className="text-2xl font-bold text-gray-700">Enter OTP</h2>
        <div className="flex space-x-2">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="tel"
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg"
                maxLength={1}
              />
            ))}
        </div>

        <Link to="/set-password" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 ">
          Verify OTP
        </Link>
      </div>
    </div>
  );
};

export default ChangePassword;
