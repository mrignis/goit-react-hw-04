import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={styles.button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
