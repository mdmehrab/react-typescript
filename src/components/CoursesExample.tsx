import { useState, useEffect } from "react";
import { skillsList } from "../data";
import { Link } from "react-router-dom";

function CoursesExample() {
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
    const selectedSkill = skillsList.find((item) => item.id === id);
    setFilteredItems(selectedSkill?.items || []);
    handleBtn(id);
  };

  const handleBtn = (id: number) => {
    const selectedSkill = skillsList.find((item) => item.id === id);
    if (selectedSkill) {
      setSelectedSkills(selectedSkill.cardItems || []);
    }
  };

  useEffect(() => {
    const initialSkill = skillsList.find((item) =>
      item.items?.some((ele) => ele.text === "Web Development")
    );
    if (initialSkill) {
      setActiveTab(initialSkill.id);
      setFilteredItems(initialSkill.items || []);
      setSelectedSkills(initialSkill.cardItems || []);
    }
  }, []);

  return (
    <>
      {/* Tabs Section */}
      <div className="tabs flex space-x-4 border-b mb-4">
        {skillsList.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 ${
              activeTab === item.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Buttons Section */}
      <div>
        {filteredItems.map((ele) => (
          <button onClick={() => handleBtn(ele.id)} key={ele.id}>
            <span className="mx-3">{ele.text}</span>
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {selectedSkills.map((cardItem) => (
          <Link to={`/courses/${cardItem.id}`} key={cardItem.id} className="card p-4 border rounded-lg shadow">
            <img
              src={cardItem.imgSrc}
              alt={cardItem.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{cardItem.title}</h3>
            <p className="text-gray-500">{cardItem.subTitle}</p>
            <p className="text-sm text-gray-600">{cardItem.author}</p>
            <div className="flex items-center">
              <div>{cardItem.rating}</div>
              <div className="ml-2">{cardItem.ratingCounter}</div>
            </div>
            <div className="text-lg font-semibold">
              {cardItem.currentPrice}{" "}
              <span className="line-through text-gray-500">
                {cardItem.beforePrice}
              </span>
            </div>
            {cardItem.mostSell && (
              <div className="text-green-600 font-bold">
                {cardItem.mostSell}
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default CoursesExample;
