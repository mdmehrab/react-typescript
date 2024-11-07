import { useState } from "react";

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
      <div className=" border-b border-gray-400">
        <ul
          className="flex flex-wrap text-base font-bold text-center text-gray-700"
          role="tablist"
        >
          <li className="" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "Web Development" ? "border-black" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("Web Development")}
            >
              Web Development
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === " IT Certifications" ? "border-black" : ""
              }`}
              type="button"
              onClick={() => setActiveTab(" IT Certifications")}
            >
              IT Certifications
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "Leadership" ? "border-black" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("Leadership")}
            >
              Leadership
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "Data Science" ? "border-black" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("Data Science")}
            >
              Data Science
            </button>
          </li>

          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "Communication" ? "border-black" : ""
              }`}
              type="button"
              onClick={() => setActiveTab("Communication")}
            >
              Communication
            </button>
          </li>

          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "Business Analyttics & intelligence"
                  ? "border-black"
                  : ""
              }`}
              type="button"
              onClick={() => setActiveTab("Business Analyttics & intelligence")}
            >
              Business Analyttics & intelligence
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "Web Development" ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-wrap gap-3">
            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">Web Development</span>
                <p className="text-gray-600">17.7M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">JavaScript</span>
                <p className="text-gray-600">13.3M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">React JS</span>
                <p className="text-gray-600">7M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">Anglur</span>
                <p className="text-gray-600">4M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">Java</span>
                <p className="text-gray-600">15.5M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">
                  Android Development
                </span>
                <p className="text-gray-600">8M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">IOS Development</span>
                <p className="text-gray-600">4M+Learners</p>
              </button>
            </li>

            <li className=" bg-gray-300 p-3 rounded-full">
              <button>
                <span className="font-bold text-black">CSS</span>
                <p className="text-gray-600">9M+Learners</p>
              </button>
            </li>
          </ul>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === " IT Certifications" ? "" : "hidden"
          }`}
        >
          <p>first</p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "Leadership" ? "" : "hidden"
          }`}
        >
          <p>first</p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "Data Science" ? "" : "hidden"
          }`}
        >
          <p>last</p>
        </div>

        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "Communication" ? "" : "hidden"
          }`}
        >
          second last
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "Business Analyttics & intelligence" ? "" : "hidden"
          }`}
        >
          {" "}
          third last
        </div>
      </div>
    </div>
  );
};

export default CoursesExample;
