import CoursesExample from "../components/CoursesExample";
import HeroBanner from "../components/HeroBanner";
import PartnersBanner from "../components/PartnersBanner";
import LearningFocused from "../components/LearningFocused";
import AccelerateGrowth from "../components/AccelerateGrowth";
import UserTable from "../components/UserTable";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <PartnersBanner />
      <CoursesExample />
      <LearningFocused />
      <AccelerateGrowth />
      <UserTable />
    </>
  );
};

export default Home;
