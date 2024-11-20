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
          <div className="font-bold text-3xl ">
            <p className="justify-center flex">Log in to your Udemy</p>
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

          <div className="flex justify-center mt-4 gap-1">
            or
            <button className="text-purple-900 underline font-bold">
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

          <div className="bg-gray-300">
            <p>
              Don't have an account? <button> Sign up</button>
            </p>
            <button>Log in with your organization</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
