import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Оновлення стану зі значенням інпуту
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Зупинка перезавантаження сторінки
    onSubmit(searchTerm); // Передача введеного тексту назад до батьківського компонента
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search images..."
        value={searchTerm}
        onChange={handleChange} // Обробник зміни значення інпуту
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
