import React from "react";

export default function SecondaryButton({ onClick, label }) {
  return (
    <button className="secondary btn" onClick={onClick}>
      {label}
    </button>
  );
}
