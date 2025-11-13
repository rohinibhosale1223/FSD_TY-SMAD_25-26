import { footerLinks } from '../../data/data';

const FooterLinks = () => {
  return (
    <>
      <div className="footer-column">
        <h4 className="footer-heading">Shop</h4>
        <ul className="footer-links">
          {footerLinks.shop.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-column">
        <h4 className="footer-heading">Help</h4>
        <ul className="footer-links">
          {footerLinks.help.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-column">
        <h4 className="footer-heading">Company</h4>
        <ul className="footer-links">
          {footerLinks.company.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;