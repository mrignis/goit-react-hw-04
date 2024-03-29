import React, { useState } from "react";

// Функція для перевірки, чи є рядок англійським
const isEnglish = (text) => {
  return /^[a-zA-Z0-9\s]+$/.test(text);
};

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Оновлення стану зі значенням інпуту
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Зупинка перезавантаження сторінки

    // Перевірка, чи є введене слово англійським
    if (!isEnglish(searchTerm)) {
      setError("Please enter an English word.");
      return;
    }

    onSubmit(searchTerm); // Передача введеного тексту назад до батьківського компонента
    setSearchTerm(""); // Очистка поля пошуку після надсилання
    setError(null); // Очистка повідомлення про помилку
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SearchBar;
