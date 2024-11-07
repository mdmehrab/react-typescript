import { useState } from "react";
import { skillsList } from "../data";

const CoursesExample = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

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
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
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
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow-md"
                  >
                    <div className="text-lg font-semibold">
                      <p>{item.text}</p>
                      <p>{item.user}</p>
                    </div>
                  </div>
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
    </div>
  );
};

export default CoursesExample;
