import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query,
            page,
            per_page: 10, // Set the number of images per page
            client_id: "YOUR_UNSPLASH_ACCESS_KEY", // Replace with your actual access key
          },
        }
      );
      const newImages = response.data.results;
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Error fetching images");
    } finally {
      setIsLoading(false);
      <Toaster position="top-center" reverseOrder={false} />;
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;
    fetchImages();
  }, [query, page]);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
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
