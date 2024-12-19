import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Effect to toggle visibility based on the route and `showSearch`
  useEffect(() => {
    // Check if the current pathname includes "collection" and if `showSearch` is true
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]); // Include `showSearch` to re-evaluate visibility when it changes

  return showSearch && visible ? (
    <div className="border-t border-b text-center">
      <div className="inline-flex items-center justify-center border px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <div className="w-4">
          <SearchIcon />
        </div>
      </div>
      <div onClick={() => setShowSearch(false)} className="inline w-3 cursor-pointer">
        <CloseOutlinedIcon />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
