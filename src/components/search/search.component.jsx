import React from "react";
import "./search.style.css";
export const Search = ({ placeholder, handleChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
