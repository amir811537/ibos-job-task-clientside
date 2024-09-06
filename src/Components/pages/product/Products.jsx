import { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../../../assets/image_125-removebg-preview 1.png"
import image2 from "../../../assets/rocking-chair-with-padded-seat 1.png"
import cartimage from "../../../assets/Added.png"
import Pagination from "./Pagination";
const Products = () => {
  const [activeNav, setActiveNav] = useState(1);

  const handleNavClick = (navIndex) => {
    setActiveNav(navIndex);
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
    {/* Product 1 */}
    <div className="border rounded-lg p-4 bg-white shadow-md w-[277px] h-[484px]">
      <img
        style={{ backgroundColor: "#F2F2F2" ,
            borderRadius:'8px'
        }}
        src={image} // Replace this with your actual image variable
        alt="Timber Ride Padded"
        className="h-[205px] w-full mx-auto  mb-4"
      />
     <div className="w-[205px] h-[205px] mx-auto">
     <h3 className="text-lg font-bold">Timber Ride Padded</h3>
      <p className="text-xl font-bold text-black">€59.00</p>
      <p className="text-sm line-through text-gray-500">€75.00</p>
      <p className="text-red-600 text-sm font-bold">30% OFF</p>
      <p className="mt-2 text-gray-600">
        High Back Rocking Slide Pocket Portable Folding Outdoor Camping Chairs.
      </p>
      <button className="mt-4 w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg">
        <img src={cartimage} alt="" />
        Add to cart
      </button>
     </div>
    </div>
    {/* Product 2 */}
    <div className="border rounded-lg p-4 bg-white shadow-md w-[277px] h-[484px]">
      <img
        style={{ backgroundColor: "#F2F2F2" ,
            borderRadius:'8px'
        }}
        src={image2} // Replace this with your actual image variable
        alt="Timber Ride Padded"
        className="h-[205px] w-full mx-auto  mb-4"
      />
     <div className="w-[205px] h-[205px] mx-auto">
     <h3 className="text-lg font-bold">Timber Ride Padded</h3>
      <p className="text-xl font-bold text-black">€59.00</p>
      <p className="text-sm line-through text-gray-500">€75.00</p>
      <p className="text-red-600 text-sm font-bold">30% OFF</p>
      <p className="mt-2 text-gray-600">
        High Back Rocking Slide Pocket Portable Folding Outdoor Camping Chairs.
      </p>
      <button className="mt-4 w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg">
        <img src={cartimage} alt="" />
        Add to cart
      </button>
     </div>
    </div>
    {/* Product 3 */}
    <div className="border rounded-lg p-4 bg-white shadow-md w-[277px] h-[484px]">
      <img
        style={{ backgroundColor: "#F2F2F2" ,
            borderRadius:'8px'
        }}
        src={image2} // Replace this with your actual image variable
        alt="Timber Ride Padded"
        className="h-[205px] w-full mx-auto  mb-4"
      />
     <div className="w-[205px] h-[205px] mx-auto">
     <h3 className="text-lg font-bold">Timber Ride Padded</h3>
      <p className="text-xl font-bold text-black">€59.00</p>
      <p className="text-sm line-through text-gray-500">€75.00</p>
      <p className="text-red-600 text-sm font-bold">30% OFF</p>
      <p className="mt-2 text-gray-600">
        High Back Rocking Slide Pocket Portable Folding Outdoor Camping Chairs.
      </p>
      <button className="mt-4 w-full flex justify-center items-center gap-2 bg-black text-white py-2 rounded-lg">
        <img src={cartimage} alt="" />
        Add to cart
      </button>
     </div>
    </div>

  </div>

</div>

      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Products;
