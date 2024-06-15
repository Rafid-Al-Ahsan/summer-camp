/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";

const Enrolled = () => {
    const { user } = useContext(AuthContext);
    const [enrolledClasses, setEnrolledClasses] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://summer-camp-server-two-topaz.vercel.app/payments/${user?.email}`)
                .then(response => response.json())
                .then(data => {
                    // Flatten the nested arrays and create individual entries for each class
                    const classes = data.flatMap(datas => 
                        datas.itemNames.map((itemName, index) => ({
                            _id: `${datas._id}-${index}`, // Create a unique ID for each class
                            ClassName: itemName,
                            InstructorName: datas.instructorNames[index],
                            Email: datas.instructorEmail[index],
                            Img: datas.Picture[index],
                        }))
                    );
                    setEnrolledClasses(classes);
                });
        }
    }, [user]);

    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-20 bg-[#f9efe2]">
                <p className="text-3xl font-bold my-5 italic">All Classes Enrolled By {user?.displayName}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                    {enrolledClasses.map(classItem => (
                        <Card key={classItem._id} classItem={classItem}>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Enrolled;

function Card({ classItem }) {
    return (
        <div className="card w-96 bg-base-100 mb-5">
            <figure><img className="w-96 h-60" src={classItem.Img} alt="Class" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-lg">{classItem.ClassName}</h2>
                <p><span className="text-[#d74949]">Instructor:</span> {classItem.InstructorName}</p>
                <p><span className="text-[#d74949]">Email:</span> {classItem.Email}</p>
            </div>
        </div>
    );
}
