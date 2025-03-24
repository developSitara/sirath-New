const addToCart = (singlePro) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product"));
      if (!allData || allData.length == 0) {
  
        let myData = [{...singlePro,qty:1}];
        localStorage.setItem("product", JSON.stringify(myData));
        alert("Added to cart");
        resolve("Success");
      } else {
        allData.push({...singlePro,qty:1});
        localStorage.setItem("product", JSON.stringify(allData));
        alert("Added to cart");
        resolve("Success");
      }
    } catch (error) {
      reject(error); 
    }
  });
};

const removeFromCart = (id) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product"));

      const allItemAfterRemove = allData.filter((item) => {
        return item?.id !== id;
      });
      localStorage.setItem("product", JSON.stringify(allItemAfterRemove));

      alert("Removed from cart");
      resolve("Success");
    } catch (error) {
      reject(error);
    }
  });
};

const decrementQty = (id) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product"));
      const productIndex = allData.findIndex(item => item.id === id);
      if (productIndex !== -1) {
        // Ensure quantity doesn't go below 1
        if (allData[productIndex].qty > 1) {
          allData[productIndex].qty -= 1;
          localStorage.setItem("product", JSON.stringify(allData));
          alert("Quantity decremented");
          resolve("Success");
        } else {
          alert("Quantity can't be less than 1");
          reject("Quantity can't be less than 1");
        }
      } else {
        alert("Product not found in cart");
        reject("Product not found");
      }
    } catch (error) {
      reject(error);
    }
  });
};

export { addToCart, removeFromCart ,decrementQty};
