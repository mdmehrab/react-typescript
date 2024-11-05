import CoursesExample from "../components/CoursesExample"
import HeroBanner from "../components/HeroBanner"
import PartnersBanner from "../components/PartnersBanner"

const Home = () => {
    return (
        <>
            <HeroBanner />
            <PartnersBanner/>
            <CoursesExample/>
        </>
    )
}

export default Home