import React from "react";

export default function PrimaryButton({ onClick, label, disabled }) {
  return (
    <button
      onClick={onClick}
      className="primary btn"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
