import React from "react";
import "../styles/ContextMenu.css";

export default function ContextMenu({ options, position, onOptionClick }) {
  return (
    <div
      className="ContextMenu"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <ul className="options">
        {options.map(option => (
          <li
            className="option"
            key={option.name}
            onClick={() => onOptionClick(option.name)}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
