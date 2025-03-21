const addToCart = (singlePro) => {
  return new Promise((resolve, reject) => {
    try {
      let allData = JSON.parse(localStorage.getItem("product"));
      if (!allData || allData.length == 0) {
        let myData = [singlePro];
        localStorage.setItem("product", JSON.stringify(myData));
        alert("Added to cart");
        resolve("Success");
      } else {
        allData.push(singlePro);
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

export { addToCart, removeFromCart };
