import React from "react";
import Thumbnail from "./Thumbnail";
import "../styles/BackgroundMenu.css";

export default function BackgroundMenu() {
  return (
    <div className="BackgroundMenu">
      <div className="Header">Select Background</div>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <button>Delete Background</button>
    </div>
  );
}
