import React from "react";

const SortingControls = ({ setSortOrder }) => {
  return (
    <div className="flex align-center gap-4">
      <button
        onClick={() => setSortOrder("asc")}
        className="px-5 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
      >
        Sort A-Z
      </button>
      <button
        onClick={() => setSortOrder("desc")}
        className="px-5 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
      >
        Sort Z-A
      </button>
    </div>
  );
};

export default SortingControls;
