import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";
import { useEffect, useState } from "react";
import Loader from "./common/Loader";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="w-full">
        <Toolbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/signup" element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
