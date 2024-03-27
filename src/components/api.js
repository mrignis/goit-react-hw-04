import axios from "axios";

const unsplashAccessKey = "8mcRsNbjAwUXJlUgEJzbvpLMrGD8KOZY1sMb-0IBjCk"; // Вставте свій ключ доступу сюди

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${unsplashAccessKey}`,
  },
});

export const requestImages = async (query, page) => {
  try {
    const response = await instance.get("/photos", {
      params: {
        query,
        page,
        per_page: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export const requestProductsByQuery = async (query) => {
  try {
    const response = await instance.get("/products/search", {
      params: {
        query,
        limit: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
