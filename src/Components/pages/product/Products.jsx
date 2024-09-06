import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cartimage from "../../../assets/Added.png";
import axios from "axios";
import Pagination from "./Pagination";
import { AuthContext } from "../../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Products = () => {
  const [refetch] = useCart();
  const axiosPublic = useAxiosPublic(); // Fixed typo from axiousPublic to axiosPublic

  const { user } = useContext(AuthContext);

  const [activeNav, setActiveNav] = useState(1);
  const [furnitures, setFurnitures] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/furnitures");
      setFurnitures(response.data);
    } catch (error) {
      console.log("error in data fetching", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNavClick = (navIndex) => {
    setActiveNav(navIndex);
  };

  const handeladdtocart = async (furniture) => {
    const payload = {
      photourl: furniture?.photourl,
      name: furniture?.name,
      price: furniture?.newPrice, // Use correct price field
      email: user?.email, // Pass current user's email
    };
    try {
      const response = await axiosPublic.post("/userCart", payload);

      if (response?.data?.insertedId) {
        Swal.fire("Good job!", "Added to cart!", "success");
        refetch(); // Refresh the cart data
      }
    } catch (error) {
      console.log("Error adding product to cart", error);
    }
  };

  return (
    <div className="max-w-full mx-auto mt-5">
      <div className="flex justify-start gap-8">
        {/* Sidebar Navigation */}
        <div className="w-[20%]">
          <div className="flex flex-col gap-4">
            <NavLink
              className={`${
                activeNav === 1 ? "bg-black text-white" : "bg-white text-black"
              } text-base flex justify-start items-center rounded-lg px-6 py-3`}
              onClick={() => handleNavClick(1)}
            >
              Rocking chair
            </NavLink>
            <NavLink
              className={`${
                activeNav === 2 ? "bg-black text-white" : "bg-white text-black"
              } text-base flex justify-start items-center rounded-lg px-6 py-3`}
              onClick={() => handleNavClick(2)}
            >
              Side chair
            </NavLink>
            <NavLink
              className={`${
                activeNav === 3 ? "bg-black text-white" : "bg-white text-black"
              } text-base flex justify-start items-center rounded-lg px-6 py-3`}
              onClick={() => handleNavClick(3)}
            >
              Lounge chair
            </NavLink>
          </div>
        </div>

        {/* Main Product Display */}
        <div className="w-[80%]">
          <div className="grid grid-cols-3 gap-5">
            {furnitures.map((furniture) => (
              <div
                key={furniture._id}
                className="border rounded-lg p-4 bg-white shadow-md w-[277px] h-[484px]"
              >
                <img
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: "8px",
                  }}
                  src={furniture.photourl}
                  alt={furniture.name}
                  className="h-[205px] w-full mx-auto mb-4"
                />
                <div className="w-[205px] h-[205px] mx-auto">
                  <h3 className="text-lg font-bold">{furniture.name}</h3>
                  <div className="flex justify-between gap-3 items-center">
                    <p className="text-xl font-bold text-black">€{furniture.newPrice}</p>
                    <p className="text-sm line-through font-bold text-gray-500">€{furniture.oldPrice}</p>
                    <p className="text-red-600 text-sm font-bold">{furniture.discountPercentage}% OFF</p>
                  </div>
                  <p className="mt-2 text-gray-600">{furniture.description}</p>
                  <button
                    onClick={() => handeladdtocart(furniture)} // Pass the correct furniture object
                    className="mt-4 w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg"
                  >
                    <img src={cartimage} alt="cart" />
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
