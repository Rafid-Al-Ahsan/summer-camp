// /* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile } from "firebase/auth";
// import app from './firebase/firebase.config';
// import axios from 'axios';

// const Registration = () => {
//     const [success, setSuccess] = useState(null);
//     const [error, setError] = useState(null);

//     const auth = getAuth(app);

//     const handleRegister = (event) => {
//         setSuccess('');
//         setError('');
//         event.preventDefault();
//         const form = event.target;
//         const photo = form.photo.value;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((result) => {
//                 const loggedInUser = result.user;
//                 const role = "Student";

//                 // Update user profile first
//                 updateProfile(loggedInUser, { displayName: name, photoURL: photo })
//                     .then(() => {   
//                         // Now the profile is updated, save the user with the correct name
//                         const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: role, img: photo };
                        
//                         // Method1: Regular way
//                         // fetch('https://summer-camp-server-two-topaz.vercel.app/users', {
//                         //     method: 'POST',
//                         //     headers: {
//                         //         'content-type': 'application/json'
//                         //     },
//                         //     body: JSON.stringify(saveUser)
//                         // })
//                         // .then(response => response.json())

//                         // Method2: Using axios in post function, cause post function in axios is easy
//                         axios.post('https://summer-camp-server-two-topaz.vercel.app/users', saveUser)
//                         .then(() => {
//                             setSuccess('User created successfully! Go to Login Page'); // Display account created message
//                             event.target.reset(); // Reset the form after successful account creation

//                             // Logout after account created    
//                             signOut(auth)
//                                 .then()
//                                 .catch();
//                         });
//                     })
//                     .catch((error) => {
//                         setError(error.message);
//                     });
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     }

//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-14">
//                 <h3 className="text-3xl font-semibold text-center mt-5 ">Please Register</h3>
//                 <form onSubmit={handleRegister} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input type="text" name="name" placeholder="name" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email address</span>
//                         </label>
//                         <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Register</button>
//                         </div>
//                         <label className="label my-0">
//                             <p>Already have an account? <Link to="/login" className="text-[#1d28ba]">Login</Link><br /></p>
//                         </label>

//                         <label className="label my-0 text-center">
//                             <p className='text-[#30bb45]'>{success}</p>
//                         </label>
//                         <label className="label my-0 text-center">
//                             <p className='text-[#bb3030]'>{error}</p>
//                         </label>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Registration;

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile } from "firebase/auth";
import app from './firebase/firebase.config';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth(app);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { photo, name, email, password } = data;
        setSuccess('');
        setError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const loggedInUser = result.user;
                const role = "Student";

                // Update user profile first
                updateProfile(loggedInUser, { displayName: name, photoURL: photo })
                    .then(() => {   
                        // Now the profile is updated, save the user with the correct name
                        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: role, img: photo };
                        
                        axios.post('https://summer-camp-server-two-topaz.vercel.app/users', saveUser)
                        .then(() => {
                            setSuccess('User created successfully! Go to Login Page'); // Display account created message
                            reset(); // Clear the form fields
                            signOut(auth)
                                .then()
                                .catch();
                        });
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-14">
                <h3 className="text-3xl font-semibold text-center mt-5">Please Register</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="photo url"
                            className="input input-bordered"
                            {...register('photo')}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label my-0">
                            <p>Already have an account? <Link to="/login" className="text-[#1d28ba]">Login</Link><br /></p>
                        </label>

                        <label className="label my-0 text-center">
                            <p className='text-[#30bb45]'>{success}</p>
                        </label>
                        <label className="label my-0 text-center">
                            <p className='text-[#bb3030]'>{error}</p>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;

