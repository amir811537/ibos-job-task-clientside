/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    const location =useLocation()
    console.log(location)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;