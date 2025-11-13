const ContactMap = () => {
  return (
    <section className="contact-map">
      <div className="container">
        <div className="map-wrapper">
          <div className="map-placeholder">
            <div className="map-icon">📍</div>
            <h3>Visit Our Store</h3>
            <p>MIT ADT UNIVERSITY , LONI , PUNE</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;