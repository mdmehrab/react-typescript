import { IoPersonSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const AccelerateGrowth = () => {
  return (
    <>
      <div>
        <p>Accelerate growth — for you or your organization</p>
        <p>
          Reach goals faster with one of our plans or programs. Try one free
          today or contact sales to learn more.
        </p>

        <div className="grid grid-cols-3 gap-5 mx-5">
          <div className="">
            <p>Personal Plan</p>
            <p>For you</p>
            <div className="flex">
              <p>
                <IoPersonSharp />
              </p>
              <p> Individual</p>
            </div>

            <div>
              <p>Starting at $11.00 per month</p>
              <p>Billed monthly or annually. Cancel anytime.</p>
              <div className="flex">
                <button>Try it free</button>
                <p>
                  <FaArrowRightLong />
                </p>
              </div>
            </div>

            <div>
              <div className="flex">
                <p>
                  <IoCheckmarkCircleOutline />
                </p>
                <p>Access to 12,000+ top courses</p>
              </div>
              <div className="flex">
                <p>
                  <IoCheckmarkCircleOutline />
                </p>
                <p>Certification prep</p>
              </div>

              <div className="flex">
                <p>
                  <IoCheckmarkCircleOutline />
                </p>
                <p>Goal-focused recommendations</p>
              </div>

              <div className="flex">
                <p>
                  <IoCheckmarkCircleOutline />
                </p>
                <p>AI-powered coding exercises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccelerateGrowth;
