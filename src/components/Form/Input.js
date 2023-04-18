import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { MdCancel } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import IconButton from "../IconButton";

const Input = React.forwardRef(
  (
    {
      className,
      onChange,
      onBlur,
      label,
      id,
      error,
      isClearable,
      hint,
      type,
      ...rest
    },
    ref
  ) => {
    const [reset, setReset] = useState(uuidv4());
    const [inputType, setInputType] = useState(type);

    const onClear = () => {
      onChange({ target: { value: "" } });
      setReset(uuidv4());
    };

    const restProps = () => {
      const temp = { ...rest };
      temp.defaultValue = temp.value || "";
      delete temp.value;
      return temp;
    };

    return (
      <span
        className={`d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ${
          error ? "error" : ""
        }`}
        ref={ref}
      >
        <input
          key={`input-${reset}`}
          id={`input-${id}`}
          type={inputType}
          className={`${className}${isClearable ? " input-clearable" : ""}`}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={label}
          step="any"
          {...restProps()}
        />
        <label htmlFor={`input-${id}`}>{label}</label>
        <span className="input-error">{error}</span>
        {isClearable && (
          <MdCancel className="input-clear-btn" size={18} onClick={onClear} />
        )}
        {type === "password" && (
          <IconButton
            icon={
              inputType === "password" ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )
            }
            variant="outline-link"
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
            className="p-0 m-0 position-absolute btn--show-password"
          />
        )}
        {hint !== "" && (
          <span style={{ fontSize: "12px", color: "#c1b1b1" }}>{hint}</span>
        )}
      </span>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  isClearable: PropTypes.bool,
  type: PropTypes.string,
  hint: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  onChange: () => null,
  onBlur: () => null,
  label: "",
  id: uuidv4(),
  error: "",
  isClearable: false,
  type: "text",
  hint: "",
};

export default Input;
