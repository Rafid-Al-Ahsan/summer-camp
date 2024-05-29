/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { getAuth, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'; //for highlighting active route
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import logo from "../../../public/logo2.jpg"

const Header = () => {

    const { user } = useContext(AuthContext);
    const auth = getAuth(app);
    const location = useLocation();
    const [navbarStyle, setNavbarStyle] = useState('bg-transparent');

    const [course] = useCart();

    const handleLogout = () => {
        signOut(auth)
            .then(() => { })
            .catch(error => { });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarStyle('bg-gray-800 bg-opacity-90');
            } else {
                setNavbarStyle('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`fixed w-full z-10 transition duration-300 ease-in-out ${navbarStyle}`}>
                <div className="navbar text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            {/* Small device responsive links */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/popularclass" className="active">Popular Classes</Link></li>
                                <li><Link to="/dashboard" className="active">Dashboard</Link></li>
                                <li>
                                <Link to="">
                                    <button className="btn">
                                        <FaShoppingCart className="mr-2"></FaShoppingCart>
                                        <div className="badge badge-secondary">{course.length}</div>
                                    </button>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        {/* Logo title */}
                        <img src={logo} alt="" className='w-16 h-16' />
                        <p className="text-lg font-bold p-2 text-[#fff] ">Melody Academy</p>
                    </div>
                    {/* Large device responsive links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className='font-bold text-lg active'><Link to="/" className="my-link">Home</Link></li>
                            <li className='font-bold text-lg'><Link to="/popularclass">Popular Classes</Link></li>
                            <li className='font-bold text-lg'><Link to="/dashboard">Dashboard</Link></li>
                            <li>
                                <Link to="/cart">
                                    <button className="btn">
                                        <FaShoppingCart className="mr-2"></FaShoppingCart>
                                        <div className="badge bg-secondary">{course.length}</div>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* displays user image if logged in */}
                        {user && <img
                            src={user.photoURL}
                            alt="Profile Photo"
                            className='mx-5 rounded-full'
                            style={{ width: "3rem", height: "3rem" }}
                            title={user.displayName}
                        />}
                        {/* Login and Logout button */}
                        {user ? <button onClick={handleLogout} className="btn bg-primary1 px-8 rounded-full font-bold text-lg mr-10 text-white">Logout</button> : <Link to='login' className="btn bg-primary1 px-8 rounded-full font-bold text-lg mr-10 text-white">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
