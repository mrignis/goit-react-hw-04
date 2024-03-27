import axios from "axios";

// Створення інстанції Axios з базовим URL
const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

// Функція запиту продуктів
eimport axios from "axios";

// Створення інстанції Axios з базовим URL
const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

// Функція запиту зображень різного роду
export const requestImages = async () => {
  try {
    const response = await instance.get("/images");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

// Функція запиту продуктів за запитом
export const requestProductsByQuery = async (query = "") => {
  try {
    const response = await instance.get(`/products/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by query:", error);
    throw error;
  }
};
