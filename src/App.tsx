import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";
import LearningFocused from "./components/LearningFocused";

function App() {
  return (
    <>
      <div className="w-full">
        <Toolbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
      <Footer />

      <LearningFocused />
    </>
  );
}

export default App;
