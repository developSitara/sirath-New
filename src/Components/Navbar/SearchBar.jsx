import { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { products } from "../../Data/ProductData";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState(""); 
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const categories = ["All Categories", "Distribution box", "Transformer", "Wire & Cable", "Conductors","drop out switch","horn up fuse"];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearchClick = () => {
    let filteredProducts = products;

    // Filter by category (if not "All Categories")
    if (selectedCategory !== "All Categories") {
      filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
    }

    // Filter by product name (case insensitive search)
    if (searchTerm.trim() !== "") {
      filteredProducts = filteredProducts.filter((p) =>
        p.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filteredProducts.length > 0) {
      navigate(`/product-detail/${filteredProducts[0].id}`, { state: { product: filteredProducts[0] } });
    } else {
      toast.error("No matching product found");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="z-1 w-full flex items-center rounded-md shadow-sm bg-[#fff]">
      {/* Category Dropdown */}
      <div className="relative hidden xl:flex bg-[#fff] border-r border-gray-300 rounded-l-md" ref={dropdownRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex items-center justify-between text-sm font-semibold text-gray-900 px-4 py-3 bg-[#fff] rounded-l-md w-44 truncate"
          aria-expanded={isDropdownOpen}
        >
          {selectedCategory}
          <svg className="w-5 h-5 text-gray-400 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 mt-10 w-48 bg-white shadow-lg z-50 border border-gray-200 rounded-md">
            <ul className="text-sm text-gray-700">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search Input */}
      <input
        type="search"
        placeholder="Search here..."
        className="flex-1 px-4 py-2 text-base font-medium focus:outline-none bg-[#fff] border-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Search Button */}
      <button
        className="bg-white flex items-center gap-2 px-6 py-2 text-base font-medium rounded-r"
        onClick={handleSearchClick}
      >
        <IoSearch size={20} /> Search
      </button>
    </div>
  );
};

export default SearchBar;
