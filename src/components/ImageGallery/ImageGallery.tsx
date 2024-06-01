import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: {
    id: string;
    urls: {
      regular: string;
    };
    likes: number;
    user: {
      instagram_username: string;
    };
  }[];
  onOpen: (bool: boolean) => void;
  onData: (likes: string, instagram: string, selectedImage: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpen, onData }) => (
  <ul className={css.list}>
    {images.map(image => (
      <ImageCard key={image.id} image={image} onOpen={onOpen} onData={onData} />
    ))}
  </ul>
);

export default ImageGallery;
