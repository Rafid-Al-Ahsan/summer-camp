
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {

    // const loader = useLoaderData();
    const [users, setUsers] = useState([]);

   
        fetch(`http://localhost:5001/users`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            }
        })
        .then(response => response.json())
        .then(data => setUsers(data))
        

    const makeInstructor = (id) => {   
        const value = "Instructor";
        const role = {value}; 

        fetch(`http://localhost:5001/users/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(role)
        }).then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User role changed to instructor",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch((error) => {
            console.log(error);
        })
    };  

        const makeAdmin = (id) => {   
            const value = "Admin";
            const role = {value}; 

            fetch(`http://localhost:5001/users/${id}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(role)
            }).then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User role changed to Admin",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch((error) => {
                console.log(error);
            })
        };  
   

    return (
        <div>
            <p className='text-center my-5 text-xl font-bold'>All Users</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

                                
                                {/* Approve button with conditional rendering */}
                                <td>
                                    {user.role === "Instructor" || user.role === "Admin"? 
                                    <button className="btn bg-[#0d6efd] text-white btm-md" disabled>Make Instructor</button> : 
                                    <button className="btn bg-[#0d6efd] text-white btm-md" onClick={() => makeInstructor(user._id)}>Make Instructor</button>}
                                </td>

                                {/* Deny button with conditional rendering */}
                                <td>
                                    {user.role === "Instructor" || user.role === "Admin"?
                                    <button className="btn bg-[#dc3545] text-white btn-md" disabled>Make Admin</button> : 
                                    <button className="btn bg-[#dc3545] text-white btn-md" onClick={() => makeAdmin(user._id)}>Make Admin</button>
                                    }
                                </td>

                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>  
    );
};

export default ManageUsers;