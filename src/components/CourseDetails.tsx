import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SingleCourse } from "../types/course.interface";

function CourseDetails() {
  const [singleCourse, setSingleCourse] = useState<SingleCourse | null>(null); 
  const { courseId } = useParams<{ courseId: string }>();

  useEffect(() => {
    const getSingleCourse = async () => {
      try {
        const response = await axios.get<SingleCourse>(
          `${import.meta.env.VITE_API_URL}/courses/single-course/${courseId}`,
          {
            withCredentials: true,
          }
        );
        setSingleCourse(response.data);
      } catch (error) {
        console.error("Error fetching course data", error);
      }
    };

    getSingleCourse();
  }, [courseId]);

  if (!singleCourse) return <div>Loading...</div>; 

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Course Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={singleCourse.imageUrl}
            alt={singleCourse.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Course Info */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <h1 className="text-3xl font-semibold text-gray-800">
            {singleCourse.title}
          </h1>
          <p className="text-gray-600 mt-2">{singleCourse.description}</p>

          <div className="flex items-center mt-4">
            <img
              src={singleCourse?.user.profileImg}
              alt={singleCourse?.user.username}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="text-lg font-medium text-gray-800">
                {singleCourse?.user.username}
              </p>
              <p className="text-sm text-gray-500">
                {singleCourse?.user.country}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-xl font-semibold text-gray-800">
              ${singleCourse.price?.currentPrice}
            </span>
            <span className="text-sm line-through text-gray-500 ml-2">
              ${singleCourse?.price.originalPrice}
            </span>
          </div>

          <div className="flex flex-wrap mt-4 gap-2">
            {singleCourse.category.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <span className="text-lg font-medium text-gray-800">Level:</span>
            <span className="text-sm text-gray-500 ml-2">
              {singleCourse.level[0]}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-lg font-medium text-gray-800">Rating:</span>
            <div className="flex items-center">
              <span className="text-yellow-500">
                &#9733; {singleCourse.rating}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
