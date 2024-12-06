import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    duration: "",
    category: [] as string[],
    level: [] as string[],
    price: {
      amount: "",
      originalPrice: "",
    },
    bestSeller: false,
    isPublished: false,
    rating: "",
    tags: [] as string[],
  });

  const navigate = useNavigate()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
  
    // Narrow type for checkbox inputs
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
  
    setFormData((prevData) => {
      // For nested price object
      if (name === "amount" || name === "originalPrice") {
        return {
          ...prevData,
          price: {
            ...prevData.price,
            [name]: value,
          },
        };
      }
  
      // For arrays like category, level, tags
      if (["category", "level", "tags"].includes(name)) {
        return {
          ...prevData,
          [name]: value.split(",").map((item) => item.trim()),
        };
      }
  
      // For checkbox inputs
      if (type === "checkbox") {
        return { ...prevData, [name]: checked };
      }
  
      // For all other inputs
      return { ...prevData, [name]: value };
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validatedData = {
      ...formData,
      duration: Number(formData.duration),
      rating: Number(formData.rating),
      price: {
        currentPrice: Number(formData.price.amount), // Ensure it's a number
        originalPrice: Number(formData.price.originalPrice),
      },
    };
    

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/courses/create`,
        validatedData,
        { withCredentials: true }
      );

      if (res?.data) {
        alert("Course created successfully!");
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          duration: "",
          category: [] as string[],
          level: [] as string[],
          price: { amount: "", originalPrice: "" },
          bestSeller: false,
          isPublished: false,
          rating: "",
          tags: [] as string[],
        });
        navigate('/')
      } else {
        alert("Failed to create the course. Please try again.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Create a Course
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter course description"
            rows={4}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration (in minutes)
          </label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter course duration"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category.join(", ")}
            onChange={handleChange}
            placeholder="Enter course category (comma-separated)"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Level
          </label>
          <input
            type="text"
            name="level"
            value={formData.level.join(", ")}
            onChange={handleChange}
            placeholder="Enter course levels (comma-separated)"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Price ($)
          </label>
          <input
            type="number"
            name="amount"
            value={formData.price.amount}
            onChange={handleChange}
            placeholder="Enter current price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Original Price ($)
          </label>
          <input
            type="number"
            name="originalPrice"
            value={formData.price.originalPrice}
            onChange={handleChange}
            placeholder="Enter original price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Bestseller */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="bestSeller"
            checked={formData.bestSeller}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Mark as Bestseller</span>
        </div>

        {/* Published */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="h-4 w-4 text-purple-600 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Publish this course</span>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating (0-5)
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter course rating"
            min="0"
            max="5"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags.join(", ")}
            onChange={handleChange}
            placeholder="Enter tags (comma-separated)"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
