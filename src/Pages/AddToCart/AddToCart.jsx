import React, { useState, useEffect } from "react";
import TotalAmount from "./TotalAmount";
import CartProduct from "./CartProduct";

const AddToCart = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("product")) || [];
    setCartItems(storedCart);
  }, []);

  // Function to increase quantity
  const handleIncreaseQty = (id) => {
    let updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex(item => item.id === id);

    if (productIndex !== -1) {
      updatedCart[productIndex].qty += 1;
      localStorage.setItem("product", JSON.stringify(updatedCart));
      setCartItems(updatedCart); 
    }
  };

  // decrease function
  const handleDecreaseQty = (id) => {
    let updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex(item => item.id === id);

    if (productIndex !== -1 && updatedCart[productIndex].qty > 1) {
      updatedCart[productIndex].qty -= 1;
      localStorage.setItem("product", JSON.stringify(updatedCart));
      setCartItems(updatedCart); 
    }
  };

  return (
    <>
      <div className="lg:mt-5 py-5 lg:py-10 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 w-full">
        <div className="relative w-full flex items-start justify-start gap-5 xl:gap-10 flex-wrap xl:flex-nowrap">
          {/* Cart Products Section */}
          <div className="xl:overflow-y-auto w-full xl:w-3/4">
            <CartProduct
              cartItems={cartItems}
              handleIncreaseQty={handleIncreaseQty}
              handleDecreaseQty={handleDecreaseQty}
            />
          </div>

          {/* Total Amount Section */}
          <div className="xl:w-1/4 bg-[#E4E4E4] py-10 px-4 xl:sticky xl:top-20 z-10">
            <TotalAmount cartItems={cartItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
