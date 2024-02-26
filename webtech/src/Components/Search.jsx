import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  //   console.log(searchTerm);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 3) {
      setError("");
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim().length < 3) {
      setError("Search term must be at least 3 characters .");
    } else {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-com">
      <input
        type="text"
        placeholder="Search City or Blood Group "
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>
      {error && (
        <p className="text-center text-danger mb-lg-5 bg-light ">{error}</p>
      )}
    </div>
  );
};

export default SearchComponent;
