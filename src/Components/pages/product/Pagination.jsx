import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
    return (
        <div className="flex justify-center my-10 space-x-2">
                
        <a href="#"
            className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none">
        <IoIosArrowBack/>
        </a>
        <a href="#"
            className="ring ring-[#0E0E0E] bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600
             border rounded-lg focus:outline-none">1
        </a>
        <a href="#"
            className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none">2
        </a>
        <a href="#"
            className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none">3
        </a>
        <span
            className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 rounded-lg focus:outline-none">...</span>
        <a href="#"
            className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none">21
        </a>
    
        <a href="#"
            className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none">
         <IoIosArrowForward/>
        </a>
    </div>
    );
};

export default Pagination;