/* eslint-disable no-undef */
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <div className="navbar bg-[#b9ebe6] text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            {/* Small device responsive links */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to="/" className="active">Home</NavLink></li>
                                <li><NavLink to="/alltoy" className="active">All Toys</NavLink></li>
                                {/* {user && <li><NavLink to="/mytoy" className="active">My Toys</NavLink></li>}
                                {user && <li><NavLink to="/addtoy" className="active">Add A Toy</NavLink></li>} */}
                                <li><NavLink to="/mytoy" className="active">My Toys</NavLink></li>
                                <li><NavLink to="/mytoy" className="active">My Toys</NavLink></li>
                                <li><NavLink to="/blog" className="active">Blog</NavLink></li>
                            </ul>
                        </div>
                        {/* Logo title */}
                        <img src='https://i.ibb.co/LNJ15zY/logo.png' alt="" className='w-16' />
                        <h1 className="text-3xl font-bold p-2 text-[#fff] bg-[#cb191f]"></h1>
                    </div>
                    {/* Large device responsive links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className='font-bold text-lg active'><NavLink to="/" className="my-link">Home</NavLink></li>
                            <li className='font-bold text-lg'><NavLink to="/alltoy" >All Toys</NavLink></li>
                            {/* {user && <li className='font-bold text-lg'><NavLink to="/mytoy">My Toys</NavLink></li>}
                            {user && <li className='font-bold text-lg'><NavLink to="/addtoy">Add A Toy</NavLink></li>} */}
                            <li className='font-bold text-lg'><NavLink to="/blog">Blog</NavLink></li>
                            <li className='font-bold text-lg'><NavLink to="/popularclass">Popular Classes</NavLink></li>
                            <li className='font-bold text-lg'><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        displays user image if logged in
                        {user && <img
                            src={user.photoURL}
                            alt="Profile Photo"
                            className='mx-5 rounded-full'
                            style={{ width: "3rem", height: "3rem" }}
                            title={user.displayName}
                        />}
                        {/* { Login and Logout button */}
                         {user ? <button onClick={handleLogout} className="btn bg-[#a3174f] px-8 rounded-full font-bold text-lg mr-10">Logout</button> : <Link to='login' className="btn bg-[#a3174f] px-8 rounded-full font-bold text-lg mr-10">Login</Link>} 
                        <button  className="btn bg-[#433a3e] px-8 rounded-full font-bold text-lg mr-10">Logout</button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;