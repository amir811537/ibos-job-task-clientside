import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import AddProduct from "../Components/pages/AddProduct";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/pages/ErrorPage";
import Updateproduct from "../Components/pages/Updateproduct";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Layouts/Profile";
import UpdateProfileInfo from "../Layouts/UpdateProfileInfo";
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
element:<Checkout></Checkout>
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
                element: <AddProduct></AddProduct>
            },
           
         
            {
                path:'updateproduct/:id',
                element:<PrivateRoute><Updateproduct></Updateproduct></PrivateRoute>,
                loader:({params})=>fetch(`https://electronics-bazar-server.vercel.app/productsbyid/${params.id}`)
            },
            {
                path:'profile',
                element:<Profile></Profile>
            },
            {
                path:'updateprofileInfo/:id',
                element:<UpdateProfileInfo></UpdateProfileInfo>,
                loader:()=>fetch('https://electronics-bazar-server.vercel.app/profileInfo')
            },
            
    
]);
export default router;