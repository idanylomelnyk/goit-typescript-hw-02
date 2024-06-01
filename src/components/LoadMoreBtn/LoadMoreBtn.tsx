import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onHandleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onHandleLoadMore }) => (
  <button type="button" className={css.button} onClick={onHandleLoadMore}>
    Load more
  </button>
);

export default LoadMoreBtn;
