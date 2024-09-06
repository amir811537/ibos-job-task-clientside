
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { FaCircleUser } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
const [userCart]=useCart()
  const handelsingout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
//     


<div>
<div className="navbar bg-base-100 px-10">
  <div className="navbar-start">
{/* for mobile nav */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li><Link>Home</Link></li>
      <li><Link>Products</Link></li>
      <li><Link>Categories</Link></li>
      <li><Link>Custom</Link></li>
      <li><Link>Blogs</Link></li>
      </ul>
    </div>

    <a href="/" className="text-xl flex items-center">
  <span className="bg-[#1E99F5] text-black rounded-full w-8 h-8 text-xl font-[lucida-calligraphy] flex justify-center items-center">
    F
  </span>
  <span className=" ml-2">Furni <span className="text-[#1E99F5]">Flex</span></span>
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li><Link>Products</Link></li>
      <li><Link>Categories</Link></li>
      <li><Link>Custom</Link></li>
      <li><Link>Blogs</Link></li>
     
 
    </ul>
  </div>
  <div className="navbar-end">
  <div className=" hidden lg:flex ">
        <div className="flex-none mr-4">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
<Link to='/'>
<span className="badge badge-sm indicator-item">{userCart?.length}</span>

</Link>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-center text-lg">{userCart?.length} Items</span>
          <div className="card-actions">


{
  user? <button className="btn btn-primary btn-block"><Link to='/dashboard/dashboardHome'>View cart</Link></button>
: ""
}        </div>
        </div>
      </div>
    </div>
      </div>
       
        
        </div>
    
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {user ? (
              <img src={user.photoURL} />
            ) : (
              <img src="https://i.ibb.co/gjNbZy2/user.png" />
            )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li>   {user ? (
            
            <button
              className=""
              onClick={handelsingout}
            >
<FaCircleUser className="text-xl" /> Sign Out  </button>
        
        ) : (
          
            <Link to="/login">
              <button className="">Login</button>
            </Link>
        
        )}</li>
      </ul>
    </div>
  </div>

  </div>
  <hr className="text-[#F1F1F1] w-full mt-3 mb-6" />

</div>
  );
};

export default Navbar;
