import { useNavigate } from 'react-router-dom';
import SearchInput from './searchInput';
import { Logo } from '../assets/index';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (search: string) => {
    navigate('movies/' + search);
  };

  return (
    <header style={{ padding: '3rem' }}>
      <button
        style={{ background: 'none', cursor: 'pointer', border: 'none' }}
        onClick={() => (window.location.href = '/')}
      >
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
