import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main";
import Home from "../Home"
import Login from "../Login";
import Registration from "../Registration";
import ClassesPage from "../ClassesPage";
import InstructorPage from "../InstructorPage";
import Notfound from "../Notfound";
import PrivateRouter from "./PrivateRoute";
import Dashboard from "../Dashboard";
import MyCart from "../MyCart";
import UpdateClass from "../instructor/UpdateClass";
import AddClass from "../instructor/AddClass";
import MyClasses from "../instructor/MyClasses";
import AllClasses from "../Admin/AllClasses";
import ManageUsers from "../Admin/ManageUsers";
import Payment from "../payment/Payment";
import Enrolled from "../Enrolled";
import PaymentHistory from "../PaymentHistory";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/classespage",
        element: <ClassesPage></ClassesPage>
      },
      {
        path: "/instructorpage",
        element: <InstructorPage></InstructorPage>
      },
      {
        path: "/enrolled",
        element: <PrivateRouter><Enrolled></Enrolled></PrivateRouter>
      },

    ]
  },
  {
    path: "dashboard",
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
        path: "cart",
        element: <MyCart></MyCart>
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>
      },
      {
        path: "updateclass/:id",
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`https://summer-camp-server-two-topaz.vercel.app/classes/${params.id}`)
      },
      {
        path: "myclass",
        element: <MyClasses></MyClasses>
      },
      {
        path: "allclass",
        element: <AllClasses></AllClasses>,
        loader: () => fetch('https://summer-camp-server-two-topaz.vercel.app/classes')
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>
        // loader: ({ params }) => fetch('https://summer-camp-server-two-topaz.vercel.app/users')
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  },
  {
    path: "*",
    element: <Notfound></Notfound>
  },
]);

export default router;