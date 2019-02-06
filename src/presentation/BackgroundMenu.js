import React from "react";
import Thumbnail from "./Thumbnail";
import SecondaryButton from "../generic/SecondaryButton";
import "../styles/BackgroundMenu.css";

export default function BackgroundMenu({ onDeleteBackground }) {
  const thumbnails = Array(4)
    .fill()
    .map((_, i) => <Thumbnail key={i} />);
  return (
    <div className="BackgroundMenu">
      <div className="Header">Select Background</div>
      <div className="thumbnails">{thumbnails}</div>
      <SecondaryButton onClick={onDeleteBackground} label="Delete Background" />
    </div>
  );
}
