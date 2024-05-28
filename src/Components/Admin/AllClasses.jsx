/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllClasses = () => {
    const loader = useLoaderData();
    const [feedback, setFeedback] = useState('');
    const [selectedCourseId, setSelectedCourseId] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('my_modal_1').close();
       

        console.log(feedback);
        console.log("CourseId:", selectedCourseId);

        const adminFeedback = {feedback} ;

        fetch(`http://localhost:5001/classes/${selectedCourseId}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminFeedback)
        })


        
    };

    const openModal = (courseId) => {
        setSelectedCourseId(courseId);
        document.getElementById('my_modal_1').showModal();
    };

    return (
        <div>
            <p className='text-center my-5 text-xl font-bold'>All Classes</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Name</th>
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
                        {loader.map((course, index) => (
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
                                <td>{course.InstructorName}</td>
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
                                    <button className="btn" onClick={() => openModal(course._id)}>Feedback</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Feedback</h3>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={feedback}
                            onChange={handleFeedbackChange}
                            placeholder="Enter your feedback"
                            className="textarea textarea-bordered w-full"
                            rows="5"
                        ></textarea>
                        <div className="modal-action">
                            <button type="submit" className="btn bg-[#0d6efd] text-white">Submit</button>
                            <button type="button" className="btn bg-[#dc3545] text-white" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AllClasses;

