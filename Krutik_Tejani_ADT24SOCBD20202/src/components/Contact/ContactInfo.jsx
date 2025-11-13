import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FiPhone />,
      title: "Phone",
      info: "+91 90997 31627",
      subInfo: "Mon-Fri 9am-6pm"
    },
    {
      id: 2,
      icon: <FiMail />,
      title: "Email",
      info: "krutiktejani@gmail.com",
      subInfo: "We reply within 24 hours"
    },
    {
      id: 3,
      icon: <FiMapPin />,
      title: "Address",
      info: "MIT ADT UNIVERSITY, LONI , PUNE",
      subInfo: "MAHARASTRA , INDIA"
    },
    {
      id: 4,
      icon: <FiClock />,
      title: "Business Hours",
      info: "Mon - Fri: 9am - 6pm",
      subInfo: "Sat: 10am - 4pm"
    }
  ];

  return (
    <section className="contact-info">
      <div className="container">
        <div className="contact-info-grid">
          {contactDetails.map(detail => (
            <div key={detail.id} className="contact-info-card">
              <div className="contact-info-icon">{detail.icon}</div>
              <h3 className="contact-info-title">{detail.title}</h3>
              <p className="contact-info-main">{detail.info}</p>
              <p className="contact-info-sub">{detail.subInfo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;