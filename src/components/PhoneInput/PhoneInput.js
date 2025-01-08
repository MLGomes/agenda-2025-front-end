import React from "react";
import InputMask from "react-input-mask";

function PhoneInput({ value, onChange, ...rest }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <InputMask
      mask="(99) 99999-9999"
      value={value}
      onChange={handleChange}
      className="form-control"
      {...rest}
    />
  );
}

export default PhoneInput;
