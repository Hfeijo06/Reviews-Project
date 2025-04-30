import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full h-auto bg-gray-800 left-0">
      <div className="flex justify-between items-center p-4">
        <div className="text-lg font-semibold text-white hover:text-blue-700 cursor-pointer">
          ReviewsHub
        </div>
        <div className="flex-row">
          <input className="bg-white w-100 rounded-sm text-md" />
          <button className="w-10 rounded-sm ">
            <i className="fa-solid fa-magnifying-glass text-white hover:text-blue-700 cursor-pointer"></i>
          </button>
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <Link to="/login">
            <div className="flex-row text-white hover:text-blue-700 cursor-pointer">
              <i className="fa-solid fa-user text-2xl"></i>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
