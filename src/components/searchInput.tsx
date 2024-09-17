import { useState } from 'react';
import SearchIcon from '../assets/searchicon.svg';
import './searchInput.css';

type SearchInputProps = {
    name?: string;
    placeholder?: string;
    handleSearch: (search: string) => void
};

const SearchInput = ({ name = "search", placeholder = "Search...", handleSearch }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

    return (
      <form className="search-wrapper" onSubmit={() => handleSearch(searchValue)} role='form'>
        {SearchIcon && <img src={SearchIcon} alt="Search icon" />}
        <input
          className="search-input"
          id={name}
          type="search"
          name={name}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit" className='search-button'>Search</button>
      </form>
    );
  };
  

export default SearchInput;