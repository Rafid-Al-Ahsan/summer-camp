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
      }
    ]  
  },

]);

export default router;