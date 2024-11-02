import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
const Toolbar = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-3 w-[55%]">
        <div className="w-[10%]">
          <span className="text-xl font-bold">Udemy</span>
        </div>
        <div className="w-[10%] text-sm ">Categories</div>
        <div className="w-[80%] flex items-center gap-2 relative">
          <span className="absolute right-3">
            <CiSearch />
          </span>
          <input
            className="w-full px-2 py-3 rounded-3xl text-sm focus:outline-none"
            type="search"
            placeholder="Search for anything"
          />
        </div>
      </div>

      <div className="flex items-center gap-8 w-[45%] justify-end">
        <div className="text-sm">Udemy Business</div>
        <div className="text-sm">Teach on Udemy</div>
        <div>
          <MdOutlineShoppingCart />
        </div>
        <div className="flex gap-2">
          <button className="border border-black px-3 py-1">Log in</button>
          <button className=" text-white px-3 py-1 bg-black">
            Sign up
          </button>
          
        </div>
        <div className="border border-black px-2 py-2">
            <GrLanguage />
          </div>
      </div>
    </div>
  );
};

export default Toolbar;
