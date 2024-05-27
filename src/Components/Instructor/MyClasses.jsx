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
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Seats</th>
                                <th>Students</th>
                                <th>Status</th>
                                <th>Feedback from Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                           

                            {courses.map((course, index) => <tr key={course._id}>
                                <th>
                                    {index+1}
                                </th>
                                <td>{course.ClassName}</td>
                                <td>{course.InstructorName}</td>
                                <td>{course.Email}</td>
                                <td>${course.Price}</td>
                                <td>{course.Seats}</td>
                                <td>{course.TotalStudent}</td>
                                <td className='text-[#ffc107]'>{course.Status}</td>
                                <td>{course.Feedback}</td>
                                
                            </tr>

                            )}
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default MyClasses;