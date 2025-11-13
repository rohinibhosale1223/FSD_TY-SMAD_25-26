import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <FooterBrand />
          <FooterLinks />
          <FooterSocial />
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ToyKart. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;