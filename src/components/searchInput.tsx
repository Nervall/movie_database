import { useState } from 'react';
import SearchIcon from '../assets/searchicon.svg';
import './searchInput.css';

type SearchInputProps = {
  name?: string;
  placeholder?: string;
  handleSearch: (search: string) => void;
};

const SearchInput = ({
  name = 'search',
  placeholder = 'Search...',
  handleSearch,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <form className="search-wrapper" onSubmit={(e) => onSubmit(e)} role="form">
      {SearchIcon && (
        <img src={SearchIcon} alt="Search icon" width="32px" height="32px" />
      )}
      <input
        className="search-input"
        id={name}
        type="search"
        name={name}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
