import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../../Components/MainComponent/Products/ProductCard";
import { products } from "../../../Data/ProductData";

const CategoryProduct = ({ selectedRating, sortBy ,minPrice, maxPrice}) => {
  const { shopCategory } = useParams();


  // Filter products by category
  const getCategoryProduct = useMemo(() => {
    return products.filter((product) => product.category === shopCategory);
  }, [products, shopCategory]);

  // Apply rating filter & sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = [...getCategoryProduct];

      // Apply Price Filter
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );

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
  }, [getCategoryProduct, selectedRating, sortBy, minPrice, maxPrice]);

  return (
    <>
      <div className="px-4  w-full grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-5">
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

export default CategoryProduct;
