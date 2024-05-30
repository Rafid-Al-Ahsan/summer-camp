/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

// TODO: 1. add animation 2. Arrange accrooding to students 3. add authentication 4. if students equal disable enrolll
const PopularClass = () => {
    const [musicClasses, setMusicClasses] = useState([]);

    // const loader = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:5001/classes')
        .then(response => response.json())
        .then(data => setMusicClasses(data))
    })

    const handleAddToCart = item => {
        // console.log(item);
        console.log(item.ClassName);
        const orderedClass = {classItemId: item._id, ClassName: item.ClassName, InstructorName: item.InstructorName, Email: item.Email, Price: item.Price, UserEmail: user.email} ; 

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
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    
                })
        }
        else{
            Swal.fire({
                title: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
        
    }

    // useEffect(() => {
    //     fetch('/Classes.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             // Sort the classes in descending order based on the number of students
    //             const sortedClasses = data.sort((a, b) => b.Student - a.Student);
    //             // Slice the sorted array to get the first six classes
    //             const firstSixClasses = sortedClasses.slice(0, 6);
    //             setMusicClasses(firstSixClasses);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        // <div className="flex flex-col items-center justify-center">
        //     <p>education</p>
        //     <p>Popular Classes</p>
        //     <div className="grid grid-cols-3 gap-14">
        //         {musicClasses.map(classItem => (
        //             <Card key={classItem.Id} classItem={classItem}>
        //                 {/* <h2>{classItem.Name}</h2>
        //             <p>Students: {classItem.Student}</p> */}
        //             </Card>
        //         ))}
        //     </div>
        // </div>

        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-bold my-5 italic">Popular Classes</p>
            <div className="grid grid-cols-3 gap-14">
                {musicClasses.map(classItem => (
                    <Card key={classItem._id} classItem={classItem} handleAddToCart={handleAddToCart}>
                        {/* <h2>{classItem.Name}</h2>
                <p>Students: {classItem.Student}</p> */}
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
            <figure><img  className="w-96 h-60" src={classItem.Img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-lg">{classItem.ClassName}</h2>
                <p><span className="text-[#d74949]">Instructor:</span> {classItem.InstructorName}</p>
                <p><span className="text-[#d74949]">Email:</span> {classItem.Email}</p>
                <p>$ {classItem.Price}/monthly </p>
                <button onClick={() => handleAddToCart(classItem)} className="btn bg-[#b6c278]">Add To Cart</button>

            </div>
        </div>


    )
}
