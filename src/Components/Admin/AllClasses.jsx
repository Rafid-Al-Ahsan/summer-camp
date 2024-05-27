/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";

const AllClasses = () => {

    const loader = useLoaderData();

    return (
        <div>
             <p className='text-center my-5 text-xl font-bold'>All Classes</p>
            <div className='w-[90%] grid sm:grid-cols-1 md:grid-cols-2 m-auto'>
                {loader.map(course => <Card key={course._id} course={course}></Card>)}
            </div>

        </div>
    );
};

export default AllClasses;


function Card({ course }) {
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={course.Img} alt="Album" className='w-[80%] h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold italic text-2xl">{course.ClassName}</h2>
                <h4 className='flex text-lg text-[#a3174f]'>Price: ${course.Price}</h4>
                <h4 className='flex text-base text-[#fff]'>Instructor Name : {course.Instructorname}</h4>
                <h4 className='flex text-base text-[#fff]'>Instructor Email: {course.Email}</h4>
                <h4 className='flex text-base text-[#fff]'>Subcategory: {course.Seats}</h4>
                <p className='text-[#f4567e] italic'>{course.Price}</p>
              
            </div>
        </div>

    )
}