import React from "react";
import "./MessageBox.css";

export const MessageBox = ({ message, type }) => (
  <div className={`msg-box ${type}`}>{message}</div>
);
