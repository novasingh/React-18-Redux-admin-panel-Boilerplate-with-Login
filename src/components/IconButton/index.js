import React from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const Icon = (icon, size = "") => {
  const extraProps = {
    size: 22
  };
  if (size === 'lg') {
    extraProps.size = 32;
  } else if (size === 'sm') {
    extraProps.size = 18;
  }
  return <icon.type {...icon.props} {...extraProps} />
}

const IconButton = ({ variant, className, onClick, size, isLoading, disabled, children, icon }) => {
  return (
    <Button
      variant={variant}
      className={`btn-icon ${size ? `btn-icon-${size}` : ''} ${isLoading ? `btn-icon-loading` : ''} ${className}`}
      onClick={onClick}
      size={size}
      disabled={isLoading || disabled}
    >
      <span>{Icon(icon, size)}{children && <span>{children}</span>}</span>
    </Button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.any,
};

IconButton.defaultProps = {
  variant: "default",
  className: "",
  size: "",
  onClick: () => null,
  isLoading: false,
  disabled: false,
  icon: null
}

export default IconButton;