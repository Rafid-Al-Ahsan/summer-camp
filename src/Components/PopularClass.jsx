/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const PopularClass = () => {
    const [musicClasses, setMusicClasses] = useState([]);

      // TODO: If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if: // Available seats are 0 Logged in as admin/instructor

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5001/classes')
            .then(response => response.json())
            .then(data => setMusicClasses(data))
    }, []); // Add an empty dependency array to run the effect only once after the component mounts


    const handleAddToCart = item => {
        const orderedClass = { classItemId: item._id, ClassName: item.ClassName, InstructorName: item.InstructorName, Email: item.Email, Price: item.Price, UserEmail: user.email };

        if (user && user.email) {
            fetch('http://localhost:5001/carts', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(orderedClass)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your class has been added to the cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } 
        else {
            Swal.fire({
                title: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    // Sort the classes by TotalStudent in descending order
    const sortedClasses = musicClasses.sort((a, b) => b.TotalStudent - a.TotalStudent);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold my-5 italic">Popular Classes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {sortedClasses.slice(0, 6).map(classItem => (
                    classItem.Status === 'Approved' && <Card key={classItem._id} classItem={classItem} handleAddToCart={handleAddToCart}>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PopularClass;

function Card({ classItem, handleAddToCart }) {
    return (
        <div className="card w-96 bg-base-100">
            <figure><img className="w-96 h-60" src={classItem.Img} alt="Class" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-lg">{classItem.ClassName}</h2>
                <p><span className="text-[#d74949]">Instructor:</span> {classItem.InstructorName}</p>
                <p><span className="text-[#d74949]">Email:</span> {classItem.Email}</p>
                <p><span className="text-[#d74949]">Seats:</span> {classItem.Seats}</p>
                <p><span className="text-[#d74949]">Students:</span> {classItem.TotalStudent}</p>
                <p>$ {classItem.Price} (only once) </p>
                {classItem.Seats > classItem.TotalStudent ? <button onClick={() => handleAddToCart(classItem)} className="btn bg-[#b6c278]">Add To Cart</button> :
                    <button onClick={() => handleAddToCart(classItem)} className="btn bg-[#b6c278]" disabled>Add To Cart</button>
                }
            </div>
        </div>
    )
}