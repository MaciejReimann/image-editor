import React from "react";
import LogoMenu from "./LogoMenu";
import TextMenu from "./TextMenu";

import "../styles/ToolsMenu.css";

export default function ToolsMenu() {
  return (
    <div className="ToolsMenu">
      <LogoMenu />
      <TextMenu />
    </div>
  );
}
