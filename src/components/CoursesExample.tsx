import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Course } from "../types/course.interface";
import { FaRegTrashCan } from "react-icons/fa6";
import {useSelector} from 'react-redux'
import { RootState } from "../features/store/store";


function CoursesExample() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const userId = useSelector((state: RootState) => state?.auth?.user?._id)


  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/courses/all-courses`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data: Course[] = await response.json();

      setCourses(data);
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore Our Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Course Image */}
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                {userId === course.user._id && <span className="text-red-400 cursor-pointer">
                  <FaRegTrashCan />
                </span>}
              </div>
              {/* Description */}
              <p className="text-gray-600 text-sm mb-3">
                {course.description.slice(0, 80)}...
              </p>
              {/* Author */}
              <div className="flex items-center mb-3">
                <img
                  src={course.user.profileImg}
                  alt={course.user.username}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {course.user.username}
                  </p>
                  <p className="text-xs text-gray-500">{course.user.country}</p>
                </div>
              </div>
              {/* Price */}
              <div className="mb-3">
                <span className="text-xl font-semibold text-green-600">
                  ${course.price.currentPrice}
                </span>{" "}
                <span className="text-sm line-through text-gray-500">
                  ${course.price.originalPrice}
                </span>
              </div>
              {/* Rating */}
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">&#9733;</span>
                <span className="ml-2 text-gray-800">{course.rating}</span>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Link */}
            <Link
              to={`/courses/${course._id}`}
              className="block bg-blue-600 text-white text-center py-2 font-semibold hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesExample;
