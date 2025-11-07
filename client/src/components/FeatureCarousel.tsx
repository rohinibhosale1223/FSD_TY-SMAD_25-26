import  { useState, useEffect } from "react";
import { BarChart, ShieldCheck, FileText, Globe, Palette, Users, Bell, Mail, Settings } from 'lucide-react';

const useResponsiveCards = () => {
  const getCardsPerPage = () => {
    if (typeof window === "undefined") return 3; 
    if (window.innerWidth < 768) return 1; 
    if (window.innerWidth < 1024) return 2; 
    return 3;
  };
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return cardsPerPage;
};

const features = [
  {
    title: "Real-Time Collaboration",
    description: "See your team's cursors and edits live. Work together on the same canvas from anywhere in the world.",
    icon: <Users className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Infinite Canvas",
    description: "Never run out of space. Our infinite canvas lets your ideas grow without boundaries. Pan and zoom with ease.",
    icon: <BarChart className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Powerful Tooling",
    description: "From smart shapes and sticky notes to flow-chart connectors, we provide the tools you need.",
    icon: <Settings className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "SSL Certificate Monitoring",
    description: "We automatically watch your SSL certificates and notify you days before they expire.",
    icon: <ShieldCheck className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Branded Status Pages",
    description: "Communicate with clarity. Host a status page on your domain with your logo and custom colors.",
    icon: <FileText className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Custom Domains",
    description: "Host your status page on your own domain (e.g., status.yourcompany.com) for a seamless brand experience.",
    icon: <Globe className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Your Brand, Your Page",
    description: "Add your logo, favicon, and custom colors to make your status page a true extension of your brand.",
    icon: <Palette className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Instant, Multi-Channel Alerts",
    description: "Know about issues the moment they happen via email, SMS, Slack, and Discord.",
    icon: <Bell className="w-7 h-7 text-primary-custom" />,
  },
  {
    title: "Email & SMS Notifications",
    description: "Receive immediate alerts via email and SMS so you can react quickly.",
    icon: <Mail className="w-7 h-7 text-primary-custom" />,
  },
];

const AUTO_SLIDE_INTERVAL = 5000; 

function FeatureCarousel() {
  const cardsPerPage = useResponsiveCards();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(features.length / cardsPerPage);

  useEffect(() => {
    setPage(0);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % totalPages);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [totalPages]);

  const startIdx = page * cardsPerPage;
  const visibleFeatures = features.slice(startIdx, startIdx + cardsPerPage);

  const goToPage = (idx: number) => setPage(idx);
  const prevPage = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const nextPage = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="flex flex-col items-center justify-center pt-10 w-full px-4">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {visibleFeatures.map((feature, index) => (
          <div
            key={`${feature.title}-${index}`}
            className="bg-dark-custom rounded-2xl px-7 py-8 md:p-5 flex flex-col items-start w-full border border-gray-800"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-primary-custom/10 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-400 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-10">
        <button
          onClick={prevPage}
          className="rounded-full p-2 bg-dark-custom hover:bg-primary-custom/20 text-white border border-gray-700 transition-all duration-300"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === page ? "bg-primary-custom w-4" : "bg-secondary-custom w-2"}`}
            />
          ))}
        </div>
        <button
          onClick={nextPage}
          className="rounded-full p-2 bg-dark-custom hover:bg-primary-custom/20 text-white border border-gray-700 transition-all duration-300"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default FeatureCarousel;