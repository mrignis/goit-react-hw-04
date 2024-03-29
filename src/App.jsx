import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "./App.css"; // Підключення CSS

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal"; // Імпорт компоненту ImageModal

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

const API_KEY = "8mcRsNbjAwUXJlUgEJzbvpLMrGD8KOZY1sMb-0IBjCk"; // Ваш ключ API

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = useCallback(async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  }, []);

  const fetchImages = useCallback(async () => {
    try {
      if (query) {
        setIsLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`
        );
        setImages(data.results);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setIsLoading(false);
      toast.error("Error fetching images. Please try again later.");
    }
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className="app-container">
      {" "}
      {/* Додайте клас app-container */}
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {images.length === 0 && !isLoading && (
        <ErrorMessage message="No images found." />
      )}
      <ImageModal
        isOpen={!!modalImage}
        image={modalImage}
        onClose={handleCloseModal}
      />
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
