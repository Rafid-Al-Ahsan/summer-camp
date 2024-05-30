import { useEffect, useState } from "react";


const InstructorPage = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/users')
        .then(response => response.json())
        .then(data => {
            setInstructors(data);
        })
    })
    return (
        
        <div className="flex flex-col items-center justify-center pt-24 bg-[#f9efe2]">
            <p className="text-4xl mb-6 text-[#2b417e] font-bold">Meet Our Expert Instructors</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                {instructors.map(instructor => (
                    instructor.role === "Instructor" &&
                    <div key={instructor._id} className="p-4 rounded flex flex-col items-center">
                        <img src={instructor.img} alt={instructor.name} className="w-44 h-44 rounded-full mb-3" />
                        <p className="text-xl font-bold text-[#2b417e]">{instructor.name}</p>
                        <p className="text-sm text-[#cc3e39] font-semibold">{instructor.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorPage;