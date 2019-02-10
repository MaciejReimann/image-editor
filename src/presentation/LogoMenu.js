import React from "react";
import "../styles/LogoMenu.css";
import Thumbnail from "./Thumbnail";

export default function LogoMenu({ logosURLs, onDragEnd }) {
  return (
    <div className="LogoMenu">
      <div className="Header">Add Logo</div>
      <div className="logos">
        {logosURLs.map(url => (
          <Thumbnail
            onDragEnd={() => onDragEnd(url)}
            className="Logo"
            src={url}
            alt="logo"
            cls={"Logo"}
            key={url}
          />
        ))}
      </div>
    </div>
  );
}
