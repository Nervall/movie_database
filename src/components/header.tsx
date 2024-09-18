import { useNavigate } from 'react-router-dom';
import SearchInput from './searchInput';
import { Logo } from '../assets/index';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (search: string) => {
    navigate('movies/' + search);
  };

  return (
    <header className="header-wrapper">
      <button onClick={() => (window.location.href = '/')}>
        <img
          src={Logo}
          alt="Movie database logo"
          width="350px"
          height="175px"
        />
      </button>
      <SearchInput
        name="search"
        placeholder="Search movie..."
        handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header;
