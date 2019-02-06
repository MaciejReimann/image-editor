import React from "react";
import "../styles/BackgroundMenu.css";

export default function Thumbnail({ cls, src, alt }) {
  return (
    <div className={cls} style={{ backgroundImage: src }}>
      {src && <img src={src} alt={alt} />}
    </div>
  );
}
