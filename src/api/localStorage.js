import toast from "react-hot-toast";

const addToCart = (singlePro) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product")) || [];
      
      //  if product already exists in cart
      const productIndex = allData.findIndex(item => item.id === singlePro.id);
      
      if (productIndex !== -1) {
        // If product exists, increase quantity
        allData[productIndex].qty += 1;
        toast.success("Added to cart");
      } else {
      
        allData.push({ ...singlePro, qty: 1 });
        toast.success("Added to cart");
      }

     
      localStorage.setItem("product", JSON.stringify(allData));
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

export { addToCart, removeFromCart };
