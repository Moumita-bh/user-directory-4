import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import SearchBar from "../components/SearchBar";
import SortingControls from "../components/SortingControls";
import UserCard from "../components/UserCard";


const HomePage = () => {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  if (loading) return <div className="text-center text-lg">Loading users...</div>;
  if (error) return <div className="text-center text-red-500">Error loading users: {error}</div>;

  // Search Filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>

      {/* Centered Search & Sorting */}
      <div className="w-full max-w-md flex flex-col items-center space-y-4">
        <SearchBar setSearch={setSearch} />
        <SortingControls setSortOrder={setSortOrder} />
      </div>

      {/* Centered User Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 place-items-center">
        {currentUsers.length > 0 ? (
          currentUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="text-center col-span-full">No users found</div>
        )}
      </div>

      {/* Centered Pagination Controls */}
      <div className="flex gap-4 mt-8">
        <button
          className={`px-5 py-2 bg-blue-500 text-white rounded shadow-md transition hover:bg-blue-600 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded shadow-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-5 py-2 bg-blue-500 text-white rounded shadow-md transition hover:bg-blue-600 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;

