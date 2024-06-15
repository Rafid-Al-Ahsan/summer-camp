/* eslint-disable no-dupe-keys */
import { useContext } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {

    const { user } = useContext(AuthContext);

    const handleAddClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const ClassName = form.name.value;
        const Img = form.photo.value;
        const InstructorName = form.instructorname.value;
        const Email = form.instructoremail.value;
        const Seats = parseInt(form.availableseats.value);
        const Price = parseFloat(form.price.value);
        const TotalStudent = 0;
        const Status = "Pending";
        const Feedback = "";
        // console.log(photo, toyname, sellername, selleremail, subcategory, price, quantity, rating, description);
        const course = { ClassName, Img, InstructorName, Email, Seats, Price, TotalStudent, Status, Feedback};
        console.log(course);

        fetch('https://summer-camp-server-two-topaz.vercel.app/classes', {    
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course)
        })
            .then(response => { response.json() })
            .then(data => console.log(data))
        form.reset();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Added ",
            showConfirmButton: false,
            timer: 1500
        });


    }

    return (
        <div>

            <div className='w-[100%]'>
                <form onSubmit={handleAddClass} className="card-body">
                    <h4 className='text-2xl font-bold'>Please Provide Class Information</h4>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Course Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name="instructorname" placeholder="name" value={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" name="instructoremail" placeholder="email" value={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="price" className="input input-bordered"
                            step="0.01" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" name="availableseats" placeholder="available seats" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <div className="form-control mt-6">
                            <button className="btn bg-primary1">Add Class</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;