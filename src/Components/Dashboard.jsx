
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaMoneyBill, FaUser,  FaBook, FaSearch } from "react-icons/fa";
// import { IoIosContacts } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";

const Dashboard = () => {

    const {user} = useContext(AuthContext);
    const [userRoll, setUserRoll] = useState('');


    fetch(`https://summer-camp-server-two-topaz.vercel.app/users/${user.email}`)
    .then(response => response.json())
    .then(data => setUserRoll(data[0]))

    return (

        <div className="flex ">

            <div>
                <div className="drawer lg:drawer-open h-full">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li className="text-lg font-bold"><Link to="/dashboard"><FaHome className="text-lg"/>Dashboard</Link></li>
                            {userRoll === 'Student' && <li className="text-lg font-bold"><Link to="cart"><FaShoppingCart className="text-lg" /> Cart</Link></li>}
                            {userRoll === 'Student' && <li className="text-lg font-bold"><Link to="/dashboard/paymenthistory"  ><FaMoneyBill className="text-lg" />Payment History</Link></li>}
                            {userRoll === 'Instructor' && <li className="text-lg font-bold"><Link to="addclass"><FaBook className=" text-lg" /> Add Class</Link></li>}
                            {userRoll === 'Instructor' && <li className="text-lg font-bold"><Link to="myclass"><FaBook className="text-lg" /> My Classes</Link></li>}
                            {userRoll === 'Admin' && <li className="text-lg font-bold"><Link to="allclass"><FaBook className="text-lg" /> All Classes</Link></li>}
                            {userRoll === 'Admin' && <li className="text-lg font-bold"><Link to="manageusers"><FaUser className="text-lg"/>   Manage Users</Link></li>}
                            <div className="divider"></div>
                            <li className="text-lg font-bold"><Link to="/"><FaHome className="text-lg"/> Home</Link></li>
                            <li className="text-lg font-bold"><Link to="/classespage"><FaSearch className="text-lg"/> Popular Classes</Link></li>
                            {/* <li className="text-lg font-bold"><Link to="/"><IoIosContacts /> Contact</Link></li> */}
                            {/* <li><a>Home</a></li>
                            <li><a>Courses</a></li>
                            <li><a>Contact</a></li> */}
                        </ul>

                    </div>
                </div>
            </div>

            <div className="w-full">
                <p className="mt-5 ml-10 text-lg ">Hi, <span className="text-primary1"> {user?.displayName}</span>, Welcome to the {userRoll} Dashboard</p>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;