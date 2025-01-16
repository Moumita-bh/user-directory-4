import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-64 flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500">{user.address.city}</p>
      <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline mt-3">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
