import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const Toolbar = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-red-600 flex col-span-1">
        <div>
          <span>Udemy</span>
        </div>
        <div>Categories</div>
        <div>
          <IoSearchOutline />
          <input type="Search" />
        </div>
      </div>
      <div className="bg-blue-500 flex col-span-1">
        <div>Udemy Business</div>
        <div>Teach on Udemy</div>
        <div>
          <MdOutlineShoppingCart />
        </div>
        <div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
        <div>
          <GrLanguage />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
