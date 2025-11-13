import { FiMail } from 'react-icons/fi';

const NewsletterSection = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-description">
              Get updates on new arrivals, special offers, and exclusive deals!
            </p>
          </div>
          <form className="newsletter-form">
            <div className="input-group">
              <FiMail className="input-icon" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;