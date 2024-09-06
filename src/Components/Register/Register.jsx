/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import rightsideimage from '../../assets/chris-lee-70l1tDAI6rM-unsplash 1.png';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const { createUser, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate(); // Use navigate hook
  const location = useLocation(); // Use location hook

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        const userEmail = result?.user?.email;
        const userName = result?.user?.displayName || "";
        const userImage = result?.user?.photoURL || "";
        const userData = { email: userEmail, name: userName, userImage };

        axios
          .post(`http://localhost:5000/profileInfo`, userData)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Login success",
              showConfirmButton: false,
              timer: 3000,
            });
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.error("Error posting user data:", error);
          });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Password validation failed",
        text: "Password must be at least 6 characters long and contain at least 1 capital letter & special character",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        navigate("/auth/login");

        Swal.fire({
          icon: "success",
          title: "Registration successful Please login!",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div  className="max-w-7xl mx-auto" >
      <div className="font-[sans-serif]">
        <div className="">
          <div className=" flex justify-between items-center gap-4 w-full  m-4 ">
            <div className="md:max-w-md border bg-[#F5F5F5]  rounded w-full px-4 py-4">
              <form onSubmit={handleRegister}>
                <div className="mb-12">
                  <h3 className="text-gray-800 text-xl text-center">Welcome To</h3>
                  <h3 href="/" className="text-3xl font-extrabold flex justify-center text-center">
                    <span className=" ml-2">Furni <span className="text-[#1E99F5]">Flex</span></span>
                  </h3>
                  <p className="text-center">Signup for purchase your desired products</p>
                </div>

                <div>
                  <div className="mb-4 flex justify-between items-center gap-3 w-full">
                    <div>
                      <input name="firstname" type="text" className="w-full text-gray-800 text-sm border rounded border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="First Name (optional)" />
                    </div>
                    <div>
                      <input name="lastname" type="text" className="w-full text-gray-800 text-sm border rounded border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Last Name (optional)" />
                    </div>
                  </div>
                  <div className="relative flex items-center">
                    <input name="email" type="email" className="w-full text-gray-800 text-sm border rounded border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Email Address" required />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                      {/* SVG for email icon */}
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full text-gray-800 text-sm border rounded border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                      required
                    />
                    <div className="absolute right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaRegEye className="text-gray-600" />
                      ) : (
                        <FaRegEyeSlash className="text-gray-600" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                      I agree to the Terms & Policy
                    </label>
                  </div>
                </div>

                <div className="flex items-center">
                  <button type="submit" className="block w-full py-2 mt-6 bg-black  text-white font-bold rounded shadow">
                    Register
                  </button>
                </div>
              </form>
              <div className="flex w-full items-center gap-2 mt-3 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>
<div className="flex justify-between items-center">
<div className="mt-8 text-center text-gray-600">
                <button className="mt-2 flex justify-center w-full py-2 bg-gray-100 text-gray-900 border hover:bg-gray-200 px-4 rounded" onClick={handleGoogle}>
                  <FcGoogle className="mr-2 text-3xl" />
                  <span>SignIn with Google</span>
                </button>
              </div>
<div className="mt-8 text-center text-gray-600">
                <button className="mt-2 flex justify-center w-full py-2 bg-gray-100 text-gray-900 border hover:bg-gray-200 px-4 rounded" onClick={handleGoogle}>
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="32px" fill="#000" viewBox="0 0 22.773 22.773">
                    <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" data-original="#000000"></path>
                  </svg>
                  <span>Sign in With Apple</span>
                </button>
              </div>
                
             
</div>

              <div className="mt-8 text-center text-sm">
                Already have an account?
                <Link to="/auth/login" className="ml-2 font-bold text-blue-600 hover:underline">
                  Sign in
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center ">

    
              <img src={rightsideimage} className="h-[1024px] w-[688px] relative" alt="Furniture" />

              <div className="absolute top-[70%]">
              <a href="/" className="text-2xl flex flex-col items-center">
  <span className="bg-[#1E99F5] text-black rounded-full w-24 h-24 text-2xl font-[lucida-calligraphy] flex justify-center items-center">
    F
  </span>
  <span className=" text-white ml-2">Furni <span className="text-[#1E99F5]">Flex</span></span>
</a>
<p className="text-white">Discover a seamless shopping experience with our curated <br /> collection of products. From fashion to electronics, we bring quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
