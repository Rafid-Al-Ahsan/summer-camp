import { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Testimonial = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('Testimonial.json')
            .then(response => response.json())
            .then(data => setContent(data))
    }, [])

    const design = (
        <div className="absolute flex items-end w-full left-0 h-[38rem] bg-[#282727] opacity-50">
        </div>
    );

    return (
        <div>
            <div className='my-12 bg-cover bg-center h-[38rem] ' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                {design}
                <div className='absolute text-center w-full italic text-[#f3efef] pt-16'>
                    <p className='text-3xl font-bold text-[#fdda9b]'>testimonials</p>
                    <p className='text-6xl font-bold'>What Our Students Say</p>
                </div>
                <Slider autoplay={2000} infinite={true} previousButton={false} nextButton={false}>
                    {content.map(index => (
                        <div key={index.Id}>
                            <div className="absolute top-[12rem] w-full text-center text-white">
                                <img src={index.Img} className="mx-auto w-32 h-32 rounded-full" alt="" />
                                <p className='mt-4 text-[#fdda9b]'>{index.Name}</p>
                                <p>{index.Comment}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
