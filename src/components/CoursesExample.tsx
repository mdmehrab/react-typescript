import { useState } from "react";
import { skillsList } from "../data";
import { IoIosStarOutline } from "react-icons/io";

const CoursesExample = () => {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="px-7 bg-white py-5">
      <h2 className="text-3xl font-bold py-3">
        All the skills you need in one place
      </h2>
      <p className="py-3 text-gray-700">
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>
      <div className="border-b border-gray-400">
        <ul
          className="flex flex-wrap text-base font-bold text-center text-gray-700"
          role="tablist"
        >
          {skillsList?.map((skill) => (
            <li key={skill.title} role="presentation">
              <button
                className={`inline-block p-2 border-b-2  ${
                  activeTab === skill.title
                    ? "border-black"
                    : "border-transparent"
                }`}
                type="button"
                onClick={() => setActiveTab(skill.title)}
              >
                {skill.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display items under the active tab */}
      <div className="py-4">
        {skillsList?.map(
          (skill) =>
            activeTab === skill.title && (
              <div
                key={skill.title}
                className="flex items-center justify-between"
              >
                {skill.items?.map((item, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-full cursor-pointer shadow ${
                      activeItem == index
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200"
                    }`}
                    type="button"
                    onClick={() => setActiveItem(index)}
                  >
                    <h3 className="text-sm font-semibold">{item.text}</h3>
                    {"user" in item && (
                      <p
                        className={`text-xs ${
                          activeItem === index ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {item.user}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            )
        )}
      </div>

      {/* cards */}
      <div className="py-4">
        {skillsList?.map(
          (skill) =>
            activeTab === skill.title && (
              <div
                key={skill.title}
                className="flex items-center justify-between"
              >
                {skill.cardItems?.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow-md"
                  >
                    <h3 className="text-lg font-semibold">
                      {item.currentPrice}
                    </h3>
                  </div>
                ))}
              </div>
            )
        )}
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-1 border border-gray-400 rounded-lg">
          <div>
            <img className="w-full rounded-t-lg"  
              src="https://media.istockphoto.com/id/1290492381/photo/3d-code-programming-for-website-editors-view.jpg?s=1024x1024&w=is&k=20&c=9M-O33J-9jLuAVd096VRd5So8YGYvj6iJH_cLjjmlhk="
              alt="will add image"
            />
          </div>
          <div className="py-3 px-5">
            <div className="font-bold">
              <p>The Complete 2024 Web</p>
              <p> Devlopment Bootcamp</p>
            </div>
            <h4 className="text-sm text-gray-600 mt-2">Dr.Angela Yu Developer and lead...</h4>
            <div className="flex items-center text-center space-x-2 mt-2">
              <p className="text-sm font-bold">4.7</p>
              <div className="flex items-center text-sm space-x-1">
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
              </div>
              <p className="text-[13px] text-gray-700">(100000)</p>
            </div>

            <div className="flex gap-3 mt-2">
              <p className="text-[16px] font-bold">$12.99</p>
              <p className="text-sm text-gray-700">$69.99</p>
            </div>
            <button className="text-black text-xs  font-semibold bg-amber-200 p-1 mt-1">bestseller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesExample;
