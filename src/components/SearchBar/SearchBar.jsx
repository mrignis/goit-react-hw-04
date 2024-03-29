import React, { useState } from "react";
import { toast } from "react-hot-toast";
import isEnglish from "is-english";

const SearchBar = ({ onSubmit, onCloseModal }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      toast.error("Please enter a search term.");
      return;
    }

    if (!isEnglish(searchTerm.trim())) {
      toast.error("Please enter an English word.");
      if (onCloseModal) {
        onCloseModal(); // Викликаємо функцію для закриття модального вікна
      }
      return;
    }

    onSubmit(searchTerm.trim());
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search images..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
