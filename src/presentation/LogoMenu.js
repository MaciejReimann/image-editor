import React from "react";
import "../styles/LogoMenu.css";
import Thumbnail from "./Thumbnail";

export default function LogoMenu({ logos }) {
  return (
    <div className="LogoMenu">
      <div className="Header">Add Logo</div>
      <div className="logos">
        {logos.map(logo => (
          <Thumbnail className="Logo" src={logo} alt="logo1" cls={"Logo"} />
        ))}
      </div>
    </div>
  );
}
