import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { DiNpm } from "react-icons/di";

function Header() {
  return (
    <header className="bg-red-600 text-white p-3 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link to="/">
            <img src="/iconnvg2.png" alt="Logo" className="w-20 ml-4" />
          </Link>
        </div>
        <div className="">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
