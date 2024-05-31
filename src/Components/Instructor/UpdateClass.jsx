import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
    const loader = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const classname = form.name.value;
        const img = form.photo.value;
        const price = form.price.value;
        const seat = form.seat.value;
        const updateClass = {classname, img,  price, seat} ;


        fetch(`https://summer-camp-server-two-topaz.vercel.app/classes/${loader._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClass)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class info has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

       
    }

    return (
        <div>
        <div className='w-[100%]'>
           <form onSubmit={handleUpdate} className="card-body">
               <h4 className='text-2xl font-bold'>Update required information</h4>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Class Name</span>
                   </label>
                   <input type="text" name="name" placeholder="name of loader" defaultValue={loader.ClassName} className="input input-bordered" required />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Photo URL</span>
                   </label>
                   <input type="text" name="photo" placeholder="photo url" defaultValue={loader.Img} className="input input-bordered" />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Instructor Name</span>
                   </label>
                   <input type="text" name="instructorname" placeholder="seller name" value={loader.InstructorName} className="input input-bordered" required />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Instructor Email</span>
                   </label>
                   <input type="email" name="email" placeholder="email"  value={loader.Email}className="input input-bordered" required />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Price</span>
                   </label>
                   <input type="number" name="price" placeholder="price" defaultValue={loader.Price} className="input input-bordered" 
                   step="0.01" required />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Seats</span>
                   </label>
                   <input type="number" name="seat" placeholder="available quantity" defaultValue={loader.Seats}className="input input-bordered" required />
               </div>        
               <div className="form-control">
                   <div className="form-control mt-6">
                       <button className="btn bg-[#0d6efd]">Update</button>
                   </div>

               </div>

           </form>
       </div>
   </div>
    );
};

export default UpdateClass;