import React from "react";

export default function PrimaryButton({ onClick, label }) {
  return (
    <button className="primary btn" onClick={onClick}>
      {label}
    </button>
  );
}
