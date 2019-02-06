import React from "react";
import "../styles/BackgroundMenu.css";

export default function Thumbnail({ cls, src, alt, onDragEnd }) {
  return (
    <div className={cls} style={{ backgroundImage: src }}>
      {src && <img onDragEnd={e => onDragEnd(e, src)} src={src} alt={alt} />}
    </div>
  );
}
