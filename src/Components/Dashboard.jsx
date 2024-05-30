
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaMoneyBill, FaUser,  FaBook  } from "react-icons/fa";

const Dashboard = () => {
    return (
        // <div>
        //     <div className="drawer mx-14">
        //         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content">
        //             {/* Page content here */}
        //             <label htmlFor="my-drawer" className="btn bg-[#fdda9b] drawer-button"><RxHamburgerMenu /></label>
        //         </div>
        //         <div className="drawer-side">
        //             <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        //             <ul className="menu p-4 w-80 min-h-full bg-[#fdda9b] text-white font-bold ">
        //                 {/* Sidebar content here */}
        //                 <li><a>User Home</a></li>
        //                 <li><Link to="/dashboard/mycart">My Cart</Link></li>
        //                 <li><a>Payment History</a></li>
        //                 <li><a>Home</a></li>
        //                 <li><a>Courses</a></li>
        //                 <li><a>Contact</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>

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
                            <li className="text-md font-bold"><Link to="/"><FaHome className="text-lg"/> User Home</Link></li>
                            <li><Link to="cart"><FaShoppingCart className="text-lg" /> Cart</Link></li>
                            <li><Link to=""  ><FaMoneyBill className="text-lg" />Payment History</Link></li>
                            <li><Link to="addclass"><FaBook className="text-lg" /> Add Class</Link></li>
                            <li><Link to="myclass"><FaBook className="text-lg" /> My Classes</Link></li>
                            <li><Link to="allclass"><FaBook className="text-lg" /> All Classes</Link></li>
                            <li><Link to="manageusers"><FaUser className="text-lg"/>   Manage Users</Link></li>
                            {/* <li><a>Home</a></li>
                            <li><a>Courses</a></li>
                            <li><a>Contact</a></li> */}
                        </ul>

                    </div>
                </div>
            </div>

            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;