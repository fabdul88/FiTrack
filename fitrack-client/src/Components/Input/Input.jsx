import React from 'react';

const Input = ({
  wrapperClassName,
  labelClassName,
  labelName,
  inputClassName,
  type,
  value,
  onChange,
  name,
  htmlFor,
}) => {
  return (
    <div className={wrapperClassName}>
      <label className={labelClassName} htmlFor={htmlFor}>
        {labelName}
      </label>
      <input
        className={inputClassName}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
