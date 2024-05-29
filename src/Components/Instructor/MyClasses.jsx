/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(user);

    // remember to set the dependency of useEffect or else after reload the  data won't display
    useEffect(() => {
        fetchCourses();
    }, [user]);

    const fetchCourses = async () => {
        const response = await fetch(`http://localhost:5001/classes/email/${user.email}`);
        const data = await response.json();
        setCourses(data);
        setLoading(false);
    };

    if (loading) return <div>Loading...</div>


    return (
        <div>
            <p className='text-center my-5 text-xl font-bold'>Class Taken By: {user.displayName}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>No of Seats</th>
                            <th>Total Students</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={course._id}>
                                <th>{index + 1}</th>
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
                                <td>{course.Seats}</td>
                                <td>{course.TotalStudent}</td>
                                <td>${course.Price}</td>
                                {course.Status === "Pending" && <td className="text-[#ffc107]">{course.Status}</td>}
                                {course.Status === "Approved" && <td className="text-[#198754]">{course.Status}</td>}
                                {course.Status === "Denied" && <td className="text-[#dc3545]">{course.Status}</td>}

                                <td>{course.Feedback}</td>
                                <th>
                                    <Link to={`/dashboard/updateclass/${course._id}`}><button className='bg-[#0d6efd] text-white h-10 px-8 mr-5 font-bold'>Update</button></Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;