/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Button({ onClick, text }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      {text}
    </button>
  );
}

export default Button;
