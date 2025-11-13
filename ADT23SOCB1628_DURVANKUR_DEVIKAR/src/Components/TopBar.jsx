import React from "react";

export default function TopBar() {
  return (
    <div className="bg-dark text-white py-2">
      <div className="container d-flex justify-content-between align-items-center small flex-wrap">
        <div>
          <span className="me-4">
            📧 <a
              className="text-decoration-none text-white"
              href="mailto:info@travelworld.com"
            >
              info@travelworld.com
            </a>
          </span>
          <span>📞 Enquire: +91-9538365552</span>
        </div>
        <div className="mt-1 mt-sm-0">
          <span>🆘 Helpline: +91-8095499999</span>
        </div>
      </div>
    </div>
  );
}
