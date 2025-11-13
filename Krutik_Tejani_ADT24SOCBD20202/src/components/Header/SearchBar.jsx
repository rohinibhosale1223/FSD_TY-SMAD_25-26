import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input 
        type="text" 
        placeholder="Search for toys..." 
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;