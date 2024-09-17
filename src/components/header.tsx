import SearchInput from './searchInput';

const Header = () => {

    const handleSearch = (search: string) => {
        console.log(search)
    }

    return (
        <header style={{ padding: '2rem' }}>
            <h1>THE MOVIE DATABASE</h1>
                <SearchInput 
                name="search"
                placeholder="Search movie..."
                handleSearch={handleSearch}
                />
        </header>
    )
};

export default Header;
