import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FooterSocial = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Facebook',
      icon: <FiFacebook />,
      url: 'https://www.facebook.com/profile.php?id=100075460612986/',
      color: '#1877F2'
    },
    {
      id: 2,
      name: 'Instagram',
      icon: <FiInstagram />,
      url: 'https://www.instagram.com/p/DNc-wdkMjfu/',
      color: '#E4405F'
    },
    {
      id: 3,
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://web.whatsapp.com/',
      color: '#25D366'
    },
    {
      id: 4,
      name: 'YouTube',
      icon: <FiYoutube />,
      url: 'https://www.youtube.com/watch?v=X70Y0hq4jXw',
      color: '#FF0000'
    }
  ];

  return (
    <div className="footer-social">
      <h4 className="footer-heading">Follow Us</h4>
      <div className="social-icons">
        {socialLinks.map(social => (
          <a 
            key={social.id}
            href={social.url}
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            style={{ '--hover-color': social.color }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;