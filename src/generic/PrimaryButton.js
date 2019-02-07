import React from "react";

export default function PrimaryButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="primary btn" onClick={onClick}>
      {label}
    </button>
  );
}
