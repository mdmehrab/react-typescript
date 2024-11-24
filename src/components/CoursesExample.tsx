import { useState, useEffect } from "react";
import { skillsList } from "../data";
import { Link } from "react-router-dom";

function CoursesExample() {
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  // fetch courses
  const [courses, setCourses] = useState([]);

  console.log(import.meta.env.VITE_API_URL);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/courses/all-courses`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  console.log(courses);

  const handleBtn = (id: number) => {
    const selectedSkill = skillsList.find((skill) => skill.id === activeTab);

    if (selectedSkill) {
      const filteredCards = selectedSkill.cardItems.filter(
        (card) => card.id === id
      );

      setSelectedSkills(
        filteredCards.length ? filteredCards : selectedSkill.cardItems
      );
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
      <div className="bg-white p-4">
        <div className="mx-4 my-6">
          <p className="font-bold text-3xl">
            All the skills you need in one place
          </p>
          <p className="text-gray-600 my-2">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
        </div>
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
              onClick={() => handleTabClick(item.id)}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 bg-gray-50">
          {courses?.map((cardItem) => (
            <Link
              to={`/courses/${cardItem._id}`}
              key={cardItem._id}
              className="card p-4 border rounded-lg shadow"
            >
              <img
                src={cardItem.imageUrl}
                alt={cardItem.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{cardItem.title}</h3>
              {/* <p className="text-gray-500">{cardItem.subTitle}</p> */}
              {/* <p className="text-sm text-gray-600">{cardItem.author}</p> */}
              <div className="flex items-center">
                {/* <div>{cardItem.rating}</div> */}
                {/* <div className="ml-2">{cardItem.ratingCounter}</div> */}
              </div>
              <div className="text-lg font-semibold">
                {/* {cardItem.currentPrice}{" "} */}
                <span className="line-through text-gray-500">
                  {/* {cardItem.beforePrice} */}
                </span>
              </div>
              {/* {cardItem.mostSell && (
                <div className="text-green-600 font-bold">
                  {cardItem.mostSell}
                </div>
              )} */}
            </Link>
          ))}
        </div>
        <div>
          <button className="border border-black p-3 my-10 hover:bg-gray-200 font-bold">
            Show All Courses
          </button>
        </div>
      </div>
    </>
  );
}

export default CoursesExample;
