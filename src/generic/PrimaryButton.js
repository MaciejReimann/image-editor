import React from "react";

export default function PrimaryButton({ onClick, disabled, label }) {
  return (
    <button className="primary btn" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
