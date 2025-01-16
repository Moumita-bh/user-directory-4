import React from "react";


const SearchBar = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      onChange={(e) => setSearch(e.target.value)}
      className="border p-3 rounded w-full max-w-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
    />
  );
};

export default SearchBar;
