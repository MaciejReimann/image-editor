import React from "react";
import LogoMenu from "./LogoMenu";
import TextMenu from "./TextMenu";

import "../styles/ToolsMenu.css";

export default function ToolsMenu({ logos, onLogoDrag, onDragEnd }) {
  return (
    <div className="ToolsMenu">
      <LogoMenu logos={logos} onDragEnd={onDragEnd} />
      <TextMenu />
    </div>
  );
}
