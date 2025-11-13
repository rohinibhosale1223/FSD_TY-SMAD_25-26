import React, { useState } from "react";
import "./AddEventPage.css";

export const AddEventPage = ({ onAddEvent }) => {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    price: "",
    location: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !eventData.name ||
      !eventData.date ||
      !eventData.price ||
      !eventData.location ||
      !eventData.imageUrl
    ) {
      alert("Please fill all fields!");
      return;
    }
    onAddEvent(eventData);
    setEventData({
      name: "",
      date: "",
      price: "",
      location: "",
      imageUrl: "",
    });
  };

  return (
    <div className="add-event-wrapper">
      <div className="add-event-card">
        <h2>➕ Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={eventData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Event Date (e.g., Mar 12, 2026)"
            value={eventData.date}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Ticket Price (₹)"
            value={eventData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={eventData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={eventData.imageUrl}
            onChange={handleChange}
          />
          <button type="submit" className="add-btn">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};
