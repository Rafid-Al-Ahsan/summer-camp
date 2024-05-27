/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, [courses]);

    const fetchCourses = async () => {
        const response = await fetch(`http://localhost:5001/classes/${user.email}`);
        const data = await response.json();
        setCourses(data);
    };
    return (
        <div>
            <p className='text-center my-5 text-xl font-bold'>Classes of: {user?.displayName}</p>
            <div className='flex w-[95%] m-auto'>
               
                <div className='w-[85%] grid sm:grid-cols-1 md:grid-cols-2 m-auto'>
                    {courses.map(course => <Card key={course._id} course={course}></Card>)}
                    
                </div>
            </div>
        </div>
    );
};

export default MyClasses;

function Card({ course }) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={course.Img} alt="Album" className='w-[80%] h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold italic text-2xl">{course.ClassName}</h2>
                <h4 className='flex text-lg text-[#a3174f]'>Price: ${course.Price}</h4>
                <h4 className='flex text-base text-[#fff]'>Subcategory: {course.TotalStudent}</h4>
                <p className='text-[#f4567e] italic'>{course.Seats}</p>
                
            </div>
        </div>
    )
}