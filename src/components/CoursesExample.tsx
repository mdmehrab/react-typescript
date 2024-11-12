import { useState, useEffect } from "react";
import { skillsList } from "../data"; // Import your data
import { Link } from "react-router-dom";

function CoursesExample() {
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]); // To store the card items
  const [activeTab, setActiveTab] = useState<number | null>(null); // Track the active tab
  const [filteredItems, setFilteredItems] = useState<any[]>([]); // To store the items for filters

  // Handle tab click, set active tab and filter items accordingly
  const handleTabClick = (id: number) => {
    setActiveTab(id);

    const selectedSkill = skillsList.find((skill) => skill.id === id);
    if (selectedSkill) {
      setFilteredItems(selectedSkill.items || []); // Set the filtered items based on active tab
      setSelectedSkills(selectedSkill.cardItems || []); // Set the card items for the selected tab
    }
  };

  // Handle button click to filter cards based on selected item
  const handleBtn = (id: number) => {
    const selectedSkill = skillsList.find((skill) => skill.id === activeTab);

    if (selectedSkill) {
      // Filter cards based on the button clicked
      const filteredCards = selectedSkill.cardItems.filter(
        (card) => card.id === id
      );

      // If no cards are filtered, show the full set of cardItems
      setSelectedSkills(
        filteredCards.length ? filteredCards : selectedSkill.cardItems
      );
    }
  };

  // Set initial tab on page load based on the initial data
  useEffect(() => {
    const initialSkill = skillsList.find(
      (item) => item.items?.some((ele) => ele.text === "Web Development") // Initial filter, e.g., Web Development
    );
    if (initialSkill) {
      setActiveTab(initialSkill.id); // Set the initial active tab
      setFilteredItems(initialSkill.items || []); // Set initial filtered items
      setSelectedSkills(initialSkill.cardItems || []); // Set initial card items
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
                : "text-red-500"
            }`}
            onClick={() => handleTabClick(item.id)} // Handle tab click
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Filter Buttons Section */}
      <div>
        {filteredItems.map((ele) => (
          <button onClick={() => handleBtn(ele.id)} key={ele.id}>
            <span className="mx-3 text-red-400">{ele.text}</span>
          </button>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {selectedSkills.map((cardItem) => (
          <Link
            to={`/courses/${cardItem.id}`}
            key={cardItem.id}
            className="card p-4 border rounded-lg shadow"
          >
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
