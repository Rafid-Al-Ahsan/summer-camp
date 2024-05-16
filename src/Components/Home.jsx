import Banner from "./Banner";
import PopularClass from "./PopularClass";
import PopularInstructors from "./PopularInstructors";
import Testimonial from "./Testimonial";

const Home= () => {
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