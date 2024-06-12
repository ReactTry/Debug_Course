import React from "react";

export const TextInput = ({
  handleChange,
  isFormValidOnBlur,
  errorFields,
  label,
  id,
  name,
  type,
}) => {
  return (
    <div>
      {" "}
      <div className="input-section">
        <label htmlFor="firstname">{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={id}
          onBlur={isFormValidOnBlur}
          onChange={handleChange}
        />
        {errorFields[name] && (
          <p className="danger"> {label} is required</p>
        )}
      </div>
    </div>
  );
};
