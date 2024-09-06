import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Register = () => {
  const { createUser, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate(); // Use navigate hook
  const location = useLocation(); // Use location hook

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handelGoogle = () => {
    googleSignin()
      .then((result) => {
        const userEmail = result?.user?.email;
        const userName = result?.user?.displayName || "";
        const userImage = result?.user?.photoURL || "";
        const userData = { email: userEmail, name: userName, userImage };

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
          });
      });
  };

  const handelRegister = (e) => {
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
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen  text-gray-900 flex justify-center">
      {/* <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={handelGoogle}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <FcGoogle className="w-6 h-6" />
                  <span className="ml-4">Sign Up with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with email
                </div>
              </div>

              <form onSubmit={handelRegister} className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  <span className="ml-3">Register Now</span>
                </button>
              </form>

              <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit">
                Already have an account?
                <Link className="text-indigo-500 font-bold pl-2" to="/login">
                  Sign in!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <div
          className="flex bg-indigo-100 text-center "
          style={{
            backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
