import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory in v6

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?q=${encodeURIComponent(query.trim())}`); // Use navigate instead of history.push
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[500px] w-56  flex rounded-lg sm:mr-4"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search packages"
        className="w-full text-black px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <button className="border border-white rounded-r-lg px-4 py-2">Search</button>
    </form>
  );
}

export default SearchBar;
