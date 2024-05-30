import { useEffect, useState } from "react";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/users/instructor')
            .then(response => response.json())
            .then(data => {
                setInstructors(data);
            });
    }, []); // Add an empty dependency array to run the effect only once after the component mounts

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold mb-4 text-[#cc3e39]">Our Team</p>
            <p className="text-4xl mb-6 text-[#2b417e] font-bold">Meet Our Popular Instructors</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
                {instructors.map(instructor => (
                    <div key={instructor._id} className=" p-4 rounded flex flex-col items-center">
                        <img src={instructor.img} alt={instructor.name} className="w-36 h-36 rounded-full mb-3" />
                        <p className="text-xl font-bold text-[#2b417e]">{instructor.name}</p>
                        <p className="text-sm text-[#cc3e39] font-semibold">{instructor.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructors;
