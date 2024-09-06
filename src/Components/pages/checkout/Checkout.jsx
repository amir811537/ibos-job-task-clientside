import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

// Fake data for products
const initialProducts = [
  {
    id: 1,
    name: "Recliner Chair Steel",
    image: "../../../assets/rocking-chair-with-padded-seat 1.png", // Fake image path
    price: 299.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "Gaming Chair",
    image: "../../../assets/image_125-removebg-preview 1.png", // Fake image path
    price: 249.0,
    quantity: 1,
  },
];

const Checkout = () => {
  // State for products
  const [products, setProducts] = useState(initialProducts);

  // Function to handle increment
  const handleIncrement = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
    console.log("Updated Products:", updatedProducts);
  };

  // Function to handle decrement
  const handleDecrement = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
    console.log("Updated Products:", updatedProducts);
  };

  // Calculate subtotal and total
  const subtotal = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  const total = subtotal; // Assuming no shipping and taxes for now

  return (
    <div className="bg-white h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-4">An overview of your order</h1>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Product Overview */}
          <div className="md:w-2/3">
            <div className="bg-[#FAFAFA] rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b">
                      {/* Quantity Section */}
                      <td className="py-4 w-1/4">
                        <div className="flex items-center justify-center gap-2">
                          {/* Decrement Button */}
                          <button
                            className="border border-gray-300 rounded-lg w-10 h-10 text-lg flex items-center justify-center"
                            onClick={() => handleDecrement(product.id)}
                          >
                            −
                          </button>

                          {/* Quantity Display */}
                          <span className="text-lg font-medium">{product.quantity}</span>

                          {/* Increment Button */}
                          <button
                            className="border border-gray-300 rounded-lg w-10 h-10 text-lg flex items-center justify-center"
                            onClick={() => handleIncrement(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      {/* Product Image & Name */}
                      <td className="py-4 flex items-center w-1/2">
                        <img
                          className="h-24 w-24 mr-4"
                          src={product.image}
                          alt={product.name}
                          style={{
                            backgroundColor: "#F2F2F2",
                            borderRadius: "8px",
                          }}
                        />
                        <span className="font-semibold">{product.name}</span>
                      </td>

                      {/* X button and Price aligned vertically */}
                      <td className="py-4 text-right w-1/6">
                        <div className="flex flex-col gap-2 items-center">
                          <button className="font-bold text-xl">
                            <IoCloseOutline />
                          </button>
                          <span className="font-semibold">€{(product.quantity * product.price).toFixed(2)}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right side - Summary */}
          <div className="md:w-1/3">
            <div className="bg-[#FAFAFA] rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Order details</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Estimated Tax</span>
                <span>€0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2 font-semibold text-lg">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <button className="bg-black text-white py-3 px-6 rounded-lg mt-4 w-full">
                GO TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
