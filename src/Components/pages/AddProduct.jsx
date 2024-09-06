import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const photourl = form.get("imgage");
    const name = form.get("name");
    const newPrice = parseFloat(form.get("NewPrice"));
    const oldPrice = parseFloat(form.get("OldPrice"));
    const discountPercentage = parseFloat(form.get("discountPercentage"));
    const description = form.get("discriptions");
    
    // Basic validation for prices and percentages
    if (newPrice <= 0 || oldPrice <= 0 || discountPercentage <= 0) {
      Swal.fire("Error", "Price and discount percentage must be positive values", "error");
      return;
    }

    const product = { photourl, name, newPrice, oldPrice, discountPercentage, description };
console.log('===========>',product)
    axios
      .post("http://localhost:5000/furnitures", product)
      .then((res) => {
        console.log("add====>", res.data);
        if (res.data.insertedId) {
          Swal.fire("Good job!", "Product added successfully!", "success");
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", "Failed to add product", "error");
      });
  };

  return (
    <div className="lg:my-20 p-10">
      <div className="py-8">
        <h1 className="text-center text-xl lg:text-4xl uppercase font-bold underline">Add Furniture</h1>
      </div>
      <form onSubmit={handleAddProduct}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="imgage"
              id="photourl"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="photourl"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Enter your photo URL
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
            >
              Furniture Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="NewPrice"
              id="newPrice"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              min="0"
              step="0.01"
            />
            <label
              htmlFor="newPrice"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0"
            >
              New Price
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="OldPrice"
              id="oldPrice"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              min="0"
              step="0.01"
            />
            <label
              htmlFor="oldPrice"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0"
            >
              Old Price
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="discountPercentage"
              id="discountPercentage"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
              min="0"
              max="100"
              step="0.01"
            />
            <label
              htmlFor="discountPercentage"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0"
            >
              Discount Percentage
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="discriptions"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0"
            >
              Enter Description
            </label>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
