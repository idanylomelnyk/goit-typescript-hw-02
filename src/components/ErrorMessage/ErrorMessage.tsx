import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => (
  <div className={css.error}>
    <p>Something went wrong. Please try again later.</p>
  </div>
);

export default ErrorMessage;
