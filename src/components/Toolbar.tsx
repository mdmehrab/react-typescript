import { MdOutlineShoppingCart } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  ListItem,
} from "@material-tailwind/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const nestedMenuItems = [
  { title: "Hero" },
  { title: "Features" },
  { title: "Testimonials" },
  { title: "Ecommerce" },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openNestedMenu, setOpenNestedMenu] = useState(false);

  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom" allowHover>
      <MenuHandler>
        <Typography as="div" variant="small" className="font-medium">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
            selected={isMenuOpen}
          >
            Blocks
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="rounded-xl">
        <Menu
          placement="right-start"
          allowHover
          offset={15}
          open={openNestedMenu}
          handler={setOpenNestedMenu}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Figma
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${openNestedMenu ? "rotate-90" : ""}`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList className="rounded-xl">{renderItems}</MenuList>
        </Menu>
      </MenuList>
    </Menu>
  );
}

const Toolbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-3 w-[55%]">
          <div className="w-[10%]">
            <span className="text-xl font-bold">Udemy</span>
          </div>

          <NavListMenu /> {/* Blocks dropdown */}
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
            <button className="text-white px-3 py-1 bg-black">Sign up</button>
          </div>
          <div className="border border-black px-2 py-2">
            <GrLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
