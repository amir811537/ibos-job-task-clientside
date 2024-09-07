import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import AddProduct from "../Components/pages/AddProduct";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

import Checkout from "../Components/pages/checkout/Checkout";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: "/AddProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
          
            {
                path: "/login",
                element: <Login></Login>
            },
            {
path:'/checkout',
element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
            
        ]
    },
    {
        path:'auth/register',
        element:<Register></Register>,
    
    },
    {
        path:'auth/login',
        element:<Login></Login>,
    
    },
    {
      
           
            
                path: "AddProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
           
         
            // {
            //     path:'updateproduct/:id',
            //     element:<PrivateRoute><Updateproduct></Updateproduct></PrivateRoute>,
            //     loader:({params})=>fetch(`https://ibos-serverside.vercel.app/productsbyid/${params.id}`)
            // },
          
            
    
]);
export default router;