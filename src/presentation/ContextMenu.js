import React from "react";

export default function ContextMenu({ options }) {
  return (
    <div className="context-menu">
      <ul className="context-menu-options">
        {options.map(option => (
          <li className="option">option.name</li>
        ))}
      </ul>
    </div>
  );
}
