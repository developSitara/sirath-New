import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../Components/MainComponent/Products/ProductCard";
import { products } from "../../Data/ProductData";

const SpecificProduct = ({ selectedRating, sortBy }) => {
  const { cat } = useParams();

  // Filter products by category
  const getCategoryProduct = useMemo(() => {
    return products.filter((product) => product.category === cat);
  }, [products, cat]);

  // Apply rating filter & sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = [...getCategoryProduct];

    // Apply Rating Filter
    if (selectedRating) {
      filteredProducts = filteredProducts.filter(
        (product) => product.totalRating >= selectedRating
      );
    }

    if (sortBy === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newestFirst") {
      filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return filteredProducts;
  }, [getCategoryProduct, selectedRating, sortBy]);

  return (
    <>
      <div className="border-2 flex w-full items-center justify-center flex-wrap gap-5">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((item) => (
            <Link key={item.id} to={`/product-detail/${item.id}`}>
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                productName={item.productName}
                price={item.price}
                deletePrice={item.deletePrice}
                tagOff={item.tagOff}
                totalRating={item.totalRating}
              />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600 font-semibold">
            No products match the selected criteria.
          </p>
        )}
      </div>
    </>
  );
};

export default SpecificProduct;
