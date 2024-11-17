import { IoPersonSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const AccelerateGrowth = () => {
  return (
    <>
      <div className="bg-white p-4">
        <div className="mx-5 my-4">
          <p className="text-3xl font-bold">
            Accelerate growth — for you or your organization
          </p>
          <p className="text-gray-700">
            Reach goals faster with one of our plans or programs. Try one free
            today or contact sales to learn more.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 mx-5 ">
          <div className="border border-gray-400 border-t-8 border-t-purple-400 rounded-md">
            <div className="bg-gray-100 p-4">
              <p className="font-bold text-1xl">Personal Plan</p>
              <p className="text-gray-700 text-sm">For you</p>
              <div className="flex items-center gap-2">
                <p>
                  <span className="text-gray-500">
                    <IoPersonSharp />
                  </span>
                </p>
                <p className="text-sm text-gray-600"> Individual</p>
              </div>
            </div>

            <div className="mx-5 my-4">
              <p className="font-bold text-[15px]">
                Starting at $11.00 per month
              </p>
              <p className="text-gray-500 text-[12px]">
                Billed monthly or annually. Cancel anytime.
              </p>
              <div className="flex bg-black items-center justify-center gap-2 my-4 p-2">
                <button className="text-white font-bold">Try it free</button>
                <p className="text-white">
                  <FaArrowRightLong />
                </p>
              </div>
            </div>

            <div className="m-5 ">
              <div className="flex gap-4 items-center my-1">
                <p className="text-green-500  ">
                  <IoCheckmarkCircleOutline />
                </p>
                <p className="text-sm">Access to 12,000+ top courses</p>
              </div>
              <div className="flex gap-4  items-center  my-1">
                <p className="text-green-500">
                  <IoCheckmarkCircleOutline />
                </p>
                <p className="text-sm">Certification prep</p>
              </div>

              <div className="flex gap-4  items-center  my-1">
                <p className="text-green-500">
                  <IoCheckmarkCircleOutline />
                </p>
                <p className="text-sm">Goal-focused recommendations</p>
              </div>

              <div className="flex gap-4  items-center mb-52  my-1">
                <p className="text-green-500">
                  <IoCheckmarkCircleOutline />
                </p>
                <p className="text-sm">AI-powered coding exercises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccelerateGrowth;
