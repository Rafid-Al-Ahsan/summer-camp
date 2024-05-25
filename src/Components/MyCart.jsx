
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {

    const [classes] = useCart();

    const handleDelete = async (id, name) => {

        const result = confirm(`Are you sure you want to delete this class ${name}`);


        if (result === true) {
            const response = await fetch(`http://localhost:5001/carts/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);

            if (data.deletedCount > 0) {

                Swal.fire("Class has been deleted from your wishlish!");
                
            }
        }
    };

    return (
        <div>
            <div>
                <div className="flex justify-evenly mb-8">
                    <h2 className="text-4xl">Items: {classes.length}</h2>
                    <h2 className="text-4xl">Total Price: </h2>
                    {classes.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                }

                </div>

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
                            </tr>
                        </thead>
                        <tbody>
                           

                            {classes.map((course, index) => <tr key={course._id}>
                                <th>
                                    {index+1}
                                </th>
                                <td>{course.ClassName}</td>
                                <td>{course.InstructorName}</td>
                                <td>{course.Email}</td>
                                <td>{course.Price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(course._id, course.ClassName)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;