import React from "react";

export default function RadioInput({ value, onChange, checked }) {
  return (
    <div className="radio">
      <label>
        <input
          value={value}
          onChange={onChange}
          type="radio"
          checked={checked}
        />
        {value}
      </label>
    </div>
  );
}
