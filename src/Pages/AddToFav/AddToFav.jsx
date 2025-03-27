import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { addToCart, removeFromCart, removeFromWishlist } from "../../api/localStorage";
import { products } from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";

const AddToFav = () => {
  // State for cart items
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartItems(storedCart);
  }, []);

  // Function to increase quantity
  const handleIncreaseQty = (id) => {
    let updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      updatedCart[productIndex].qty += 1;
      localStorage.setItem("wishlist", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  // decrease function
  const handleDecreaseQty = (id) => {
    let updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item) => item.id === id);

    if (productIndex !== -1 && updatedCart[productIndex].qty > 1) {
      updatedCart[productIndex].qty -= 1;
      localStorage.setItem("product", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

    
  // add to cart
  const addToCartHandler = async (id) => {
    let singlePro = products.find((product) => product.id == id);
    await addToCart(singlePro);
    navigate("/cart");
    console.log(singlePro)
  };
  const removeFromWishlistHandler = async (id) => {
    await removeFromWishlist(id);
    
  };
  return (
    <>
      <div className="w-full lg:mt-5 py-5 lg:py-10 px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-md md:text-xl lg:text-4xl xl:text-[40px] font-Poppins font-semibold">
            Wishlist
          </h2>
        </div>

        {/* product item */}

        <div className="w-full mt-5 xl:mt-10 ">
          <div className="w-full grid gap-5 xl:gap-8 ">
            {cartItems.length > 0 ? (
              cartItems?.map((item) => (
                <div  key={item?.id} className="bg-[#fff] flex  md:flex-row items-center p-1 xl:p-10 gap-3 xl:gap-14 ">
                  <img
                     src={Array.isArray(item?.img) ? item?.img[0] : item?.img}
                    alt={"product"}
                    className=" w-16 h-16 xl:w-24 xl:h-24 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-base lg:text-xl xl:text-2xl font-semibold text-gray-400 text-ellipsis line-clamp-1">
                    {item?.productName}
                    </h3>
                    <p className="text-xs xl:text-sm text-black whitespace-pre-line text-ellipsis line-clamp-2">
                    {item?.description}
                    </p>
                    <p className="text-red-500 font-bold text-base xl:text-lg mt-1">
                    {item?.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 xl:gap-5">
                    <button onClick={()=>handleDecreaseQty(item.id)} variant="outline" size="icon">
                      <FaMinus className="w-2 h-2 xl:w-5 xl:h-5 text-black" />
                    </button>
                    <span className="text-base xl:text-lg font-semibold">
                    {item.qty}
                    </span>
                    <button onClick={()=>handleIncreaseQty(item.id)} variant="outline" size="icon">
                      <FaPlus className="w-2 h-2 xl:w-5 xl:h-5 text-black" />
                    </button>
                  </div>
                  <p className="text-xs xl:text-lg font-semibold">₹</p>
                  <button  onClick={() => addToCartHandler(item.id)}
                    variant="outline"
                    size="icon"
                    className="uppercase bg-red-700 text-white text-base font-Public px-4 py-1 hover:bg-red-800 rounded-md"
                  >
                    Add to cart
                  </button>
                  <button variant="outline" size="icon"onClick={() => removeFromWishlistHandler
                    (item?.id)}>
                    <RxCross2 className=" w-2 h-2 xl:w-5 xl:h-5 text-red-800 hover:text-blue" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-md xl:text-xl mt-5 text-center">
                No items in wishlist
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToFav;
