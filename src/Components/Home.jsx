import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstructors from "./PopularInstructors";
import Testimonial from "./Testimonial";
import ThemeToggle from "./ThemeToggle";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;