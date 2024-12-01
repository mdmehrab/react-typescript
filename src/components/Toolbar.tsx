import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  ListItem,
} from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../features/store/store";

type NestedMenuItem = {
  title: string;
};

const nestedMenuItems: NestedMenuItem[] = [
  { title: "Hero" },
  { title: "Features" },
  { title: "Testimonials" },
  { title: "Ecommerce" },
];

function NavListMenu(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openNestedMenu, setOpenNestedMenu] = useState<boolean>(false);

  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <MenuItem
      key={key}
      title={title}
      onClick={() => console.log(title)}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      {title}
    </MenuItem>
  ));

  return (
    <Menu
      open={isMenuOpen}
      handler={(isOpen) => setIsMenuOpen(isOpen)}
      placement="bottom"
      allowHover
    >
      <MenuHandler>
        <Typography
          as="div"
          variant="small"
          className="font-medium"
          title="Blocks"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <ListItem
            title="Blocks ListItem"
            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
            selected={isMenuOpen}
            onPointerEnterCapture={() => setIsMenuOpen(true)}
            onPointerLeaveCapture={() => setIsMenuOpen(false)}
            placeholder=""
          >
            Blocks
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList
        className="rounded-xl"
        dismissible
        placeholder="" // Add a placeholder prop if required
        onPointerEnterCapture={() => {}} // Provide empty functions if not needed
        onPointerLeaveCapture={() => {}}
      >
        <Menu
          placement="right-start"
          allowHover
          offset={15}
          open={openNestedMenu}
          handler={(isOpen) => setOpenNestedMenu(isOpen)}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem
              placeholder="" // This can be an empty string if not needed
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Figma
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openNestedMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList
            className="rounded-xl"
            dismissible
            placeholder="" // Add placeholder here if necessary
            onPointerEnterCapture={() => {}} // Optional: define functionality if needed
            onPointerLeaveCapture={() => {}} // Optional: define functionality if needed
          >
            {renderItems} {/* Ensure renderItems is defined correctly */}
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
}

const Toolbar = (): JSX.Element => {
  const [showNavbar, setShowNavbar] = useState(false);
  // state access
  const accessToken = useSelector(
    (state: RootState) => state.auth.access_token
  );

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // replace route
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div
        className={`bg-white ${
          showNavbar && " fixed top-0 w-screen z-10 px-4"
        }`}
      >
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-3 w-[55%]">
            <div className="w-[10%]">
              <span className="text-xl font-bold">Udemy</span>
            </div>
            <NavListMenu />
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
              <button
                className="border border-black px-3 py-1"
                onClick={() => navigate(accessToken ? "/profile" : "/login")}
              >
                {accessToken ? "User Profile" : "Log in"}
              </button>

              <button
                className="text-white px-3 py-1 bg-black"
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
            <div className="border border-black px-2 py-2">
              <GrLanguage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
