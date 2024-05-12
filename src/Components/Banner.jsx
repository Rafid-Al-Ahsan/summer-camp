import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {

    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2023/03/31/18/44/piano-7890735_1280.jpg" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1586351011807-b79c8ef43057?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1596791665572-29c7082429e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;