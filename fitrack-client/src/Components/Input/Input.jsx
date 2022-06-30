import React from 'react';

const Input = ({
  wrapperClassName,
  labelClassName,
  labelName,
  inputClassName,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={wrapperClassName}>
      <label className={labelClassName} htmlFor="">
        {labelName}
      </label>
      <input
        className={inputClassName}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
