/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Main from "../Main";
import Registration from "../Registration";
import PopularClass from "../PopularClass";
import Dashboard from "../Dashboard";
import MyCart from "../MyCart";
import AddClass from "../Instructor/AddClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },  
      {
        path: "/login",
        element: <Login></Login>,
      },  
      { 
        path: "registration",
        element: <Registration></Registration>,
      },  
      { 
        path: "popularclass",
        element: <PopularClass></PopularClass>,
        loader: ({ params }) => fetch(`http://localhost:5001/classes`)
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <MyCart></MyCart>
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>
      }
    ]  
  },

]);

export default router;