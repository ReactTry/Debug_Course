import React from "react";
import './SearchInput.css'
export const SearchInput = ({handleChange,searchInputvalue,clearSearch}) => {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="Search here"  value={searchInputvalue} onChange={handleChange} />
       {searchInputvalue && (
        <button onClick={clearSearch}>
          <img
            width="32px"
            height="32px"
            style={{ objectFit: "contain" }}
            src="https://logowik.com/content/uploads/images/close1437.jpg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};
