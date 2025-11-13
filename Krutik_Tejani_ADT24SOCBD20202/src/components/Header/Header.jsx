import Logo from './Logo';
import SearchBar from './SearchBar';
import Navigation from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} style={{ cursor: 'pointer' }}>
            <Logo />
          </div>
          <SearchBar />
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </header>
  );
};

export default Header;