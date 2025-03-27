import toast from "react-hot-toast";

// const addToCart = (singlePro,displayQty) => {
//   return new Promise((resolve, reject) => {
//     try {
//       let allData = JSON.parse(localStorage.getItem("product")) || [];
      
//       //  if product already exists in cart
//       const productIndex = allData.findIndex(item => item.id === singlePro.id);
      
//       if (productIndex !== -1) {
//         // If product exists, increase quantity
//         alert('exist')
//         allData[productIndex].qty += displayQty==0?10:displayQty;
//         toast.success("Added to cart");
//       } else {
      
//         allData.push({ ...singlePro, qty: displayQty });
//         toast.success("Added to cart");
//       }

     
//       localStorage.setItem("product", JSON.stringify(allData));
//       resolve("Success");
//     } catch (error) {
//       reject(error);
//     }
//   });
// };


const addToCart = (singlePro, displayQty = 10) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product")) || [];

      // Ensure displayQty is at least 1
      let quantity = displayQty > 0 ? displayQty : 10;

      // Check if the product already exists in the cart
      const productIndex = allData.findIndex(item => item.id === singlePro?.id);

      if (productIndex !== -1) {
        // If product exists, increase quantity
        allData[productIndex].qty += quantity;
        toast.success("Quantity updated in cart");
      } else {
        // Add new product to cart
        allData.push({ ...singlePro, qty: quantity });
        toast.success("Added to cart");
      }

      // Update local storage
      localStorage.setItem("product", JSON.stringify(allData));
      resolve("Success");
    } catch (error) {
      reject(error);
    }
  });
};
const addtoWishlist = (singlePro, displayQty = 10) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("wishlist")) || [];

      // Ensure displayQty is at least 1
      let quantity = displayQty > 0 ? displayQty : 10;

      // Check if the product already exists in the cart
      const productIndex = allData.findIndex(item => item.id === singlePro.id);

      if (productIndex !== -1) {
        // If product exists, increase quantity
        allData[productIndex].qty += quantity;
        toast.success("Quantity updated in cart");
      } else {
        // Add new product to cart
        allData.push({ ...singlePro, qty: quantity });
        toast.success("Added to wishlist");
      }

      // Update local storage
      localStorage.setItem("wishlist", JSON.stringify(allData));
      resolve("Success");
    } catch (error) {
      reject(error);
    }
  });
};


const removeFromCart = (id) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product")) || [];

    
      const updatedCart = allData.filter(item => item.id !== id);
      localStorage.setItem("product", JSON.stringify(updatedCart));

      toast.error("Removed from cart");
      resolve("Success");
    } catch (error) {
      reject(error);
    }
  });
};
const removeFromWishlist = (id) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("wishlist")) || [];

    
      const updatedCart = allData.filter(item => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedCart));

      toast.error("Removed from wishlist");
      resolve("Success");
    } catch (error) {
      reject(error);
    }
  });
};

export { addToCart, addtoWishlist,removeFromCart,removeFromWishlist };
