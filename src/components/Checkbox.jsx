/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Checkbox({ checked, onChange, label }) {
  return (
    <>
      <label className="popupLabel">
        <input
          onChange={onChange}
          checked={checked}
          id=""
          type="radio"
          name="CNPJ"
          className="popupInput"
        />

        {label}
      </label>
    </>
  );
}

export default Checkbox;
