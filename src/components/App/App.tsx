import React, { useEffect, useState } from "react";
import { fetchImages } from "../../api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./App.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  likes: number;
  user: {
    instagram_username: string;
  };
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [likes, setLikes] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");

  const emptyInput = () => toast.error("Type something!", { icon: "✍️", position: 'bottom-center' });
  const noImage = () => toast.error("We have no images for you!", { icon: "🥺", position: 'bottom-center' });

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getImages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);

        if (data.length === 0) {
          noImage();
        }
        setImages(prev => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('image') as HTMLInputElement;
    const newQuery = input.value.trim();
    
    if (newQuery === "") {
      emptyInput();
    }
  
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    form.reset();
  };

  const handleLoadMore = () => setPage(page + 1);

  const imageData = (likes: string, instagram: string, selectedImage: string) => {
    setLikes(likes);
    setInstagram(instagram);
    setSelectedImage(selectedImage);
  };

  const toggleModal = (bool: boolean) => setIsModalOpen(bool);

  return (
    <div className={css.wrapper}>
      <SearchBar onSubmit={handleSubmit} />
      <div className={css.container}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onOpen={toggleModal}
            onData={imageData}
          />
        )}
        <ImageModal
          onClose={toggleModal}
          isModalOpen={isModalOpen}
          currentImage={selectedImage}
          likes={likes}
          author={instagram}
        />
        {images.length > 11 && <LoadMoreBtn onHandleLoadMore={handleLoadMore} />}
        <Toaster />
      </div>
    </div>
  );
};

export default App;
