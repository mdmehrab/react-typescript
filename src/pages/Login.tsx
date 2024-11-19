import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="w-full bg-white p-8">
      <div className="flex">
        <div>
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
            alt="Login illustration"
          />
        </div>
        <div className="w-full max-w-md mx-auto mt-14">
          <div className="font-bold text-2xl">
            <p>Log in to your Udemy</p>
            <p className="justify-center flex">account</p>
          </div>

          <div className="mb-4 mt-6">
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="w-full p-4 border border-black placeholder-black font-bold text-xs"
              required
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="w-full p-4 border border-black placeholder-black font-bold text-xs"
              required
            />
          </div>

          <button className="bg-purple-500 font-bold text-white p-3 w-full">
            Log in
          </button>

          <div className="flex justify-between mt-4">
            <p>or</p>
            <button className="text-purple-900 underline">
              Forgot Password?
            </button>
          </div>

          <div className="mt-6">
            <span>Other login options</span>
          </div>

          <div className="flex space-x-4 mt-4">
            <FcGoogle size={24} />
            <BiLogoFacebookCircle size={24} />
            <FaApple size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
