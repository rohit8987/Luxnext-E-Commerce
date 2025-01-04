import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Components/ShopContext";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Title from "../Components/Title";
import MyContext from "../Context/MyContext";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const { search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");
  
  const navigate = useNavigate ();

  const context = useContext(MyContext);
  const { loading, getAllProduct } = context;

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredAndSortedProducts = () => {
    let productsCopy = getAllProduct.slice();

    // Filter by search
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Filter by subCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sort by price
    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    return productsCopy;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar for Filters */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase"
        >
          filters
          <div className={`sm:hidden ${showFilter ? "rotate-90" : ""} items-center`}>
            <ChevronRightIcon fontSize="small" className="font-light mb-1" />
          </div>
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Men"
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Women"
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Kids"
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="T-shirt"
                onChange={toggleSubCategory}
              />
              T-shirt
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Jeans"
                onChange={toggleSubCategory}
              />
              Jeans
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Top"
                onChange={toggleSubCategory}
              />
              Top
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-b border-gray-300 bg-white text-sm px-2"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {filteredAndSortedProducts().map((item) => {
              const { id, title, price, productImageUrl } = item;
              console.log(id,"id")
              return (
                <div
                  key={id}
                  onClick={() => navigate(`/product/${id}`)}
                  className="text-gray-700 cursor-pointer"
                >
                  <div className="overflow-hidden">
                    <img
                      className="hover:scale-110 transition ease-in-out"
                      src={productImageUrl}
                      alt={title}
                    />
                  </div>
                  <h2 className="pt-2 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Luxnest
                  </h2>
                  <p className="pt-3 pb-1 text-sm">{title.substring(0, 25)}</p>
                  <p className="text-sm font-medium">₹{price}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
