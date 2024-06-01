import css from './ImageCard.module.css';

interface ImageCardProps {
  image: {
    id: string;
    urls: {
      regular: string;
    };
    likes: number;
    user: {
      instagram_username: string;
    };
  };
  onOpen: (bool: boolean) => void;
  onData: (likes: string, instagram: string, selectedImage: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onOpen, onData }) => {
  const handleClick = () => {
    onData(image.likes.toString(), image.user.instagram_username, image.urls.regular);
    onOpen(true);
  };

  return (
    <li className={css.image}>
      <img
        src={image.urls.regular}
        alt={image.id}
        className={css.image}
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageCard;
