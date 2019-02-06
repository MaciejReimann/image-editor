import React from "react";
import "../styles/LogoMenu.css";
import Thumbnail from "./Thumbnail";

export default function LogoMenu({ logos, onDragEnd }) {
  return (
    <div className="LogoMenu">
      <div className="Header">Add Logo</div>
      <div className="logos">
        {logos.map(logo => (
          <Thumbnail
            onDragEnd={onDragEnd}
            className="Logo"
            src={logo}
            alt="logo"
            cls={"Logo"}
            key={logo}
          />
        ))}
      </div>
    </div>
  );
}
