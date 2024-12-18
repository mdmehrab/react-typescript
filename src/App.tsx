import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import CourseDetails from "./components/CourseDetails";
import UserTable from "./components/UserTable";
import CreateCorse from "./components/CreateCorse";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import { useSelector } from "react-redux";
import { RootState } from "./features/store/store";
import SetPassword from "./components/SetPassword";

function App() {
  const role = useSelector((state: RootState) => state.auth.user?.roles);

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
        {/* Conditionally render UserTable based on role */}
        <Route
          path="/approved/user-table"
          element={
            role === "ADMIN" ? (
              <UserTable />
            ) : (
              <p>Only admin can see this page!</p>
            )
          }
        />

        <Route path="/create-course" element={<CreateCorse />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password" element={<SetPassword />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
