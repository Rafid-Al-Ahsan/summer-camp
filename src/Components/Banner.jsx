const Banner = () => {
    const design = (
        <div className="absolute flex items-end w-full left-0 h-[48rem] bg-[#282727] opacity-50">
        </div>
    );

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    {design}
                    <img className="h-[48rem] w-full" src="https://images.unsplash.com/photo-1596791665572-29c7082429e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-46 italic">Where your <span className="text-primary1">musical journey begins</span> . Learn from the best instructors and enhance your musical skills</h1>
                       
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {design}
                    <img className="h-[48rem] w-full" src="https://images.unsplash.com/photo-1586351011807-b79c8ef43057?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-46 italic">Master a Variety of Instruments: From <span className="text-primary1">piano to guitar</span>,<span className="text-primary1"> drums to violin </span>, we offer courses for all levels and ages.</h1>
                        
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative h-[48rem] w-full">
                    {design}
                    <img src="https://plus.unsplash.com/premium_photo-1681396935966-eeac362e8340?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="Slide 3" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-46 italic">Personalized Lessons: Tailored to fit your <span className="text-primary1">unique learning style </span>and musical interests</h1>
                       
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

