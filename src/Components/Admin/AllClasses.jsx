/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";

const AllClasses = () => {

    const loader = useLoaderData();

    return (
        <div>
            <p className='text-center my-5 text-xl font-bold'>All Classes</p>
            {/* <div className='w-[90%] grid sm:grid-cols-1 md:grid-cols-2 m-auto'>
                {loader.map(course => <Card key={course._id} course={course}></Card>)}
            </div> */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coursse Name</th>
                            <th>Instructor Name</th>
                            <th>No of Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {loader.map((course, index) => <tr key={course._id}>

                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.Img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{course.ClassName}</div>
                                        <div className="text-sm opacity-50">{course.Email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {course.InstructorName}
                            </td>
                            <td>{course.Seats}</td>
                            <td>${course.Price}</td>
                            <td className="text-[#ffc107]">{course.Status}</td>
                            <th>
                                <button className="btn bg-[#0d6efd] text-white btm-md">Approve</button>
                            </th>
                            <th>
                                <button className="btn bg-[#dc3545] text-white btn-md">Deny</button>
                            </th>
                            <th>
                                <button className="btn btn-error btn-md">Feedback</button>
                            </th>
                        </tr>)}


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllClasses;


