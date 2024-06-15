/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';  //iconify icons
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config"
import { AuthContext } from './provider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    //for storing login related error msg
    const [error, setError] = useState();
    const { user } = useContext(AuthContext);

    const handleLogin = event => {

        //Collecting data from email & password field 
        setError(null);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
        
            .then(result => {

                // json web token(jwt)
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                fetch('https://summer-camp-server-two-topaz.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // setting token in localStroage, better to set it in http cookie
                    localStorage.setItem('user-access-token', data.token);
                })// end of (jwt)

                // replave true clears browser history of path
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleGoogleSignIn= () => {
        const googleProvider = new GoogleAuthProvider();
        const role = "Student";

        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: role, img: loggedInUser.
                photoURL};

                // json web token jwt
                const loggedUserEmail = {
                    email : loggedInUser.email
                }

                fetch('https://summer-camp-server-two-topaz.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUserEmail)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // setting token in localStroage, better to set it in http cookie
                    localStorage.setItem('user-access-token', data.token);
                })// end of (jwt)
                
                
                fetch('https://summer-camp-server-two-topaz.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(response => response.json())
                        .then(data => {})
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.message)
        })
    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className=' text-white-300 m-auto mt-5 font-bold text-lg'>Please Login</p>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label my-0">
                                <p>Do not have an account? <Link to="/registration" className="text-[#1d28ba]">Register</Link><br /></p>
                                <br></br>
                            </label>
                            <label className="label my-0">
                                <p className='text-center'>OR</p>
                            </label>

                            <label className="text-[#ff3232]">
                            {error}
                        </label>

                        </div>
                    </form>

                    <button onClick={handleGoogleSignIn} className='btn bg-white mb-5 text-black m-auto w-[85%]'><Icon icon="flat-color-icons:google" color="white" width="34" height="34" />  Login using Google</button>

                </div>

            </div>
        </div>
    );
};

export default Login;