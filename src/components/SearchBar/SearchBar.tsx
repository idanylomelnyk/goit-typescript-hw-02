import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => (
  <header className={css.header}>
    <form className={css.form} onSubmit={onSubmit}>
      <input
        className={css.input}
        type="text"
        name="image"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default SearchBar;
