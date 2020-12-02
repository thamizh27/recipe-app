import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(value);
  };

  return (
    <div className="first">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for recipe..."
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
