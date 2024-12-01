import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";
import UserTable from "./components/UserTable";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cookies from 'js-cookie'; // Import js-cookie for cookie management

function App() {

      // Check and log the cookie
      const accessToken = Cookies.get('access_token');
      console.log('Access Token:', accessToken); // Log the access token (you can now use it in your frontend)
  return (
    <>
      <div className="w-full">
        <Toolbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Conditionally render UserTable based on access_token */}
        <Route path="/approved/user-table" element={<UserTable />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
