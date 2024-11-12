import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { skillsList } from "../data";


function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<any | null>(null);

  useEffect(() => {
    const category = skillsList.find((category) =>
      category?.cardItems?.some((item) => item.id.toString() === courseId)
    );

    if (category) {
      const selectedCourse = category?.cardItems?.find(
        (item) => item.id.toString() === courseId
      );
      setCourse(selectedCourse);
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={course.imgSrc}
          alt={course.title}
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-lg text-gray-500 mt-2">{course.subTitle}</p>
          <p className="mt-4 text-sm text-gray-700">Author: {course.author}</p>
          <div className="flex items-center mt-2">
            <p className="text-yellow-500 font-semibold">{course.rating}</p>
            <span className="ml-2 text-gray-500 text-sm">
              {course.ratingCounter}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-xl font-semibold text-gray-800">
              {course.currentPrice}
            </span>
            <span className="line-through text-gray-500">
              {course.beforePrice}
            </span>
          </div>
          {course.mostSell && (
            <span className="inline-block mt-2 text-sm font-medium text-white bg-yellow-500 rounded-full px-3 py-1">
              {course.mostSell}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
