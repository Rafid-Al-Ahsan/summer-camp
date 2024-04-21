import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Main from "../Main";
import Registration from "../Registration";

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
        path: "Registration",
        element: <Registration></Registration>,
      },  
    ]
  },
]);

export default router;