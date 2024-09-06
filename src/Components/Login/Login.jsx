/* eslint-disable react/no-unescaped-entities */
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import axios from "axios";
/* eslint-disable no-unused-vars */
import {  useState } from "react";
import rightsideimage from '../../assets/chris-lee-70l1tDAI6rM-unsplash 1.png';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"; // Import eye icons
const Login = () => {

  const {signuprg,googleSignin,user}=useContext(AuthContext);
  const location =useLocation();
  const navigate= useNavigate();

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const handleGoogle = () => {
    googleSignin()
    .then((result) => {
      const userEmail = result?.user?.email;
      const userName = result?.user?.displayName || "";
const userImage =result?.user?.photoURL ||"";
      const userData = {
        email: userEmail,
        name: userName,
        userImage: userImage
      };

      axios
        .post(`https://electronics-bazar-server.vercel.app/profileInfo`, userData)
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
          // Handle error
        });
    });
  };



const validatePassword = (password) => {
  // Password must be at least 6 characters long and contain at least 1 capital letter
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
      return passwordRegex.test(password);
};
const handelLogin = (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const email = form.get("email");
  const password = form.get("password");
  // console.log(email, password);

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

  signuprg(email, password)
    .then((result) => {const userEmail = result?.user?.email;
      const userName = result?user?.displayName:"update name plase";

      const userData = {
        email: userEmail,
        name: userName,
      };

      axios
        .post(`https://electronics-bazar-server.vercel.app/profileInfo`, userData)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Login success",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/");
        })
        .catch((error) => {
          console.error("Error posting user data:", error);
          // Handle error
        });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Email or password does not match",
        showConfirmButton: false,
        timer: 3000,
      });
    });
};


  return (
    <div>
      {/* <div className="my-14">
        <div className="relative flex lg:w-1/2 md:w-3/4 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#FF5A1D] to-[#333333] bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
              Sign In
            </h3>
          </div>

          <form onSubmit={handelLogin}>
            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="email "
                  name="email"
                  required
                  className="peer  h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' ']
                 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px]
                  font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] 
                  before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
                   before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none 
                   after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5
                    after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200
                     after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1]
                      peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
                       peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] 
                       peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2
                        peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2
                         peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent 
                         peer-disabled:before:border-transparent peer-disabled:after:border-transparent
                          peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  name="password"
                  required
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <div className="-ml-2.5">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="checkbox"
                    data-ripple-dark="true"
                  >
                    <input
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                      id="checkbox"
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    htmlFor="checkbox"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#FF5A1D] to-[#FF2D95] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Sign In
              </button>

              <button onClick={handleGoogle} className="block mx-auto my-3 select-none rounded-lg bg-gradient-to-tr from-[#ff5a1D] to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <p className="flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle>Google Login</p>
              </button>

              <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                Don't have an account?
                <Link className="font-bold text-[#ff5a1D]" to="/register">
                 <p className="pl-2"> Register please!!</p>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div> */}











<div  className="max-w-7xl mx-auto" >
      <div className="font-[sans-serif]">
        <div className="">
          <div className=" flex justify-between items-center gap-4 w-full  m-4 ">
            <div className="md:max-w-md border bg-[#F5F5F5]  rounded w-full px-4 py-4">
              <form  onSubmit={handelLogin}>
                <div className="mb-12">
                  <h3 className="text-gray-800 text-3xl  font-bold text-start">Welcome Back !</h3>
                  <p className="text-start">Enter your Credentials to access your account</p>
                </div>

                <div>
            
                  <div className="relative flex items-center">
                    <input name="email" type="email" className="w-full text-gray-800 text-sm border rounded border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Email Address" required />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      required
                      type={showPassword ? "text" : "password"}
                      className="w-full text-gray-800 text-sm border rounded border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                      
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
                  <button type="submit" className="block w-full py-2 mt-6 bg-black text-white font-bold rounded shadow">
                  Sign In
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
                dont have an account?
                <Link to="/auth/register" className="ml-2 font-bold text-blue-600 hover:underline">
                  Sign up
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


    
    </div>
  );
};

export default Login;
