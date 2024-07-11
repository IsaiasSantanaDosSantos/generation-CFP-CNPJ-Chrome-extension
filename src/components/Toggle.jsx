/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// import { Container } from "./styles";

function Toggle({ checked, label, onChange }) {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer my-3">
        <input
          type="checkbox"
          defaultChecked={checked}
          className="sr-only peer"
          onChange={onChange}
        />
        <div className="w11 h6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
        <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
      </label>
    </>
  );
}

export default Toggle;
